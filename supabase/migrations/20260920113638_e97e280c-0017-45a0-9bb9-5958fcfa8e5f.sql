CREATE TABLE public.journey_enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  guests TEXT,
  travel_dates TEXT,
  wishes TEXT,
  source TEXT NOT NULL DEFAULT 'vietnam-private-journey',
  emailed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
CREATE INDEX journey_enquiries_created_at_idx ON public.journey_enquiries (created_at DESC);
GRANT ALL ON public.journey_enquiries TO service_role;
ALTER TABLE public.journey_enquiries ENABLE ROW LEVEL SECURITY;