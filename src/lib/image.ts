/**
 * Cloudinary delivery, sized for where the image actually appears.
 *
 * WHY THIS EXISTS
 *
 *   Every image URL in this app came out of the database and went into the
 *   page untouched. A product photograph is stored as a ~1120×1400 PNG of
 *   about 2.5 MB, and that is exactly what the browser downloaded — the same
 *   2.5 MB for a 72px gallery thumbnail as for the main shot. One catalogue
 *   page view cost about 15 MB of image traffic, which is how a 25-credit
 *   Cloudinary plan ended up at 40.
 *
 *   Cloudinary will do the work instead, at no extra cost, if the URL asks:
 *
 *     f_auto      serve WebP/AVIF to browsers that accept it, and keep PNG
 *                 when the image has transparency — the format is negotiated
 *                 per request, so nothing has to be re-uploaded
 *     q_auto      pick a quality per image rather than a fixed number
 *     w_<n>       send roughly the pixels the layout can use
 *     c_limit     …but never enlarge. A small original is delivered as it is
 *                 rather than blown up and blurred.
 *
 *   Measured on the real asset behind the current homepage card
 *   (rizz-products/pvm9koqjcug6qu9nszqt.png, 1122×1402):
 *
 *     original PNG                  2587 KB
 *     f_auto,q_auto (no resize)      264 KB
 *     f_auto,q_auto,w_1200,c_limit   264 KB   ← product detail
 *     f_auto,q_auto,w_600,c_limit     60 KB   ← product card
 *     f_auto,q_auto,w_400,c_limit     23 KB   ← card on a phone
 *     f_auto,q_auto,w_160,c_limit      4 KB   ← gallery thumbnail
 *
 * WHY A FIXED LADDER OF WIDTHS
 *
 *   Each distinct width is a derived asset Cloudinary generates and stores.
 *   Asking for w_412 on one phone and w_418 on the next would spawn
 *   derivatives without end and spend the transformation quota. Five widths
 *   cover every image slot in this design; after the first visitor hits one,
 *   every later visitor gets a CDN cache hit.
 *
 * WHAT IT DELIBERATELY DOES NOT DO
 *
 *   It does not touch a URL it does not recognise. Local files under
 *   /assets/…, Unsplash URLs and data: URIs pass through untouched, so a
 *   fallback image still renders if a product has no Cloudinary photo yet.
 *   When in doubt it returns the original: a slightly heavy image is a much
 *   smaller problem than a broken one.
 */

/** The only widths we ever ask Cloudinary for. */
export const IMG_WIDTHS = [160, 400, 600, 800, 1200] as const;

/** Sensible subsets, so call sites read as intent rather than as numbers. */
export const W_THUMB = [160] as const;                    // gallery + checkout thumbnails
export const W_CARD = [400, 600, 800] as const;           // product cards, category tiles
export const W_HERO = [600, 800, 1200] as const;          // full-width hero and banners
export const W_DETAIL = [400, 600, 800, 1200] as const;   // the main product photograph

/**
 * Matches the fixed part of a Cloudinary delivery URL: cloud name, asset type
 * and delivery type. Everything after it is transformations, then an optional
 * version, then the public ID.
 */
const CLOUDINARY =
  /^(https?:\/\/res\.cloudinary\.com\/[^/]+\/(?:image|video)\/(?:upload|fetch|private|authenticated|sprite))\/(.+)$/i;

/**
 * Cloudinary transformation parameter prefixes.
 *
 * This is an allow-list on purpose. The obvious test — "does the segment look
 * like key_value?" — also matches a public ID such as `my_photo`, and
 * mistaking a public ID for a transformation would produce a 404 instead of a
 * picture. Only a segment made entirely of known parameters counts.
 */
const TX_PARAM =
  /^(?:a|ac|ar|b|bo|br|c|co|cs|dn|dl|dpr|du|e|eo|f|fl|fn|g|h|if|ki|l|o|p|pg|q|r|so|sp|t|u|vc|vs|w|x|y|z)_/;

function isTransformSegment(segment: string): boolean {
  if (!segment) return false;
  return segment.split(',').every((part) => TX_PARAM.test(part));
}

/**
 * Split a Cloudinary path into the transformations already on it and the
 * version + public ID that must survive untouched.
 *
 * The version segment (`v1788112012`) is the reliable boundary and every URL
 * this site stores has one. The allow-list walk is the fallback for a URL
 * saved without a version.
 */
function split(rest: string): { existing: string[]; tail: string[] } | null {
  const segments = rest.split('/');
  let cut = segments.findIndex((s) => /^v\d+$/.test(s));

  if (cut < 0) {
    cut = 0;
    while (cut < segments.length - 1 && isTransformSegment(segments[cut])) cut += 1;
  }

  const tail = segments.slice(cut);
  if (tail.length === 0) return null; // nothing left to point at — refuse to rewrite
  return { existing: segments.slice(0, cut), tail };
}

/**
 * One Cloudinary URL, resized.
 *
 * Our transformation is appended to the END of any existing chain, not the
 * front. If an admin has already set a crop, that crop must happen first and
 * our resize should shrink its result; doing it the other way round would
 * change which part of the shoe ends up in frame.
 */
export function cldUrl(url: string | null | undefined, width: number): string {
  if (!url) return '';
  const match = CLOUDINARY.exec(url);
  if (!match) return url; // local asset, Unsplash, data: URI — not ours to rewrite

  const parts = split(match[2]);
  if (!parts) return url;

  const ours = `f_auto,q_auto,w_${width},c_limit`;
  return [match[1], ...parts.existing, ours, ...parts.tail].join('/');
}

/**
 * A `srcset` for the widths given, or `undefined` when the URL is not a
 * Cloudinary one.
 *
 * `undefined` rather than an empty string because React omits the attribute
 * entirely for `undefined`, and an empty `srcset=""` is invalid markup that
 * some browsers read as "no candidates".
 */
export function cldSrcSet(
  url: string | null | undefined,
  widths: readonly number[] = IMG_WIDTHS,
): string | undefined {
  if (!url || !CLOUDINARY.test(url)) return undefined;
  return widths.map((w) => `${cldUrl(url, w)} ${w}w`).join(', ');
}

/**
 * Everything an `<img>` needs for one slot, so a call site cannot set `src`
 * to a full-resolution original and forget the `srcSet`.
 *
 * `fallbackWidth` is what a browser with no `srcset` support (and any crawler
 * reading `src`) gets: pick the size the slot uses at 1× rather than the
 * largest, or those clients pay for pixels they cannot show.
 */
export function imgProps(
  url: string | null | undefined,
  widths: readonly number[],
  sizes: string,
): { src: string; srcSet?: string; sizes?: string } {
  const fallbackWidth = widths[Math.min(1, widths.length - 1)];
  const srcSet = cldSrcSet(url, widths);
  return {
    src: cldUrl(url, fallbackWidth),
    srcSet,
    // `sizes` without `srcset` does nothing, so leave it off local assets.
    sizes: srcSet ? sizes : undefined,
  };
}
