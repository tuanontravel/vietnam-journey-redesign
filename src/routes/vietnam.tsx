import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/JourneyPage";
import hero from "@/assets/journey/hero-halong.jpg";
import hanoi from "@/assets/journey/hanoi.jpg";
import hoiAn from "@/assets/journey/hoi-an.jpg";
import kayaking from "@/assets/journey/kayaking.jpg";
import mekong from "@/assets/journey/mekong.jpg";
import team from "@/assets/journey/team.jpg";

const nav = [
  ["destinations", "Destinations"],
  ["featured", "Featured Journey"],
  ["journeys", "Private Journeys"],
  ["season", "When to Travel"],
  ["plan", "Plan With Us"],
] as const;

const destinations = [
  ["Hanoi", "North", hanoi, "Tree-lined boulevards, quiet lakes and a thousand-year-old Old Quarter explored at a gentle, guided pace.", ["Temple of Literature", "Old Quarter cyclo ride", "Water puppet theatre"]],
  ["Halong & Lan Ha Bay", "North", hero, "Emerald water and limestone karsts seen from a small-ship cabin with a private balcony, away from the crowded main channels.", ["Overnight boutique cruise", "Bamboo boat through caves", "Sunrise tai chi on deck"]],
  ["Lan Ha Kayaking", "North", kayaking, "Calm, sheltered water for travelers who want a short, easy paddle — or a shaded seat on the tender instead.", ["Optional, never obligatory", "Guided and escorted", "Gentle pacing"]],
  ["Hoi An", "Central", hoiAn, "A UNESCO-listed riverside town of merchant houses, silk lanterns and herb gardens, best walked early and late in the day.", ["Lantern-making workshop", "Private sunset sampan", "Tra Que herb village"]],
  ["Hue", "Central", null, "The former imperial capital: the Citadel, royal tombs among pine hills and a quiet tea ceremony in a restored garden house.", ["Imperial Citadel", "Royal garden villa", "Hai Van Pass drive"]],
  ["Saigon", "South", null, "French-era landmarks, an unhurried morning of city history and a rooftop sunset above the skyline.", ["Central Post Office", "Reunification Palace gardens", "Heritage rooftop sunset"]],
  ["Mekong Delta", "South", mekong, "Hand-rowed sampans beneath water-coconut palms and family orchards — the softest, slowest day of most itineraries.", ["Private shaded sampan", "Orchard fruit tasting", "Easy half-day pacing"]],
] as const;

const journeys = [
  ["Authentic Vietnam", "10 days · 9 nights", "Hanoi · Halong · Hoi An · Hue · Saigon · Mekong", "Our signature private journey, paced for comfort with late starts, afternoon rest and two internal flights included.", "$1,890 per person", "/"],
  ["Northern Vietnam in Depth", "8 days", "Hanoi · Ninh Binh · Halong Bay", "A shorter northern circuit for travelers who prefer fewer hotel changes and more time in each place.", "Tailor-made · price on request", null],
  ["Vietnam for Multigenerational Families", "12 days", "Hanoi · Halong · Hoi An · Saigon", "Connecting rooms, flexible days, hands-on workshops for younger travelers and quiet afternoons for grandparents.", "Tailor-made · price on request", null],
  ["Central Heritage & Coast", "7 days", "Hue · Hoi An · Da Nang", "Imperial heritage and the central coastline at a slow pace, with two nights minimum in each base.", "Tailor-made · price on request", null],
  ["Vietnam & Cambodia Combined", "15 days", "Hanoi · Halong · Hoi An · Saigon · Siem Reap", "Extends the Vietnam route with the temples of Angkor, with private guides throughout.", "Tailor-made · price on request", null],
  ["Accessible & Gentle Pacing Vietnam", "10 days", "Flexible routing", "Built around mobility needs: curbside drop-offs, elevator-served hotels, short walking distances and generous rest.", "Tailor-made · price on request", null],
] as const;

const seasons = [
  ["Sep – Nov", "Clear skies in the north and centre, with comfortable temperatures for walking days."],
  ["Dec – Feb", "Cool and dry in Hanoi, warm and bright in Saigon and the Mekong Delta."],
  ["Mar – May", "Warm, settled weather across the whole country — the most balanced window for a full north-to-south route."],
  ["Jun – Aug", "Hot with afternoon showers; itineraries shift activity to mornings and evenings, with pool or rest time at midday."],
];

function Section({ id, eyebrow, title, intro, children, tone = "light" }: { id: string; eyebrow: string; title: string; intro?: string; children: ReactNode; tone?: "light" | "cream" | "ink" }) {
  return (
    <section id={id} className={`${tone === "cream" ? "bg-cream" : tone === "ink" ? "bg-ink text-ivory" : "bg-background"} scroll-mt-28 py-24 md:py-36`}>
      <div className="container-editorial">
        <div className="max-w-3xl">
          <p className={tone === "ink" ? "text-[11px] uppercase tracking-[0.22em] text-gold" : "eyebrow"}>{eyebrow}</p>
          <h2 className={`mt-4 text-4xl leading-tight md:text-5xl ${tone === "ink" ? "text-ivory" : ""}`}>{title}</h2>
          {intro && <p className={`mt-6 max-w-2xl leading-relaxed ${tone === "ink" ? "text-ivory/70" : "text-foreground/75"}`}>{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function VietnamCollection() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="overflow-x-clip">
      <div className="bg-ink text-ivory">
        <div className="container-editorial grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-2.5 text-[10px] uppercase tracking-[0.16em] md:grid-cols-3">
          <span className="truncate text-gold">5.0 TripAdvisor · 450+ reviews</span>
          <span className="hidden text-center md:block">VNAT Licensed · #01-1051/TCDL-GP LHQT</span>
          <a href="tel:+842439276076" className="shrink-0 md:text-right">Hanoi · +84 24 3927 6076</a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="container-editorial grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:grid-cols-[auto_1fr_auto]">
          <Link to="/" className="min-w-0">
            <span className="block truncate font-display text-xl text-ink">Absolute Asia</span>
            <span className="hidden text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:block">Personalized Experiences</span>
          </Link>
          <nav className="hidden justify-center gap-6 lg:flex">
            {nav.map(([id, label]) => <a key={id} href={`#${id}`} className="text-xs text-foreground/75 hover:text-ember">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:inline-flex"><Link to="/" hash="inquiry">Customize My Journey</Link></Button>
            <Button variant="ghost" size="icon" aria-label="Open menu" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="container-editorial grid border-t border-border py-4 lg:hidden">
            {nav.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="border-b border-border/60 py-3 text-sm">{label}</a>)}
          </nav>
        )}
      </header>

      <main>
        <section className="relative">
          <img src={hero} alt="Limestone karsts rising from the emerald water of Halong Bay" className="h-[62vh] min-h-[420px] w-full object-cover md:h-[70vh]" />
          <div className="absolute inset-0 bg-hero-veil" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-editorial pb-12 md:pb-16">
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold">The Vietnam Collection</p>
              <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] text-hero-foreground md:text-6xl">Vietnam, travelled privately and without rush</h1>
              <p className="mt-6 measure leading-relaxed text-hero-foreground/80">Every region we know first-hand, and the private journeys we build through them — guided by our own team in Hanoi, always tailor-made to your pace.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild><Link to="/">See the 10-Day Signature Journey <ArrowRight className="ml-2 size-4" /></Link></Button>
                <Button size="lg" variant="light" asChild><a href="#destinations">Explore Destinations</a></Button>
              </div>
            </div>
          </div>
        </section>

        <Section id="destinations" eyebrow="Where we travel" title="Regions of Vietnam" intro="Seven places that shape almost every itinerary we write, from the northern bays to the Mekong Delta. Each can be lengthened, shortened or left out entirely.">
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map(([name, region, image, text, highlights]) => (
              <article key={name} className="card-float flex flex-col overflow-hidden">
                {image ? (
                  <img src={image} alt={name} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                ) : (
                  <div className="grid aspect-[4/3] w-full place-items-center bg-cream">
                    <span className="font-display text-3xl text-ink/45">{name}</span>
                  </div>
                )}
                <p className="mt-5 px-6 text-[10px] uppercase tracking-[0.18em] text-gold">{region}</p>
                <h3 className="mt-2 px-6 text-2xl">{name}</h3>
                <p className="mt-3 px-6 text-sm leading-relaxed text-foreground/75">{text}</p>
                <ul className="mx-6 mb-6 mt-4 space-y-1.5 border-t border-border pt-4 text-xs text-muted-foreground">
                  {highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="featured" eyebrow="Start here" title="Authentic Vietnam: 10-Day Private Journey" intro="Our most requested itinerary, and the clearest picture of how we pace a private trip." tone="cream">
          <div className="mt-12 grid gap-10 border-t border-border pt-12 md:grid-cols-2 md:items-center">
            <img src={hoiAn} alt="Silk lanterns glowing in the ancient town of Hoi An" loading="lazy" className="aspect-[5/4] w-full object-cover" />
            <div>
              <p className="text-sm leading-relaxed text-foreground/80">Ten days from Hanoi and Lan Ha Bay to Hoi An, Hue, Saigon and the Mekong Delta — private car and guide throughout, late starts, afternoon rest, two internal flights included and no shopping stops.</p>
              <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-6 text-sm">
                <div><dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Duration</dt><dd className="mt-1">10 days · 9 nights</dd></div>
                <div><dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Group</dt><dd className="mt-1">Private, 2–12 guests</dd></div>
                <div><dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Rating</dt><dd className="mt-1">5.0 / 5.0</dd></div>
                <div><dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">From</dt><dd className="mt-1 font-display text-2xl text-ember">$1,890</dd></div>
              </dl>
              <Button size="lg" asChild className="mt-8"><Link to="/">View the Full Itinerary <ArrowRight className="ml-2 size-4" /></Link></Button>
            </div>
          </div>
        </Section>

        <Section id="journeys" eyebrow="Similar private journeys" title="Other ways to travel Vietnam" intro="Every route below is privately guided and written around your dates, pace and interests. Tell us which one is closest and we will adjust it from there.">
          <div className="mt-14 divide-y divide-border border-y border-border">
            {journeys.map(([title, duration, route, text, price, href]) => (
              <article key={title} className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline">
                <div className="md:col-span-4">
                  <h3 className="text-2xl">{title}</h3>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-gold">{duration}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-sm leading-relaxed text-foreground/75">{text}</p>
                  <p className="mt-3 text-xs text-muted-foreground">{route}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <p className="text-sm text-ink">{price}</p>
                  {href ? (
                    <Link to="/" className="mt-3 inline-flex items-center gap-2 text-sm text-ember hover:underline">View journey <ArrowRight className="size-4" /></Link>
                  ) : (
                    <Link to="/" hash="inquiry" className="mt-3 inline-flex items-center gap-2 text-sm text-ember hover:underline">Request this journey <ArrowRight className="size-4" /></Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="season" eyebrow="When to travel" title="Vietnam through the year" intro="Vietnam spans more than 1,600 kilometres, so the north and south rarely share the same weather. We route around it rather than avoid whole seasons." tone="cream">
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {seasons.map(([months, text]) => (
              <div key={months} className="border-t border-border pt-5">
                <p className="font-display text-2xl text-ink">{months}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="plan" eyebrow="Plan with us" title="Our team in Hanoi writes every itinerary" intro="No call centres and no third-party operators. Tell us who is travelling, when, and how much walking feels right — we will send a private itinerary to react to." tone="ink">
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-center">
            <img src={team} alt="The Absolute Asia Travel team in Hanoi" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div>
              <p className="leading-relaxed text-ivory/75">Licensed by the Vietnam National Administration of Tourism (#01-1051/TCDL-GP LHQT), with 24/7 WhatsApp support for every traveller on the road.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild><Link to="/" hash="inquiry">Customize My Journey</Link></Button>
                <Button size="lg" variant="light" asChild><a href="tel:+842439276076">+84 24 3927 6076</a></Button>
              </div>
              <div className="mt-8 grid gap-2 text-sm text-ivory/70">
                <a href="mailto:info@absoluteasiatravel.com">info@absoluteasiatravel.com</a>
                <p>107 Ai Mo St., Bo De, Long Bien, Hanoi</p>
              </div>
            </div>
          </div>
        </Section>

        <section className="bg-background">
          <div className="container-editorial grid gap-6 border-t border-border py-14 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <h2 className="text-3xl">Prefer to start with the signature journey?</h2>
              <p className="mt-3 text-sm text-foreground/75">Read the full ten-day itinerary, traveller videos and reviews.</p>
            </div>
            <Button size="lg" asChild><Link to="/">Authentic Vietnam · 10 Days <ArrowRight className="ml-2 size-4" /></Link></Button>
          </div>
        </section>
      </main>

      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <Button asChild className="w-full"><Link to="/" hash="inquiry">Customize My Journey</Link></Button>
      </div>
      <div className="h-18 md:hidden" />
    </div>
  );
}

export const Route = createFileRoute("/vietnam")({
  head: () => ({
    meta: [
      { title: "Vietnam Collection: Private Journeys & Destinations | Absolute Asia Travel" },
      { name: "description", content: "Explore Vietnam by region — Hanoi, Halong and Lan Ha Bay, Hoi An, Hue, Saigon and the Mekong Delta — plus private tailor-made journeys built by our Hanoi team." },
      { property: "og:title", content: "The Vietnam Collection — Private Journeys by Absolute Asia Travel" },
      { property: "og:description", content: "Regions of Vietnam and the privately guided journeys we build through them, always tailor-made to your pace." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/vietnam" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/vietnam" }],
  }),
  component: VietnamCollection,
});
