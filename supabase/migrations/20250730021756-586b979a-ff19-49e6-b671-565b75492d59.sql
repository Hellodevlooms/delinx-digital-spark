-- Create contact submissions table with RLS
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for insert (anyone can submit contact forms)
CREATE POLICY "Anyone can submit contact forms" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for select (only authenticated users can view submissions)
CREATE POLICY "Only authenticated users can view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Add indexes for performance
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at);
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);