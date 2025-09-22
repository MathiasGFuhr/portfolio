// Cliente do Supabase para uso em Server Components/Actions
// - Utiliza cookies para manter sessão (quando implementarmos autenticação)
import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';

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


