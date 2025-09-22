<div align="center">

# 🚀 Portfólio – Mathias Fuhr

Interfaces rápidas, acessíveis e memoráveis. Construído com **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** e **Supabase**.

![logo](./public/logo.svg)

</div>

---

## ✨ Recursos

- Páginas públicas modernas (Home, Projetos, Sobre, Contato)
- Cards com micro animações (Framer Motion) e chips estilizados
- Tema dark/light com variáveis CSS e persistência
- Integração com Supabase (projetos, techs dinâmicas, mensagens)
- Página de Projetos com busca, filtro por tecnologia e paginação
- Página de Contato com formulário + canais diretos (LinkedIn/WhatsApp/E‑mail)

---

## 🧰 Stack

- Next.js 14 • React • TypeScript
- Tailwind CSS • Variáveis de tema
- Framer Motion • React Icons
- Supabase (Database/Storage)

---

## ▶️ Rodando localmente

1) Instale as dependências:
```bash
npm i
```

2) Configure variáveis de ambiente (crie `.env.local`):
```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

3) Dev server:
```bash
npm run dev
# http://localhost:3000
```

---

## 🗂️ Estrutura (highlights)

```
src/
  app/
    page.tsx            # Home
    projects/page.tsx   # Catálogo com filtro/paginação
    contact/page.tsx    # Form + canais diretos
  components/
    ProjectCard.tsx, Header.tsx, Footer.tsx, Hero.tsx ...
  lib/
    supabase/           # clients server/client
    icons/skillIcons.tsx# mapa de ícones + utilitários
```

---

## 🔒 Supabase (resumo)

Tabelas: `projects`, `techs`, `project_techs`, `messages`. Techs possuem `icon_key` para exibir ícones no site. Mensagens são gravadas via `/contact`.

---

## 📦 Deploy

Deploy recomendado: **Vercel**.

1) Configure as variáveis de ambiente no dashboard da Vercel
2) Conecte seu repositório GitHub e faça o deploy automático

---

## 🤝 Contato

- LinkedIn: [in/mathias-gilvan-fuhr-840683346](https://www.linkedin.com/in/mathias-gilvan-fuhr-840683346/)
- GitHub: [@MathiasGFuhr](https://github.com/MathiasGFuhr)
- E‑mail: **mathiasgilvanf@gmail.com**
- WhatsApp: **+55 (55) 99728‑2539**

---

> Feito com Next.js, Tailwind, Supabase e muito ❤️
