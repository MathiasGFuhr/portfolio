"use client";

/**
 * ProjectCard
 * Componente de cartão de projeto com microanimações.
 * - Mostra título, descrição, techs e links (Demo/GitHub)
 * - Anima ao entrar na tela (scroll) e levanta levemente no hover
 * - Usa variáveis de tema (surface/border) definidas em globals.css
 */

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

export default function ProjectCard({
  title,
  description,
  techs,
  demoUrl,
  githubUrl,
  featured,
  coverUrl,
}: {
  title: string;
  description?: string | null;
  techs?: string[];
  demoUrl?: string | null;
  githubUrl?: string | null;
  featured?: boolean | null;
  coverUrl?: string | null;
}) {
  return (
    <motion.article
      /* Estado inicial (antes de aparecer na viewport) */
      initial={{ y: 6, opacity: 0 }}
      /* Animação quando entra na viewport (uma vez) */
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      /* Lift + sombra mais marcada no hover */
      whileHover={{ translateY: -3, boxShadow: "0 16px 40px rgba(0,0,0,0.18)" }}
      className="group relative rounded-2xl p-[1.5px] bg-gradient-to-r from-[color:var(--accent)]/60 to-transparent"
    >
      {/* Cartão interno com borda gradiente externa */}
      <div className="surface rounded-[15px] overflow-hidden">
        {/* Capa do projeto (opcional). Usamos <img> para aceitar URLs externas sem configuração */}
        {coverUrl ? (
          <div className="relative h-44 w-full overflow-hidden">
            <motion.img
              src={coverUrl}
              alt={`Capa do projeto ${title}`}
              className="h-full w-full object-cover"
              loading="lazy"
              initial={{ scale: 1.02 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
            {/* Fade sutil para legibilidade do título */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
          </div>
        ) : null}

        <div className="p-5">
        {/* Título + badge de destaque */}
      <h2 className="text-xl font-semibold">
        {title}
        {featured ? (
          <span className="ml-2 text-xs px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-700 dark:text-yellow-300">
            Destaque
          </span>
        ) : null}
      </h2>
        {description ? (
          <p className="mt-2 text-sm opacity-80">{description}</p>
        ) : null}

        {/* Chips simples com a stack do projeto */}
        {techs && techs.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {techs.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full border border-color muted">
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {/* Ações do card */}
        <div className="mt-4 flex gap-3 text-sm">
          {/* Links só aparecem se o dado existir (renderização condicional) */}
          {demoUrl ? (
            <a className="btn-accent rounded-full px-3 py-1.5 inline-flex items-center gap-2" href={demoUrl} target="_blank">
              <FiExternalLink /> Demo
            </a>
          ) : null}
          {githubUrl ? (
            <a className="underline inline-flex items-center gap-2" href={githubUrl} target="_blank">
              <SiGithub /> GitHub
            </a>
          ) : null}
        </div>
        </div>
      </div>
    </motion.article>
  );
}


