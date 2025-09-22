// Cliente oficial do Supabase para o frontend (browser e server components)
import { createClient } from '@supabase/supabase-js';

// Lê variáveis definidas no .env.local (NEXT_PUBLIC_* pode ser usado no browser)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

if (!supabaseUrl || !supabaseAnonKey) {
  // Evita crash no build: usa valores vazios e mostra aviso em console
  // Em runtime, as chamadas vão falhar graciosamente se tentar usar o client sem env.
  console.warn("[Supabase] Variáveis NEXT_PUBLIC_SUPABASE_URL/ANON_KEY não definidas no ambiente.");
}

// Instância reutilizável do cliente: use em qualquer lugar do app
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);


