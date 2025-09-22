"use client";

/**
 * Header
 * - Navegação principal com tema persistente e link ativo
 * - Sticky com blur para manter contexto
 * - Menu mobile acessível (aria-*)
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname(); // rota atual para destacar link ativo
  const [menuOpen, setMenuOpen] = useState(false); // menu mobile
  const [theme, setTheme] = useState<"light" | "dark">("dark"); // tema atual

  // Lê tema salvo e aplica no <html>
  useEffect(() => {
    // Ao montar, tenta usar preferências salvas; se não houver, respeita o sistema
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  // Troca tema e persiste
  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--surface)]/60 bg-[color:var(--surface)]/80 border-b border-color">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2" onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}>
            <img src="/logo.svg" alt="Mathias Fuhr" className="w-8 h-8 sm:w-9 sm:h-9" />
            <span className="font-extrabold tracking-tight text-lg sm:text-xl text-[color:var(--accent)] drop-shadow-[0_1px_0_rgba(0,0,0,.2)]">Mathias Fuhr</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={"nav-link " + (active ? "active" : "opacity-80")}
                onClick={(e) => {
                  if (l.href === "/" && pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                {l.label}
              </Link>
            );
          })}

          <Link
            href="/projects"
            className="rounded-full px-4 py-2 text-sm font-semibold btn-accent cta-accent"
          >
            Ver projetos
          </Link>

          <button
            aria-label="Alternar tema"
            onClick={toggleTheme}
            className="ml-2 rounded-full border border-color w-9 h-9 grid place-items-center hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Alternar tema"
            onClick={toggleTheme}
            className="rounded-full border border-color w-9 h-9 grid place-items-center hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <button
            aria-expanded={menuOpen}
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-md border border-color px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-color bg-[color:var(--surface)]/90 backdrop-blur">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-3 text-sm">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    "py-2 transition " +
                    (active ? "font-medium" : "opacity-80 hover:opacity-100")
                  }
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="rounded-full px-4 py-2 text-center font-medium btn-accent shadow-sm"
            >
              Ver projetos
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}


