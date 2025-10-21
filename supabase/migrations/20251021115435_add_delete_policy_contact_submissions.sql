/*
  # Add DELETE policy for contact submissions

  1. Security Changes
    - Add policy allowing authenticated users to delete contact submissions
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'contact_submissions'
    AND policyname = 'Authenticated users can delete submissions'
  ) THEN
    CREATE POLICY "Authenticated users can delete submissions"
      ON contact_submissions
      FOR DELETE
      TO authenticated
      USING (true);
  END IF;
END $$;
