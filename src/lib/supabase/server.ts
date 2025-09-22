// Cliente do Supabase para uso em Server Components/Actions
// - Utiliza cookies para manter sessão (quando implementarmos autenticação)
import { cookies } from 'next/headers';
// Fallback para builds sem @supabase/ssr instalado
let createServerClient: any;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  createServerClient = require('@supabase/ssr').createServerClient;
} catch {
  createServerClient = function noop() {
    throw new Error('Supabase SSR não disponível: instale @supabase/ssr ou use o client do browser.');
  };
}

export function createSupabaseServerClient() {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
}


