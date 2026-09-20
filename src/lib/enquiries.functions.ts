import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const enquirySchema = z.object({
  fullName: z.string().trim().min(1, { message: "Please enter your name" }).max(120),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  phone: z.string().trim().max(60).optional(),
  guests: z.string().trim().max(60).optional(),
  travelDates: z.string().trim().max(120).optional(),
  wishes: z.string().trim().max(3000).optional(),
  source: z.string().trim().max(80).optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("journey_enquiries").insert({
      full_name: data.fullName,
      email: data.email.toLowerCase(),
      phone: data.phone ?? null,
      guests: data.guests ?? null,
      travel_dates: data.travelDates ?? null,
      wishes: data.wishes ?? null,
      source: data.source ?? "vietnam-private-journey",
    });
    if (error) {
      console.error("journey_enquiries insert failed", error.message);
      return { ok: false as const, error: "We could not send your enquiry. Please try again, or email info@absoluteasiatravel.com." };
    }
    return { ok: true as const };
  });
