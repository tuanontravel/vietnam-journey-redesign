import { createFileRoute } from "@tanstack/react-router";
import { JourneyPage, faqs } from "@/components/JourneyPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Authentic Vietnam 10-Day Private Journey | Absolute Asia Travel" },
      { name: "description", content: "A privately guided 10-day Vietnam journey, thoughtfully paced for comfort, connection, and zero rush. Tailor-made for couples, families, and travelers 55+." },
      { property: "og:title", content: "Authentic Vietnam: 10-Day Private Journey" },
      { property: "og:description", content: "A thoughtful private journey from Hanoi and Halong Bay to Hoi An, Hue, Saigon, and the Mekong." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "Absolute Asia Travel", url: "https://absoluteasiatravel.com", telephone: "+84 24 3927 6076", email: "info@absoluteasiatravel.com", address: { "@type": "PostalAddress", streetAddress: "107 Ai Mo Street, Bo De Ward, Long Bien District", addressLocality: "Hanoi", addressCountry: "VN" } }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }) },
    ],
  }),
  component: JourneyPage,
});