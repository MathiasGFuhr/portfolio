// Cliente oficial do Supabase para o frontend (browser e server components)
import { createClient } from '@supabase/supabase-js';

// Lê variáveis definidas no .env.local (NEXT_PUBLIC_* pode ser usado no browser)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Instância reutilizável do cliente: use em qualquer lugar do app
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);


