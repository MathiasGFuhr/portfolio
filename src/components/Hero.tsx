"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase } from "react-icons/si";

/**
 * Hero
 * Seção de abertura da Home com gradiente animado e CTAs.
 * - Mostra headline impactante e chips da stack
 * - Gradiente usa Framer Motion para fade/scale inicial
 */
export default function Hero({ projectsCount }: { projectsCount: number }) {
  return (
    <section className="relative overflow-hidden mt-8 sm:mt-12 lg:mt-16">
      {/* Container padrão do projeto */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Card do Hero */}
        <div className="relative surface rounded-2xl border border-color px-6 py-10 sm:px-10 sm:py-14">
          {/* Gradiente animado de fundo (relativo ao card) */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-28 -right-20 h-80 w-80 rounded-full blur-3xl"
            style={{ background: "radial-gradient(closest-side, var(--accent) 30%, transparent)" }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Conteúdo centralizado e com largura máxima controlada */}
          <div className="max-w-5xl">
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1 rounded-full border border-color bg-[color:var(--background)]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" /> Disponível para projetos
        </span>
        <span className="text-sm uppercase tracking-widest muted">Desenvolvedor Front‑end</span>
      </div>
      <h1 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight">
        Construo interfaces rápidas, acessíveis e memoráveis.
      </h1>
      <p className="mt-5 text-base md:text-lg muted max-w-3xl">
        Crio experiências digitais elegantes e performáticas, com foco em acessibilidade e resultados reais. Explore meus projetos e vamos conversar sobre sua ideia.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <Link href="/projects" className="btn-accent rounded-full px-5 py-2.5 text-sm font-medium shadow-sm">
          Ver projetos ({projectsCount})
        </Link>
        <Link href="/contact" className="rounded-full px-5 py-2.5 text-sm font-medium border border-color hover:bg-black/5 dark:hover:bg-white/5 transition">
          Fale comigo
        </Link>
      </div>

      {/* Chips de stack */}
      <div className="mt-8 flex flex-wrap gap-2 text-xs">
        {["React", "Next.js", "TypeScript", "Tailwind", "Supabase"].map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="chip"
          >
            <span className="chip-dot" />
            {t === "React" && <SiReact className="w-3.5 h-3.5" />}
            {t === "Next.js" && <SiNextdotjs className="w-3.5 h-3.5" />}
            {t === "TypeScript" && <SiTypescript className="w-3.5 h-3.5" />}
            {t === "Tailwind" && <SiTailwindcss className="w-3.5 h-3.5" />}
            {t === "Supabase" && <SiSupabase className="w-3.5 h-3.5" />}
            {t}
          </motion.span>
        ))}
      </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}


