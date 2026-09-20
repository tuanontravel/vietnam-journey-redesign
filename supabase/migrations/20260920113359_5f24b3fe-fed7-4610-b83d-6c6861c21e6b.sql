CREATE TABLE public.guide_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  email TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'vietnam-private-journey',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX guide_leads_created_at_idx ON public.guide_leads (created_at DESC);

GRANT ALL ON public.guide_leads TO service_role;

ALTER TABLE public.guide_leads ENABLE ROW LEVEL SECURITY;