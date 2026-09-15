// "use client";

// import Link from "next/link";
// import {
//   ArrowRight,
//   ArrowUp,
//   Facebook,
//   Instagram,
//   Linkedin,
//   Mail,
//   Twitter,
// } from "lucide-react";
// import { FormEvent, useState } from "react";
// import { countryRegions } from "@/lib/countries";

// const footerNotFoundHref = "/404";

// const exploreLinks = [
//   { label: "Home", href: "/" },
//   { label: "All Names", href: footerNotFoundHref },
//   { label: "Girls Names", href: footerNotFoundHref },
//   { label: "Boys Names", href: footerNotFoundHref },
//   { label: "Unisex Names", href: footerNotFoundHref },
//   { label: "Countries", href: "/#regions" },
//   { label: "Europe", href: "/countries/europe" },
//   { label: "Middle East", href: "/countries/middle-east" },
// ];

// const guideLinks = [
//   { label: "Name Meanings", href: footerNotFoundHref },
//   { label: "Name Origins", href: footerNotFoundHref },
//   { label: "Lucky Numbers", href: footerNotFoundHref },
//   { label: "Rare Names", href: footerNotFoundHref },
//   { label: "Islamic Names", href: footerNotFoundHref },
//   { label: "Popular Names", href: footerNotFoundHref },
//   { label: "Name Finder", href: footerNotFoundHref },
// ];

// const informationLinks = [
//   { label: "About Us", href: "/" },
//   { label: "Contact", href: "mailto:hello@nameshub.com" },
//   { label: "Privacy Policy", href: footerNotFoundHref },
//   { label: "Terms & Conditions", href: footerNotFoundHref },
//   { label: "Disclaimer", href: footerNotFoundHref },
// ];

// const regionLinks = Object.entries(countryRegions).map(([slug, region]) => ({
//   label: region.name,
//   href: `/countries/${slug}`,
// }));

// function FooterLinkList({
//   links,
// }: {
//   links: { label: string; href: string }[];
// }) {
//   return (
//     <ul className="mt-5 space-y-3">
//       {links.map((link) => (
//         <li key={link.label}>
//           <Link
//             href={link.href}
//             className="text-sm text-[#6B806F] transition-colors hover:text-[#304A3A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8FAF8]"
//           >
//             {link.label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default function Footer() {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   function handleSubscribe(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     if (!email.trim()) return;
//     setSubmitted(true);
//     setEmail("");
//   }

//   return (
//     <footer className="border-t border-[#E3E9E4] bg-[#F8FAF8] text-[#304A3A]">
//       <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 lg:pb-10 lg:pt-20">
//         <div className="grid gap-12 border-b border-[#E3E9E4] pb-12 lg:grid-cols-[1.4fr_2.6fr] lg:gap-16 lg:pb-16">
//           <section className="max-w-sm" aria-labelledby="footer-brand-heading">
//             <Link
//               href="/"
//               id="footer-brand-heading"
//               className="inline-block text-2xl font-black tracking-tight text-[#304A3A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8FAF8]"
//             >
//               Names<span className="text-[#6B806F]">Hub</span>
//               <span className="text-[#93712F]">.</span>
//             </Link>
//             <p className="mt-5 text-[15px] leading-7 text-[#6B806F]">
//               Discover beautiful names, meaningful origins, and naming traditions from around the world.
//             </p>
//             <div className="mt-7 flex items-center gap-2" aria-label="Social links">
//               {[
//                 { label: "Instagram", Icon: Instagram },
//                 { label: "Facebook", Icon: Facebook },
//                 { label: "Twitter", Icon: Twitter },
//                 { label: "LinkedIn", Icon: Linkedin },
//               ].map(({ label, Icon }) => (
//                 <a
//                   key={label}
//                   href={footerNotFoundHref}
//                   aria-label={label}
//                   className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E3E9E4] bg-white text-[#6B806F] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#6B806F] hover:text-[#304A3A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F]"
//                 >
//                   <Icon size={16} strokeWidth={1.8} />
//                 </a>
//               ))}
//             </div>
//           </section>

//           <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:gap-x-10">
//             <nav aria-labelledby="footer-explore-heading">
//               <h2 id="footer-explore-heading" className="text-xs font-bold uppercase tracking-[0.16em] text-[#304A3A]">Explore</h2>
//               <FooterLinkList links={exploreLinks} />
//             </nav>
//             <nav aria-labelledby="footer-guides-heading">
//               <h2 id="footer-guides-heading" className="text-xs font-bold uppercase tracking-[0.16em] text-[#304A3A]">Name Guides</h2>
//               <FooterLinkList links={guideLinks} />
//             </nav>
//             <nav aria-labelledby="footer-countries-heading">
//               <h2 id="footer-countries-heading" className="text-xs font-bold uppercase tracking-[0.16em] text-[#304A3A]">Countries</h2>
//               <FooterLinkList links={regionLinks} />
//             </nav>
//             <nav aria-labelledby="footer-information-heading">
//               <h2 id="footer-information-heading" className="text-xs font-bold uppercase tracking-[0.16em] text-[#304A3A]">Information</h2>
//               <FooterLinkList links={informationLinks} />
//             </nav>
//           </div>
//         </div>

//         <section className="border-b border-[#E3E9E4] py-10" aria-labelledby="footer-newsletter-heading">
//           <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
//             <div>
//               <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#93712F]">
//                 <Mail size={15} /> Stay connected
//               </p>
//               <h2 id="footer-newsletter-heading" className="mt-2 text-xl font-semibold tracking-tight text-[#304A3A]">
//                 Stay inspired with beautiful names &amp; meanings.
//               </h2>
//             </div>
//             <form onSubmit={handleSubscribe} className="flex w-full max-w-xl flex-col gap-3 sm:flex-row" aria-label="Newsletter subscription">
//               <label htmlFor="footer-email" className="sr-only">Email address</label>
//               <input
//                 id="footer-email"
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(event) => {
//                   setEmail(event.target.value);
//                   setSubmitted(false);
//                 }}
//                 placeholder="Your email address"
//                 className="min-w-0 flex-1 rounded-xl border border-[#D5E0D7] bg-white px-4 py-3 text-sm text-[#304A3A] outline-none transition placeholder:text-[#9AA99D] focus:border-[#6B806F] focus:ring-2 focus:ring-[#E7F0E9]"
//               />
//               <button
//                 type="submit"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#304A3A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6B806F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F] focus-visible:ring-offset-2"
//               >
//                 {submitted ? "You're on the list" : "Subscribe"}
//                 {!submitted && <ArrowRight size={16} />}
//               </button>
//             </form>
//           </div>
//         </section>

//         <div className="flex flex-col gap-4 pt-7 text-sm text-[#6B806F] sm:flex-row sm:items-center sm:justify-between">
//           <p>© 2026 Names Website. All rights reserved.</p>
//           <nav className="flex flex-wrap items-center gap-x-4 gap-y-2" aria-label="Legal navigation">
//             <Link href={footerNotFoundHref} className="transition-colors hover:text-[#304A3A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F]">Privacy Policy</Link>
//             <span aria-hidden="true" className="text-[#D5E0D7]">|</span>
//             <Link href={footerNotFoundHref} className="transition-colors hover:text-[#304A3A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F]">Terms</Link>
//             <span aria-hidden="true" className="text-[#D5E0D7]">|</span>
//             <Link href="mailto:hello@nameshub.com" className="transition-colors hover:text-[#304A3A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F]">Contact</Link>
//           </nav>
//           <a
//             href="#top"
//             aria-label="Back to top"
//             className="flex h-9 w-9 items-center justify-center self-start rounded-full border border-[#D5E0D7] bg-white text-[#6B806F] transition-all hover:-translate-y-0.5 hover:border-[#6B806F] hover:text-[#304A3A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F] sm:self-auto"
//           >
//             <ArrowUp size={16} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }





"use client";

import Link from "next/link";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Sparkles,
  Twitter,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { countryRegions } from "@/lib/countries";

const footerNotFoundHref = "/404";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "All Names", href: footerNotFoundHref },
  { label: "Girls Names", href: footerNotFoundHref },
  { label: "Boys Names", href: footerNotFoundHref },
  { label: "Unisex Names", href: footerNotFoundHref },
];

const guideLinks = [
  { label: "Name Meanings", href: footerNotFoundHref },
  { label: "Name Origins", href: footerNotFoundHref },
  { label: "Lucky Numbers", href: footerNotFoundHref },
  { label: "Islamic Names", href: footerNotFoundHref },
  { label: "Name Finder", href: footerNotFoundHref },
];

const informationLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "mailto:hello@nameshub.com" },
  { label: "Privacy Policy", href: footerNotFoundHref },
  { label: "Terms", href: footerNotFoundHref },
  { label: "Disclaimer", href: footerNotFoundHref },
];

const regionLinks = Object.entries(countryRegions).map(([slug, region]) => ({
  label: region.name,
  href: `/countries/${slug}`,
}));

const socialLinks = [
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
  { label: "Twitter", Icon: Twitter },
  { label: "LinkedIn", Icon: Linkedin },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav>
      <h2 className="text-[13px] font-semibold text-[#2F4A3D]">{title}</h2>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[13px] text-[#8A9A8D] transition-colors hover:text-[#2F4A3D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A56] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF9F5] rounded-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <footer className="bg-[#FBF9F5] text-[#2F4A3D]">
      <div className="mx-auto max-w-6xl px-5 pb-8 pt-12 sm:px-8">
        {/* Top: brand + tiny newsletter, side by side, compact */}
        <div className="flex flex-col gap-8 rounded-3xl border border-[#EAE3D6] bg-white/60 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="max-w-[26ch]">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-tight text-[#2F4A3D]">
                Names<span className="text-[#8A9A8D]">Hub</span>
              </span>
              <Sparkles size={14} className="text-[#C79A56]" strokeWidth={2} />
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed text-[#8A9A8D]">
              Sweet, meaningful names from every corner of the world.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-xs flex-col gap-1.5 sm:w-auto"
            aria-label="Newsletter subscription"
          >
            <div className="flex items-center gap-1.5 rounded-full border border-[#EAE3D6] bg-white p-1 pl-4 shadow-[0_1px_2px_rgba(47,74,61,0.06)] focus-within:border-[#C79A56]">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubmitted(false);
                }}
                placeholder="you@example.com"
                className="w-32 min-w-0 bg-transparent text-[13px] text-[#2F4A3D] outline-none placeholder:text-[#B7C0B8] sm:w-40"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#2F4A3D] px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-[#C79A56] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A56] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Join
              </button>
            </div>
            <p
              className={`pl-4 text-[11px] text-[#7A9B7E] transition-opacity duration-300 ${
                submitted ? "opacity-100" : "opacity-0"
              }`}
              role="status"
            >
              ✓ You're on the list
            </p>
          </form>
        </div>

        {/* Link columns, small and tight */}
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-8">
          <FooterColumn title="Explore" links={exploreLinks} />
          <FooterColumn title="Guides" links={guideLinks} />
          <FooterColumn title="Countries" links={regionLinks.slice(0, 5)} />
          <FooterColumn title="Info" links={informationLinks} />
        </div>

        {/* Bottom bar, minimal */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-[#EAE3D6] pt-5 sm:flex-row sm:justify-between">
          <p className="text-[12px] text-[#B7C0B8]">
            © 2026 NamesHub — made with care
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, Icon }) => (
              <a
                key={label}
                href={footerNotFoundHref}
                aria-label={label}
                className="flex h-7 w-7 items-center justify-center rounded-full text-[#8A9A8D] transition-colors hover:bg-[#2F4A3D]/5 hover:text-[#2F4A3D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A56]"
              >
                <Icon size={14} strokeWidth={1.8} />
              </a>
            ))}
            <span className="mx-1 h-3.5 w-px bg-[#EAE3D6]" aria-hidden="true" />
            <a
              href="#top"
              aria-label="Back to top"
              className="flex h-7 w-7 items-center justify-center rounded-full text-[#8A9A8D] transition-colors hover:bg-[#2F4A3D]/5 hover:text-[#2F4A3D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A56]"
            >
              <ArrowUp size={14} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}