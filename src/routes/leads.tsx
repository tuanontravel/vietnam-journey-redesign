import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { listGuideLeads, type GuideLeadRow } from "@/lib/admin-leads.functions";

export const Route = createFileRoute("/leads")({
  head: () => ({
    meta: [
      { title: "Guide Sign-Ups | Absolute Asia Travel" },
      { name: "description", content: "Private view of Free Vietnam Guide sign-ups for the Absolute Asia Travel team." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Guide Sign-Ups" },
      { property: "og:description", content: "Private internal view of Vietnam guide sign-ups." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LeadsPage,
});

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function LeadsPage() {
  const load = useServerFn(listGuideLeads);
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<GuideLeadRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const result = await load({ data: { password } });
      if (result.ok) setLeads(result.leads);
      else setError(result.error);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen bg-background py-20 md:py-28">
      <div className="container-editorial">
        <p className="eyebrow">Internal</p>
        <h1 className="mt-4 text-4xl leading-tight md:text-5xl">Free Vietnam Guide sign-ups</h1>
        <p className="measure mt-5 leading-relaxed text-foreground/75">
          Everyone who requested the free Vietnam planning guide, newest first.
        </p>

        {leads === null ? (
          <form onSubmit={handleSubmit} className="card-float mt-12 max-w-md p-8">
            <label htmlFor="access" className="text-[11px] uppercase tracking-[0.18em] text-foreground/60">
              Access code
            </label>
            <input
              id="access"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-3 w-full rounded-md border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
              placeholder="Enter access code"
            />
            {error && <p className="mt-3 text-sm text-primary">{error}</p>}
            <Button type="submit" className="mt-6 w-full" disabled={busy}>
              {busy ? "Checking…" : "View sign-ups"}
            </Button>
          </form>
        ) : (
          <div className="mt-12">
            <p className="text-sm text-foreground/60">
              {leads.length} {leads.length === 1 ? "sign-up" : "sign-ups"}
            </p>

            {leads.length === 0 ? (
              <div className="card-float mt-6 p-8 text-foreground/70">No sign-ups yet.</div>
            ) : (
              <>
                <div className="card-float mt-6 hidden overflow-hidden md:block">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border/70 text-[11px] uppercase tracking-[0.16em] text-foreground/55">
                        <th className="px-6 py-4 font-medium">Name</th>
                        <th className="px-6 py-4 font-medium">Email</th>
                        <th className="px-6 py-4 font-medium">Signed up</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((lead) => (
                        <tr key={lead.id} className="border-b border-border/50 last:border-0">
                          <td className="px-6 py-4">{lead.first_name}</td>
                          <td className="px-6 py-4">
                            <a href={`mailto:${lead.email}`} className="hover:text-primary">{lead.email}</a>
                          </td>
                          <td className="px-6 py-4 text-foreground/70">{formatDate(lead.created_at)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <ul className="mt-6 space-y-4 md:hidden">
                  {leads.map((lead) => (
                    <li key={lead.id} className="card-float p-6">
                      <p className="font-medium">{lead.first_name}</p>
                      <a href={`mailto:${lead.email}`} className="mt-1 block break-all text-sm hover:text-primary">{lead.email}</a>
                      <p className="mt-2 text-xs text-foreground/60">{formatDate(lead.created_at)}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}

        <Link to="/" className="mt-12 inline-block text-sm text-foreground/60 hover:text-primary">
          ← Back to the journey page
        </Link>
      </div>
    </main>
  );
}
