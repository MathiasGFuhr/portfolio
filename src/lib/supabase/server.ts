// Stub seguro para builds que não usam SSR. Caso você precise de SSR,
// instale @supabase/ssr e implemente aqui usando next/headers.
export function createSupabaseServerClient(): never {
  throw new Error(
    'SSR do Supabase não está configurado neste deploy. Use o client do browser (src/lib/supabase/client.ts) '\
    + 'ou instale @supabase/ssr e ajuste este arquivo.'
  );
}


