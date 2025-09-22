/**
 * Footer
 * - Informações de rodapé e links sociais
 * - Usa variáveis do tema para manter consistência
 */
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-color">
      <div className="max-w-5xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-sm">
        {/* Coluna 1: marca */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src="/logo-mark.svg" alt="Mathias" className="w-6 h-6" />
            <span className="font-semibold">Mathias Fuhr</span>
          </div>
          <p className="muted">
            Construindo interfaces rápidas, acessíveis e memoráveis.
          </p>
        </div>

        {/* Coluna 2: navegação */}
        <nav className="grid grid-cols-2 gap-2 md:justify-items-center">
          <Link className="nav-link opacity-80" href="/">Home</Link>
          <Link className="nav-link opacity-80" href="/projects">Projetos</Link>
          <Link className="nav-link opacity-80" href="/about">Sobre</Link>
          <Link className="nav-link opacity-80" href="/contact">Contato</Link>
        </nav>

        {/* Coluna 3: social/contato */}
        <div className="md:justify-self-end flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <a className="underline" href="mailto:contato@mathias.dev">contato@mathias.dev</a>
          </div>
          <div className="flex items-center gap-4">
            <a className="nav-link opacity-80" href="https://github.com/" target="_blank">GitHub</a>
            <a className="nav-link opacity-80" href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="border-t border-color">
        <div className="max-w-5xl mx-auto px-6 py-4 text-xs flex items-center justify-between opacity-70">
          <span>© {year} Mathias Fuhr. Todos os direitos reservados.</span>
          <span>Feito com Next.js, Tailwind e Supabase</span>
        </div>
      </div>
    </footer>
  );
}


