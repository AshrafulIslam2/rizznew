export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date
  updatedAt?: string;
  category: string;
  readingTime: number; // minutes
  coverImage?: string;
  coverAlt: string;
  body: Section[];
};

export type Section =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export const POSTS: Post[] = [
  {
    slug: "leather-vs-synthetic-sandals",
    title: "Leather vs Synthetic Sandals: Which One Should You Choose?",
    description:
      "A side-by-side breakdown of genuine leather vs synthetic sandals — comfort, durability, breathability, cost, and environmental impact — to help you make the right call.",
    publishedAt: "2026-06-10",
    category: "Buying Guide",
    readingTime: 6,
    coverAlt: "Genuine leather sandal next to synthetic sandal on a wooden surface",
    body: [
      {
        type: "p",
        text: "Walk into any shoe store in Dhaka or browse any online marketplace and you will find sandals across an enormous price range — from ৳ 200 synthetic flip-flops to ৳ 2,000+ genuine leather slides. The difference in price is obvious. The difference in value is not. This guide breaks down every dimension that matters so you can make an informed decision.",
      },
      { type: "h2", text: "What Are Synthetic Sandals Made Of?" },
      {
        type: "p",
        text: "Most affordable sandals use PU (polyurethane) leather, PVC, or EVA foam — petroleum-based materials engineered to mimic the look of leather. Some use bonded leather: shredded leather scraps glued with polyurethane and pressed onto a fabric backing. Bonded leather looks convincing on day one but peels and cracks within six to twelve months of regular wear.",
      },
      { type: "h2", text: "The Case for Genuine Leather Sandals" },
      {
        type: "p",
        text: "Genuine leather — full-grain calfskin, vegetable-tanned cowhide, or suede — comes from a single continuous hide. There are no seams to delaminate, no coatings to peel. The fibres are natural protein structures that flex with your foot, breathe with the weather, and gradually mould to your gait. This is why a well-made leather sandal becomes more comfortable with every wearing, while a synthetic one becomes less comfortable.",
      },
      {
        type: "table",
        head: ["Property", "Genuine Leather", "Synthetic / PU"],
        rows: [
          ["Breathability", "Excellent — pores allow airflow", "Poor — traps heat and sweat"],
          ["Break-in period", "Short — softens with wear", "None, but stiffens over time"],
          ["Lifespan", "3–10+ years with care", "6–18 months typical"],
          ["Repairability", "Resole, restitch, re-dye", "Mostly non-repairable"],
          ["Odour resistance", "High — absorbs and neutralises", "Low — retains moisture"],
          ["Environmental impact", "Biodegradable, long lifespan", "Microplastics, non-biodegradable"],
          ["Cost (Bangladesh)", "৳ 1,200–৳ 4,000+", "৳ 200–৳ 800"],
        ],
      },
      { type: "h2", text: "Breathability and Foot Health" },
      {
        type: "p",
        text: "Bangladesh's subtropical climate means your feet sweat — a lot. Leather's open pore structure wicks moisture away from the skin and allows it to evaporate. Synthetic materials trap sweat, creating the warm, damp conditions where foot fungus thrives. If you wear sandals daily through Dhaka summers or Chittagong rains, the breathability of genuine leather is not a luxury; it's a health consideration.",
      },
      { type: "h2", text: "Durability: The True Cost Per Wear" },
      {
        type: "p",
        text: "A ৳ 400 synthetic sandal that lasts one season costs ৳ 400 per season. A ৳ 1,500 leather sandal that lasts four years costs ৳ 375 per season — and that is before you account for the fact that leather can be resoled. Once you calculate cost per wear rather than sticker price, leather wins by a wide margin.",
      },
      {
        type: "callout",
        text: "Our Rizz Harmers Sandals are handcrafted in Chittagong from full-grain leather and start at ৳ 1,500. Browse the sandals collection to find your size.",
      },
      { type: "h2", text: "When Synthetic Makes Sense" },
      {
        type: "ul",
        items: [
          "Beach or poolside use where constant water submersion would damage leather",
          "Children's sandals where outgrowth happens before wear-out",
          "Budget-constrained one-time occasion wear",
          "Ethical veganism — though plant-based leather alternatives are now a credible third option",
        ],
      },
      { type: "h2", text: "Our Verdict" },
      {
        type: "p",
        text: "For everyday wear in Bangladesh's climate, genuine leather sandals are the rational choice. They breathe better, last longer, mould to your foot, and cost less per day of use. The higher upfront price is an investment, not a luxury. If you're shopping for a pair you will still be wearing in three years, choose leather — and choose a maker who can show you the hide it came from.",
      },
      {
        type: "p",
        text: "Read our Leather Sandal Care & Size Guide next to make sure your new pair lasts a decade.",
      },
    ],
  },

  {
    slug: "leather-sandal-care-size-guide",
    title: "Leather Sandal Care & Size Guide: How to Clean, Condition, and Size Your Pair",
    description:
      "Step-by-step care instructions for genuine leather sandals — cleaning, conditioning, drying, storage — plus how to measure your foot and convert to EU sizes.",
    publishedAt: "2026-06-18",
    category: "Care & Sizing",
    readingTime: 7,
    coverAlt: "Leather sandal being conditioned with a horsehair brush on a wooden workbench",
    body: [
      {
        type: "p",
        text: "A well-crafted leather sandal can last a decade or more — but only if you take care of it. Neglect the leather and it will crack, fade, and delaminate far sooner than it should. This guide covers everything you need to know: how to clean your sandals after daily wear, how to condition the leather to prevent cracking, how to dry them without damage, and how to find the right size when ordering online.",
      },
      { type: "h2", text: "Part 1 — How to Clean Leather Sandals" },
      { type: "h3", text: "After Every Wear" },
      {
        type: "ol",
        items: [
          "Use a dry cloth or soft brush to remove dust, dirt, and grit from the footbed and straps.",
          "If the footbed is damp from sweat, stuff the toe box with newspaper or a shoe tree to absorb moisture and maintain shape.",
          "Leave in a cool, shaded spot — never in direct sunlight or near a heat source.",
        ],
      },
      { type: "h3", text: "Weekly Cleaning (for regular wearers)" },
      {
        type: "ol",
        items: [
          "Dampen a soft cloth with lukewarm water (never hot).",
          "Add one small drop of saddle soap or mild leather cleaner.",
          "Wipe straps and footbed in circular motions, lifting grime without saturating the leather.",
          "Wipe away soap residue with a clean damp cloth.",
          "Allow to air-dry completely before wearing or storing.",
        ],
      },
      { type: "h3", text: "Dealing with Rain and Mud" },
      {
        type: "p",
        text: "If your sandals get soaked in a Dhaka monsoon downpour, do not panic. Blot away surface water with a clean towel — do not rub. Stuff with newspaper and leave at room temperature for 24 hours. Only clean and condition once fully dry. Drying wet leather too quickly (with a dryer or direct sun) causes it to stiffen and crack.",
      },
      { type: "h2", text: "Part 2 — Conditioning Leather Sandals" },
      {
        type: "p",
        text: "Leather is skin. It needs moisture to stay supple. Conditioning replaces the natural oils that evaporate over time — especially in Bangladesh's dry winter months (November–February). A leather sandal that is never conditioned will eventually crack along the strap folds.",
      },
      {
        type: "ul",
        items: [
          "Use a beeswax-based conditioner or a neutral leather balm. Coconut oil works in a pinch but can darken light leathers.",
          "Apply a thin, even layer with a soft cloth. Less is more — excess oil attracts dirt.",
          "Let it absorb for 20–30 minutes, then buff with a dry cloth.",
          "Condition every 4–6 weeks for regular wearers, or whenever the leather begins to look dry.",
          "Do not condition suede with regular conditioner — use a dedicated suede brush and protector spray.",
        ],
      },
      {
        type: "callout",
        text: "All RIZZ leather sandals are treated with a protective finish before leaving our Chittagong workshop. A conditioning once a month keeps them looking new for years. See how we make them on our manufacturing page.",
      },
      { type: "h2", text: "Part 3 — Storage" },
      {
        type: "ul",
        items: [
          "Store in a breathable cotton bag or the original box — never a sealed plastic bag.",
          "Keep away from direct sunlight, which fades dye and dries leather.",
          "For long-term storage (off-season), condition first, then stuff with acid-free tissue paper.",
          "Store upright or flat — do not stack heavy items on top of straps.",
        ],
      },
      { type: "h2", text: "Part 4 — Leather Sandal Size Guide" },
      {
        type: "p",
        text: "RIZZ sandals follow EU sizing. Here is how to measure your foot accurately at home:",
      },
      {
        type: "ol",
        items: [
          "Place a sheet of paper on a hard floor. Stand on it with your full weight on that foot.",
          "Trace around your foot with a pencil held vertically.",
          "Measure the distance from the heel to the longest toe in centimetres.",
          "Use the table below to find your EU size.",
        ],
      },
      {
        type: "table",
        head: ["Foot Length (cm)", "EU Size", "UK Size (approx.)"],
        rows: [
          ["24.5–25.0", "39", "5.5"],
          ["25.5–26.0", "40", "6.5"],
          ["26.5–27.0", "41", "7.5"],
          ["27.5–28.0", "42", "8"],
          ["28.5–29.0", "43", "9"],
          ["29.5–30.0", "44", "9.5"],
          ["30.5–31.0", "45", "10.5"],
        ],
      },
      {
        type: "p",
        text: "If your measurement falls between two sizes, go up. Leather stretches slightly with wear, so a snug fit on day one will be perfect by week one. A loose fit will only get looser.",
      },
      {
        type: "p",
        text: "Ready to find your size? Browse our handcrafted leather sandals and enter your EU size at checkout. All orders include COD across Bangladesh.",
      },
    ],
  },

  {
    slug: "how-we-handcraft-leather-sandals-chittagong",
    title: "How We Handcraft Leather Sandals in Chittagong: From Hide to Finished Pair",
    description:
      "A behind-the-scenes look at how RIZZ artisans in Chittagong handcraft leather sandals — hide selection, pattern cutting, stitching, finishing — step by step.",
    publishedAt: "2026-06-25",
    category: "Craft & Process",
    readingTime: 8,
    coverAlt: "Artisan hands stitching a leather sandal strap in a Chittagong workshop",
    body: [
      {
        type: "p",
        text: "Every pair of RIZZ leather sandals begins as a single piece of hide and ends as a finished product after passing through the hands of three or four craftsmen. No two pairs are identical — the natural grain varies, the hand-finishing leaves subtle marks, and the break-in moulds to the wearer's foot over time. This article is a transparent account of how we make our sandals, why we make them this way, and what that means for the person wearing them.",
      },
      { type: "h2", text: "Step 1 — Hide Selection" },
      {
        type: "p",
        text: "We source full-grain cowhide from established tanneries. Full-grain means the outermost layer of the hide is preserved — the part with the tightest, most durable fibre structure and natural grain pattern. Cheaper sandals use corrected-grain leather (sanded flat, then embossed with an artificial pattern) or split leather (the inner layer, weaker and more absorbent). We reject any hide with scars, inconsistent thickness, or excessive stretch.",
      },
      { type: "h2", text: "Step 2 — Pattern Cutting" },
      {
        type: "p",
        text: "Our patterns are hand-drawn on card and refined over dozens of sample pairs. We cut each sandal component — footbed, straps, toe post, heel strap — from the hide using steel-rule dies and a clicker press. The orientation of the cut matters: we align straps along the backbone (the tightest, most consistent part of the hide) where they will bear the most tension.",
      },
      { type: "h2", text: "Step 3 — Skiving and Edge Work" },
      {
        type: "p",
        text: "Skiving is the process of thinning the edges of a leather piece so it folds or joins without a bulky ridge. On strap ends and buckle folds, we skive by hand with a sharp blade. Edge work — bevelling, burnishing, and painting the cut edge — gives our sandals their clean profile and prevents fraying. This is one of the steps that separates handcraft from machine production: a machine can cut, but hand-burnishing an edge until it is glass-smooth takes skill that cannot be automated cheaply.",
      },
      { type: "h2", text: "Step 4 — Assembly and Stitching" },
      {
        type: "p",
        text: "Components are assembled around a last — a foot-shaped form in the target size. Straps are attached to the footbed using a combination of contact cement and saddle stitching. Saddle stitching uses two needles and a single thread in a locked stitch: if one side breaks, the other holds. Machine lock-stitch, by contrast, unravels from a single break point. Our thread is linen, waxed for water resistance.",
      },
      {
        type: "callout",
        text: "Want to see the workshop? Our manufacturing page has photos, a factory video, and information about our capabilities and certifications.",
      },
      { type: "h2", text: "Step 5 — Sole Construction" },
      {
        type: "p",
        text: "The sole is our most labour-intensive component. We use a layered construction: an insole of firm vegetable-tanned leather, a midsole of dense rubber for shock absorption, and an outsole of textured rubber for grip. The layers are bonded with heat-activated cement, then stitched through the welt. The finished sole is trimmed flush with the upper and the edge burnished flat.",
      },
      { type: "h2", text: "Step 6 — Finishing and Quality Check" },
      {
        type: "p",
        text: "The finished sandal is cleaned, conditioned with a neutral leather balm, and inspected for stitch tension, alignment, and edge consistency. Any pair that does not pass our four-point check — stitching, edge work, sole bond, strap alignment — is returned for correction before it leaves the workshop. We do not ship seconds.",
      },
      { type: "h2", text: "Why Chittagong?" },
      {
        type: "p",
        text: "Chittagong has a leatherworking tradition that predates industrialisation. The craftsmen in our workshop have often learned from a parent or grandparent. That inherited knowledge — of how leather behaves at different humidities, of how to read a hide's grain, of when to use the awl versus the needle — is not something you can import or replicate in a factory. It is the reason our sandals feel and age differently from anything made on a production line.",
      },
      {
        type: "p",
        text: "See the full range of handcrafted leather sandals, or learn more about how we work on our manufacturing page.",
      },
    ],
  },

  {
    slug: "best-leather-sandal-brands-bangladesh-2026",
    title: "Best Leather Sandal Brands in Bangladesh (2026 Buyer's Guide)",
    description:
      "An honest comparison of the top genuine leather sandal brands available in Bangladesh in 2026 — quality, price, availability, and what each does best.",
    publishedAt: "2026-07-01",
    category: "Buying Guide",
    readingTime: 9,
    coverAlt: "Selection of leather sandals from different Bangladesh brands laid out on a neutral background",
    body: [
      {
        type: "p",
        text: "Finding a genuine leather sandal in Bangladesh used to mean either importing from abroad or settling for whatever the local market had. That has changed. A generation of local brands has raised the standard of domestic leather goods significantly over the last decade — and the best of them are competitive with mid-tier international brands at a fraction of the price. This guide covers the leading names, what they do well, and where RIZZ fits in the landscape.",
      },
      {
        type: "callout",
        text: "Disclosure: RIZZ is our own brand. We have tried to compare fairly, but read with that in mind. Prices are approximate and subject to change.",
      },
      { type: "h2", text: "What to Look for in a Leather Sandal Brand" },
      {
        type: "ul",
        items: [
          "Leather grade: full-grain > corrected-grain > bonded/PU. Ask explicitly.",
          "Sole construction: stitched > cemented. Cemented soles delaminate; stitched soles can be resoled.",
          "Origin: workshop-made vs. factory-outsourced. Workshop-made has better QC and finish.",
          "Sizing: Bangladesh brands often use BD local sizes. Confirm EU or UK equivalents before ordering.",
          "Return policy: a brand confident in its product will accept returns. Short or no return window is a red flag.",
        ],
      },
      { type: "h2", text: "Leading Leather Sandal Brands in Bangladesh (2026)" },
      { type: "h3", text: "1. RIZZ Leather — Chittagong" },
      {
        type: "p",
        text: "RIZZ is a small-batch workshop brand based in Chittagong. We use full-grain cowhide, hand-stitch our straps, and layer-construct our soles. Our sandals start at ৳ 1,500 and are available with Cash on Delivery nationwide. Because we sell direct, there is no retail markup — you pay workshop price. Our range is deliberately narrow: we make fewer SKUs and make them well rather than flooding the catalogue with variations.",
      },
      {
        type: "p",
        text: "Best for: buyers who want handcrafted quality at a direct-to-consumer price and are comfortable ordering online. Browse our sandals collection.",
      },
      { type: "h3", text: "2. Bata Bangladesh" },
      {
        type: "p",
        text: "Bata has a long history in Bangladesh and operates physical stores across all major cities. Their leather sandal range (Weinbrenner and Marie Claire sub-brands) uses corrected-grain leather and factory construction. Quality is consistent and reliable. Price range for leather sandals: ৳ 1,800–৳ 4,000. Best for: buyers who want to try before they buy and prefer in-store purchase.",
      },
      { type: "h3", text: "3. Apex Adelchi Footwear" },
      {
        type: "p",
        text: "Apex is the largest domestic footwear manufacturer in Bangladesh with a vast retail network. Their leather line uses a mix of corrected-grain and full-grain leather depending on the product tier. Their Ventura and Men's Formal ranges occasionally include genuine leather sandals in the ৳ 2,000–৳ 3,500 range. Best for: nationwide availability and easy exchange.",
      },
      { type: "h3", text: "4. Bay Emporium / Otobi Leather" },
      {
        type: "p",
        text: "Bay Emporium in Dhaka stocks a curated selection of imported and local leather goods. Their in-house leather sandal range is small but well-made. Price range: ৳ 3,000–৳ 6,000. Best for: Dhaka-based buyers who prefer a curated retail experience.",
      },
      { type: "h3", text: "5. Local Dhaka and Chittagong Cordwainers" },
      {
        type: "p",
        text: "Dhaka's Elephant Road, New Market, and Chittagong's Chawkbazar area have individual cordwainers who make bespoke leather sandals to measurement. Quality varies enormously — find a maker by word of mouth and inspect their work before commissioning. Price range: ৳ 800–৳ 2,500 depending on the maker and materials used.",
      },
      { type: "h2", text: "Side-by-Side Comparison" },
      {
        type: "table",
        head: ["Brand", "Leather Grade", "Construction", "Price Range (৳)", "COD Nationwide", "Online Ordering"],
        rows: [
          ["RIZZ Leather", "Full-grain", "Handstitched", "1,500–4,000", "Yes", "Yes"],
          ["Bata Bangladesh", "Corrected-grain", "Factory", "1,800–4,000", "Via Daraz", "Limited"],
          ["Apex Footwear", "Mixed", "Factory", "2,000–3,500", "Via Daraz", "Yes"],
          ["Bay Emporium", "Full-grain (some)", "Mixed", "3,000–6,000", "No", "No"],
          ["Local Cordwainers", "Varies", "Handmade", "800–2,500", "No", "No"],
        ],
      },
      { type: "h2", text: "Our Recommendation" },
      {
        type: "p",
        text: "For the combination of genuine leather quality, handcraft construction, transparent sourcing, and nationwide COD delivery, RIZZ is the strongest value proposition in Bangladesh right now. If you need to try before you buy, visit a Bata store and use the experience to understand sizing and fit — then consider ordering from RIZZ for your next pair. The quality difference in the leather and stitching is noticeable side by side.",
      },
      {
        type: "p",
        text: "See why handmade leather sandals last longer, or shop the sandals collection directly.",
      },
    ],
  },

  {
    slug: "why-handmade-leather-sandals-last-longer",
    title: "Why Handmade Leather Sandals Last Longer Than Mass-Produced Ones",
    description:
      "The structural and material reasons why handcrafted leather sandals outlast factory-made alternatives — stitching, sole construction, leather grade, and the role of the maker.",
    publishedAt: "2026-07-07",
    category: "Craft & Process",
    readingTime: 6,
    coverAlt: "Close-up of saddle stitching on a leather sandal strap showing hand-stitched waxed linen thread",
    body: [
      {
        type: "p",
        text: "A mass-produced leather sandal and a handmade one can look almost identical in a product photo. The difference becomes visible at six months and decisive at two years. This article explains the specific structural and material differences that determine longevity — so you know exactly what you are paying for when you choose handmade.",
      },
      { type: "h2", text: "1. Saddle Stitching vs Machine Lock-Stitch" },
      {
        type: "p",
        text: "Factory sandals use machine lock-stitch: a needle thread and a bobbin thread that loop around each other at each stitch. If one stitch breaks, the interlocking loop means the entire seam can unravel from that point. Handmade saddle-stitching uses two needles, one on each side of the leather, with a single thread that crosses through each hole. If one stitch breaks, the adjacent stitches hold. A saddle-stitched seam does not unravel — it holds until you cut out the entire damaged section.",
      },
      { type: "h2", text: "2. Leather Grade: Why It Matters More Than Brand" },
      {
        type: "p",
        text: "Full-grain leather — the outermost layer of the hide, with its natural grain intact — has the densest fibre structure of any cut. It resists moisture, abrasion, and repeated flexing better than any other grade. Corrected-grain leather (sanded and embossed) has a compromised surface layer. Split leather (from the inner hide layers) is spongy and absorbs moisture readily. Handmade workshops typically use full-grain; factories typically use corrected-grain or split to reduce material cost.",
      },
      {
        type: "callout",
        text: "Every RIZZ sandal uses full-grain leather selected from the backbone of the hide — the tightest, most consistent part. See how we make them in our Chittagong workshop.",
      },
      { type: "h2", text: "3. Sole Construction: Stitched vs Cemented" },
      {
        type: "p",
        text: "Factory sandals almost universally use cemented construction: the sole is glued to the upper with contact cement. Cemented bonds fail in heat, humidity, and over time as the adhesive oxidises. Bangladesh's climate — 30°C+ summers and monsoon humidity — accelerates this failure. Handmade sandals use welted or through-stitched construction: the sole is stitched to the upper through a welt (a thin strip of leather sewn around the perimeter). A stitched sole can be resoled. A cemented sole cannot.",
      },
      { type: "h2", text: "4. Edge Finishing: The Indicator of Care" },
      {
        type: "p",
        text: "The cut edge of a leather strap is the most vulnerable point — it is where moisture enters, where fraying begins, and where the leather first shows wear. In a factory setting, edges are dipped in paint and left. In a handmade workshop, edges are bevelled, then burnished (compressed and polished using friction), then painted or left raw depending on the leather type. A burnished edge is physically compacted — it resists splitting at the cellular level. A painted edge is cosmetically covered.",
      },
      { type: "h2", text: "5. The Maker's Incentive" },
      {
        type: "p",
        text: "A factory worker stitching 200 pairs a day has no personal stake in whether pair 137 lasts three years. A craftsman who stitches 10–15 pairs a day, whose name is associated with the workshop's reputation, has every incentive to catch the misaligned strap or the uneven tension before it leaves. This is not romantic — it is an economic and reputational mechanism. Small-batch handcraft production aligns the maker's incentive with the buyer's interest in a way that volume factory production does not.",
      },
      { type: "h2", text: "How Much Longer Do They Actually Last?" },
      {
        type: "p",
        text: "Mass-produced leather sandals in the ৳ 1,000–৳ 2,000 range typically last one to two seasons of regular daily wear in Bangladesh's climate before the sole delaminates or the strap stitching fails. A well-maintained handmade pair in the same price range typically lasts four to seven years before requiring resoling — which then extends life by another three to five years. If you wear sandals six months a year, a handmade pair at ৳ 1,500 costs roughly ৳ 50 per month of use over five years. A factory pair at ৳ 1,000 costs roughly ৳ 80 per month over 13 months.",
      },
      { type: "h2", text: "What to Ask Before You Buy" },
      {
        type: "ul",
        items: [
          "What leather grade is used? (Full-grain, corrected-grain, or bonded?)",
          "Is the sole stitched or cemented?",
          "Can the sole be replaced?",
          "What is the stitch type — machine lock-stitch or saddle-stitch?",
          "Where are the sandals made, and can I see the workshop?",
        ],
      },
      {
        type: "p",
        text: "These questions separate brands that know their product from those that do not. If a brand cannot answer them, that tells you something. Browse the RIZZ sandals collection or visit our manufacturing page to see exactly how we answer each one.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3040/api";

function mapApiPost(p: Record<string, unknown>): Post {
  return {
    slug: p.slug as string,
    title: p.title as string,
    description: (p.description as string) ?? "",
    publishedAt: (p.published_at as string) ?? (p.created_at as string),
    updatedAt: p.updated_at as string | undefined,
    category: (p.category as string) ?? "General",
    readingTime: (p.reading_time as number) ?? 5,
    coverImage: (p.cover_image as string) || undefined,
    coverAlt: (p.cover_alt as string) ?? (p.title as string),
    body: (p.body as Section[]) ?? [],
  };
}

export async function fetchPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`${API}/blog-posts?published=true`, { cache: "no-store" });
    if (!res.ok) return [];
    const data: Record<string, unknown>[] = await res.json();
    return data.map(mapApiPost);
  } catch {
    return [];
  }
}

export async function fetchPost(slug: string): Promise<Post | undefined> {
  try {
    const res = await fetch(`${API}/blog-posts/${slug}`, { cache: "no-store" });
    if (!res.ok) return undefined;
    const data: Record<string, unknown> = await res.json();
    if (!data.is_published) return undefined;
    return mapApiPost(data);
  } catch {
    return undefined;
  }
}
