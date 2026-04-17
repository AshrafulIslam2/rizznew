export const locales = ["en", "bn"] as const;
export type Locale = (typeof locales)[number];

type Copy = {
  siteName: string;
  nav: {
    home: string;
    oemQuote: string;
    wholesaleApply: string;
  };
  home: {
    title: string;
    description: string;
    ctaQuote: string;
    ctaWholesale: string;
  };
  forms: {
    common: {
      name: string;
      email: string;
      phone: string;
      company: string;
      message: string;
      submit: string;
      success: string;
      error: string;
      whatsappFallback: string;
    };
    oem: {
      title: string;
      description: string;
    };
    wholesale: {
      title: string;
      description: string;
    };
  };
  seo: {
    home: { title: string; description: string };
    oem: { title: string; description: string };
    wholesale: { title: string; description: string };
  };
};

const dictionary: Record<Locale, Copy> = {
  en: {
    siteName: "Rizz",
    nav: {
      home: "Home",
      oemQuote: "OEM Quote",
      wholesaleApply: "Wholesale Apply"
    },
    home: {
      title: "OEM and Wholesale Supply Partner",
      description: "Fast response for product sourcing, OEM customization, and wholesale onboarding.",
      ctaQuote: "Request OEM Quote",
      ctaWholesale: "Apply for Wholesale"
    },
    forms: {
      common: {
        name: "Full name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        message: "Requirements",
        submit: "Submit",
        success: "Thanks! We received your request.",
        error: "Submission failed. Please use WhatsApp fallback.",
        whatsappFallback: "Send via WhatsApp"
      },
      oem: {
        title: "OEM Quote Request",
        description: "Share product specs, quantity, and timelines."
      },
      wholesale: {
        title: "Wholesale Application",
        description: "Tell us your store details and expected monthly volume."
      }
    },
    seo: {
      home: {
        title: "Rizz | OEM & Wholesale",
        description: "OEM customization and wholesale supply support."
      },
      oem: {
        title: "OEM Quote | Rizz",
        description: "Request OEM pricing and production timelines."
      },
      wholesale: {
        title: "Wholesale Apply | Rizz",
        description: "Apply for wholesale pricing and partnership."
      }
    }
  },
  bn: {
    siteName: "রিজ",
    nav: {
      home: "হোম",
      oemQuote: "ওইএম কোট",
      wholesaleApply: "হোলসেল আবেদন"
    },
    home: {
      title: "OEM ও হোলসেল সাপ্লাই পার্টনার",
      description: "পণ্য সোর্সিং, OEM কাস্টমাইজেশন এবং হোলসেল অনবোর্ডিংয়ে দ্রুত সাপোর্ট।",
      ctaQuote: "OEM কোট নিন",
      ctaWholesale: "হোলসেলে আবেদন করুন"
    },
    forms: {
      common: {
        name: "পূর্ণ নাম",
        email: "ইমেইল",
        phone: "ফোন",
        company: "প্রতিষ্ঠানের নাম",
        message: "চাহিদার বিবরণ",
        submit: "সাবমিট করুন",
        success: "ধন্যবাদ! আপনার অনুরোধ পাওয়া গেছে।",
        error: "সাবমিশন ব্যর্থ হয়েছে। অনুগ্রহ করে WhatsApp ব্যবহার করুন।",
        whatsappFallback: "WhatsApp এ পাঠান"
      },
      oem: {
        title: "OEM কোট অনুরোধ",
        description: "পণ্যের স্পেসিফিকেশন, পরিমাণ এবং সময়সীমা শেয়ার করুন।"
      },
      wholesale: {
        title: "হোলসেল আবেদন",
        description: "আপনার স্টোর তথ্য এবং মাসিক ভলিউম জানান।"
      }
    },
    seo: {
      home: {
        title: "রিজ | OEM ও হোলসেল",
        description: "OEM কাস্টমাইজেশন এবং হোলসেল সাপোর্ট।"
      },
      oem: {
        title: "OEM কোট | রিজ",
        description: "OEM মূল্য এবং প্রোডাকশন টাইমলাইন পেতে অনুরোধ করুন।"
      },
      wholesale: {
        title: "হোলসেল আবেদন | রিজ",
        description: "হোলসেল মূল্য ও পার্টনারশিপের জন্য আবেদন করুন।"
      }
    }
  }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): Copy {
  return dictionary[locale];
}
