// Cliente oficial do Supabase para o frontend (browser e server components)
import { createClient } from '@supabase/supabase-js';

// Lê variáveis definidas no .env.local (NEXT_PUBLIC_* pode ser usado no browser)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-key";

// Instância reutilizável do cliente: use em qualquer lugar do app
// Usa valores placeholder se as envs não estiverem definidas (evita crash no build)
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);


