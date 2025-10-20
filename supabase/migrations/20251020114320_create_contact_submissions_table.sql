/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `full_name` (text) - Name of the person submitting the form
      - `email` (text) - Email address of the person
      - `phone_number` (text) - Phone number with country code
      - `message` (text) - The message content
      - `created_at` (timestamptz) - When the submission was created
      - `read` (boolean) - Whether the submission has been read
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Only authenticated users can read submissions (admin access)
    - Anyone can insert (public form submission)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone_number text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
