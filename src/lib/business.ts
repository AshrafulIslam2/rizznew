/**
 * Single source of truth for the business NAP (Name, Address, Phone).
 *
 * These values MUST stay byte-identical to the Google Business Profile
 * listing. Google cross-checks the address it finds on the site against the
 * one on the profile; two spellings of the same address read as two different
 * businesses and dilute local ranking. That is exactly why this lives in one
 * file — the footer and the ClothingStore schema both import it, so they
 * cannot drift apart the way they would if the address were typed twice.
 *
 * If the shop ever moves or changes number, update it HERE and on the Google
 * Business Profile in the same sitting.
 */
export const BUSINESS = {
  name: "RIZZ Leather",

  // Address exactly as it appears on the Google Business Profile.
  streetAddress: "Afmi Plaza, Bayazid Bostami Rd",
  addressLocality: "Chattogram",
  postalCode: "4000",
  addressCountry: "BD",

  /** E.164 form — required by schema.org and by `tel:` links. */
  telephone: "+8801750514197",
  /** How the number is written for humans in Bangladesh. */
  telephoneDisplay: "01750514197",
} as const;

/** One-line address for display, e.g. in the footer. */
export const BUSINESS_ADDRESS_LINE =
  `${BUSINESS.streetAddress}, ${BUSINESS.addressLocality} ${BUSINESS.postalCode}`;
