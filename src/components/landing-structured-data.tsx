import { CONTACT } from "@/lib/site";
import { getBaseUrl } from "@/lib/seo";

type FaqEntry = {
  q: string;
  a: string;
};

type BreadcrumbEntry = {
  name: string;
  item: string;
};

type LandingStructuredDataProps = {
  path: string;
  title: string;
  faqs: FaqEntry[];
  breadcrumbs: BreadcrumbEntry[];
};

export function LandingStructuredData({ path, title, faqs, breadcrumbs }: LandingStructuredDataProps) {
  const baseUrl = getBaseUrl();
  const pageUrl = `${baseUrl}${path}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rizz Leather",
    brand: "Rizz",
    url: baseUrl,
    telephone: CONTACT.whatsappDisplay,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sayed Sha Road, Bakolia",
      addressLocality: "Chittagong",
      postalCode: "4203",
      addressCountry: "BD"
    },
    areaServed: ["Bangladesh", "Dhaka", "Chittagong"],
    mainEntityOfPage: pageUrl,
    description: `${title}. OEM, private label, and wholesale manufacturing support.`
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${baseUrl}${crumb.item}`
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
