import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey =
	process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY;

export const supabaseAdminClient = createClient(
	supabaseUrl,
	supabaseServiceRoleKey
);
