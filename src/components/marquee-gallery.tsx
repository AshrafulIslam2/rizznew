import { imgProps } from "@/lib/image";

export function MarqueeGallery({ images }: { images: string[] }) {
  if (images.length === 0) return null;

  // Duplicate the strip so the loop is seamless — translateX(-50%) lands exactly
  // back on the first copy with no visible seam.
  const track = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div className="marquee-track flex w-max gap-3">
        {track.map((url, i) => (
          // Each frame is a fixed 384×256 box, so it only ever needs 384px of
          // image — 768 on a 2× screen. The duplicated half costs nothing: it
          // is the same URL, so the browser serves it from its own cache.
          <img
            key={i}
            {...imgProps(url, [400, 800], "384px")}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="h-64 w-96 shrink-0 object-cover object-center"
          />
        ))}
      </div>
    </div>
  );
}
