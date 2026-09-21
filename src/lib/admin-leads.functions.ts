import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const passwordSchema = z.object({
  password: z.string().trim().min(1, { message: "Please enter the access code" }).max(200),
});

export type GuideLeadRow = {
  id: string;
  first_name: string;
  email: string;
  source: string;
  created_at: string;
};

export const listGuideLeads = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => passwordSchema.parse(data))
  .handler(async ({ data }) => {
    const expected = process.env["ADMIN_LEADS_PASSWORD"];
    if (!expected) {
      return { ok: false as const, error: "Access is not configured yet." };
    }
    if (data.password !== expected) {
      return { ok: false as const, error: "Incorrect access code." };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows, error } = await supabaseAdmin
      .from("guide_leads")
      .select("id, first_name, email, source, created_at")
      .order("created_at", { ascending: false })
      .limit(500);

    if (error) {
      console.error("guide_leads select failed", error.message);
      return { ok: false as const, error: "Could not load the list. Please try again." };
    }

    return { ok: true as const, leads: (rows ?? []) as GuideLeadRow[] };
  });
