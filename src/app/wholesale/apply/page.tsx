import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wholesale Apply | Rizz Leather",
  description: "Apply for wholesale pricing and account onboarding with our B2B review workflow.",
  openGraph: {
    title: "Wholesale Apply | Rizz Leather",
    description: "Apply for wholesale pricing and account onboarding with our B2B review workflow."
  }
};

export default function WholesaleApplyPage() {
  return (
    <main>
      <section className="border-y border-[var(--hairline-accent)] py-12 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-5xl font-medium text-[#f4eee1] sm:text-6xl">Wholesale Application</h1>
            <p className="mt-3 max-w-3xl text-base text-[#adb2bd] sm:text-lg">
              Complete the application below to access our B2B portal. Reviews are completed in 2-3 business days.
            </p>
          </div>
          <button type="button" className="h-12 border border-[var(--hairline-accent)] px-6 text-sm font-medium uppercase tracking-[0.1em] text-[#d7c89e]">
            Save Draft
          </button>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.55fr_0.75fr] lg:items-start">
          <div className="space-y-6">
            <article className="rounded-md border border-[#1a2130] bg-[#070b15] p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between border-b border-[#1a2130] pb-4">
                <h2 className="text-3xl font-medium text-[#ece2cb]">Company Details</h2>
                <p className="text-xs uppercase tracking-[0.16em] text-[#9aa2b0]">Section 1 of 5</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="h-12 border border-[#1d2535] bg-[#060a12] px-4 text-base text-white outline-none placeholder:text-[#667086] sm:col-span-2" placeholder="Legal Company Name*" />
                <input className="h-12 border border-[#1d2535] bg-[#060a12] px-4 text-base text-white outline-none placeholder:text-[#667086]" placeholder="Trading Name" />
                <input className="h-12 border border-[#1d2535] bg-[#060a12] px-4 text-base text-white outline-none placeholder:text-[#667086]" placeholder="Tax ID / VAT Number*" />
                <input className="h-12 border border-[#1d2535] bg-[#060a12] px-4 text-base text-white outline-none placeholder:text-[#667086]" placeholder="Country*" />
                <input className="h-12 border border-[#1d2535] bg-[#060a12] px-4 text-base text-white outline-none placeholder:text-[#667086]" placeholder="City*" />
                <input className="h-12 border border-[#1d2535] bg-[#060a12] px-4 text-base text-white outline-none placeholder:text-[#667086] sm:col-span-2" placeholder="Company Website" />
              </div>
            </article>

            <article className="rounded-md border border-[#1a2130] bg-[#070b15] p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between border-b border-[#1a2130] pb-4">
                <h2 className="text-3xl font-medium text-[#ece2cb]">Primary Contact</h2>
                <p className="text-xs uppercase tracking-[0.16em] text-[#9aa2b0]">Section 2 of 5</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="h-12 border border-[#1d2535] bg-[#060a12] px-4 text-base text-white outline-none placeholder:text-[#667086]" placeholder="First Name*" />
                <input className="h-12 border border-[#1d2535] bg-[#060a12] px-4 text-base text-white outline-none placeholder:text-[#667086]" placeholder="Last Name*" />
                <input className="h-12 border border-[#1d2535] bg-[#060a12] px-4 text-base text-white outline-none placeholder:text-[#667086]" placeholder="Email Address*" />
                <input className="h-12 border border-[#1d2535] bg-[#060a12] px-4 text-base text-white outline-none placeholder:text-[#667086]" placeholder="Phone Number (WhatsApp preferred)*" />
              </div>
            </article>

            <article className="rounded-md border border-[#1a2130] bg-[#070b15] p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between border-b border-[#1a2130] pb-4">
                <h2 className="text-3xl font-medium text-[#ece2cb]">Wholesale Requirements</h2>
                <p className="text-xs uppercase tracking-[0.16em] text-[#9aa2b0]">Section 3 of 5</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="h-12 border border-[#1d2535] bg-[#060a12] px-4 text-base text-white outline-none placeholder:text-[#667086]" placeholder="Estimated Monthly Volume*" />
                <input className="h-12 border border-[#1d2535] bg-[#060a12] px-4 text-base text-white outline-none placeholder:text-[#667086]" placeholder="Target Price Range (Per Unit)*" />
                <input className="h-12 border border-[#1d2535] bg-[#060a12] px-4 text-base text-white outline-none placeholder:text-[#667086]" placeholder="Expected MOQ*" />
                <input className="h-12 border border-[#1d2535] bg-[#060a12] px-4 text-base text-white outline-none placeholder:text-[#667086]" placeholder="Preferred Shipping Terms*" />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {["Wallets & Small Goods", "Belts & Harnesses", "Briefcases & Bags", "Travel Accessories", "Corporate Gifting", "Custom / Bespoke"].map((item) => (
                  <label key={item} className="flex min-h-[44px] items-center gap-2 border border-[#1d2535] bg-[#0a101b] px-3 text-sm text-[#c8ced9]">
                    <input type="checkbox" className="h-4 w-4 accent-[#d4c59e]" /> {item}
                  </label>
                ))}
              </div>
              <textarea
                className="mt-4 min-h-[120px] w-full border border-[#1d2535] bg-[#060a12] px-4 py-3 text-base text-white outline-none placeholder:text-[#667086]"
                placeholder="Additional notes or requirements..."
              />
            </article>

            <article className="rounded-md border border-[#1a2130] bg-[#070b15] p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between border-b border-[#1a2130] pb-4">
                <h2 className="text-3xl font-medium text-[#ece2cb]">Documentation & Consent</h2>
                <p className="text-xs uppercase tracking-[0.16em] text-[#9aa2b0]">Section 4 of 5</p>
              </div>
              <div className="rounded-md border border-dashed border-[#293346] bg-[#060a12] px-4 py-10 text-center text-[#aab2c0]">
                Click to upload or drag and drop company documents (PDF/JPG/PNG)
              </div>
              <div className="mt-4 space-y-2 text-sm text-[#c2c8d3]">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 h-4 w-4 accent-[#d4c59e]" />
                  I confirm that the provided information is accurate and I am authorized to represent this company.
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 h-4 w-4 accent-[#d4c59e]" />I agree to Wholesale Terms & Conditions and Privacy Policy.
                </label>
              </div>
            </article>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24">
            <article className="rounded-md border border-[#1a2130] bg-[#070b15]">
              <div className="border-b border-[#1a2130] p-5">
                <h3 className="text-3xl font-medium text-[#ece2cb]">Application Summary</h3>
                <p className="mt-1 text-sm text-[#8f98aa]">Draft saved 2 mins ago</p>
              </div>
              <div className="space-y-5 p-5 text-base text-[#c5ccd8]">
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#95a0b4]">Selected Categories</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="border border-[#1d2535] bg-[#0a101b] px-2 py-1 text-sm">Wallets</span>
                    <span className="border border-[#1d2535] bg-[#0a101b] px-2 py-1 text-sm">Belts</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#95a0b4]">Est. Volume</p>
                  <p className="mt-1 text-2xl font-medium text-[#ece2cb]">$20,000 - $50,000 / month</p>
                </div>
              </div>
            </article>

            <article className="rounded-md border border-[#1a2130] bg-[#070b15] p-5">
              <h3 className="text-3xl font-medium text-[#ece2cb]">Next Steps</h3>
              <ol className="mt-4 space-y-4 text-base text-[#b2bac8]">
                <li>
                  <p className="text-[#e8dcc0]">1. Submit Application</p>
                  <p>Complete this form with accurate company details.</p>
                </li>
                <li>
                  <p className="text-[#d4c59e]">2. Team Review</p>
                  <p>Our wholesale team reviews within 2-3 business days.</p>
                </li>
                <li>
                  <p className="text-[#d4c59e]">3. Portal Access</p>
                  <p>Receive credentials to view pricing and order options.</p>
                </li>
              </ol>
            </article>

            <article className="rounded-md border border-[#1a2130] bg-[#070b15] p-5 text-center">
              <p className="text-2xl font-medium text-[#ece2cb]">Need Assistance?</p>
              <p className="mt-2 text-base text-[#aeb4bf]">Chat directly with our wholesale support team.</p>
              <Link href="https://wa.me/8801712345678" className="mt-4 inline-flex h-12 w-full items-center justify-center border border-[#1fce69] bg-[#1fce69] text-base font-semibold text-[#05100a] no-underline">
                Chat on WhatsApp
              </Link>
            </article>
          </aside>
        </div>
      </section>

      <section className="border-t border-[var(--hairline-accent)] py-12 sm:py-14">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <div className="rounded-md border border-[#1a2130] bg-[#070b15] px-6 py-8 sm:px-10">
            <p className="text-base text-[#c8ced8]">By clicking submit, you confirm all information is accurate and agree to our Terms & Conditions.</p>
            <button type="button" className="mt-4 h-12 min-w-[260px] border border-[#d4ccb9] bg-[#ece8de] px-8 text-base font-semibold text-[#11131a]">
              Submit Application
            </button>
            <p className="mt-4 text-sm text-[#8f98aa]">We respond to wholesale inquiries within 24-48 hours.</p>
            <p className="mt-6 text-base text-[#aeb4bf]">
              Need to make changes later?{" "}
              <Link href="https://wa.me/8801712345678" className="text-[#35d87a] no-underline hover:text-[#67e89a]">
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
