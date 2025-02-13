-- ## Migration to:
-- * Remove public.qr_code table.
-- * Remove public.tasks.odk_token field.
-- * Add public.tasks.odk_token field.

-- Start a transaction
BEGIN;

-- Drop qr_code table
DROP TABLE IF EXISTS public.qr_code CASCADE;

-- Update field in tasks table
ALTER TABLE IF EXISTS public.tasks
    DROP COLUMN IF EXISTS qr_code_id,
    ADD COLUMN IF NOT EXISTS odk_token VARCHAR;

-- Commit the transaction
COMMIT;
