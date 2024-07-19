import { createClient } from '@supabase/supabase-js';

const supabaseUrl = `${process.env.NEXT_PUBLIC_SUPA_URL}`;
const supabaseKey = `${process.env.NEXT_PUBLIC_ANON_KEY}`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
