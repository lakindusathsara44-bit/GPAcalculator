// Supabase public browser configuration. Publishable key is safe to expose; never put service_role keys here.
const SUPABASE_URL = 'https://qccbsuxomdqdwfnqoycb.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Qo4sgs9C0Bb63tqobDQT2w_RrH7_6Y5';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
