// src/app/page.tsx

export default function HomePage() {
  // Tentamos ler duas variáveis de ambiente diferentes
  const testVar = process.env.TEST_VAR;
  const nextPublicTestVar = process.env.NEXT_PUBLIC_TEST_VAR;

  console.log(`[TESTE VERCEL] TEST_VAR: ${testVar || "NAO ENCONTRADO"}`);
  console.log(`[TESTE VERCEL] NEXT_PUBLIC_TEST_VAR: ${nextPublicTestVar || "NAO ENCONTRADO"}`);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Página de Teste de Variáveis de Ambiente</h1>
      
      <h2>Teste da Variável Padrão (TEST_VAR):</h2>
      <p style={{ color: testVar ? 'green' : 'red' }}>
        {testVar || "ERRO: Variável 'TEST_VAR' não encontrada"}
      </p>

      <h2>Teste da Variável Pública (NEXT_PUBLIC_TEST_VAR):</h2>
      <p style={{ color: nextPublicTestVar ? 'green' : 'red' }}>
        {nextPublicTestVar || "ERRO: Variável 'NEXT_PUBLIC_TEST_VAR' não encontrada"}
      </p>
    </main>
  );
}