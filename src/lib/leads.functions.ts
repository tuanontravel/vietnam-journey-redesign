import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const guideLeadSchema = z.object({
  firstName: z.string().trim().min(1, { message: "Please enter your first name" }).max(80, { message: "Name must be less than 80 characters" }),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  source: z.string().trim().max(80).optional(),
});

export type GuideLeadInput = z.infer<typeof guideLeadSchema>;

export const submitGuideLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => guideLeadSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("guide_leads").insert({
      first_name: data.firstName,
      email: data.email.toLowerCase(),
      source: data.source ?? "vietnam-private-journey",
    });
    if (error) {
      console.error("guide_leads insert failed", error.message);
      return { ok: false as const, error: "We could not save your request. Please try again." };
    }
    return { ok: true as const };
  });
