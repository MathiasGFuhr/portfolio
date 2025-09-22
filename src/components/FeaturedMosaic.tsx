"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Hint from "@/components/Hint";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

type Item = {
  id: string;
  title: string;
  description: string | null;
  cover_url: string | null;
  demo_url: string | null;
  github_url: string | null;
  techs: string[];
  result?: string | null; // ex: "+38% conversão"
};

export default function FeaturedMosaic({ items }: { items: Item[] }) {
  if (!items || items.length === 0) return null;

  const [a, b, c] = items;

  return (
    <section className="mb-12">
      <header className="mb-4">
        <h2 className="text-2xl font-bold">Projetos em destaque</h2>
        <p className="muted mt-1 text-sm">Resultados e tecnologias aplicadas</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3 auto-rows-[220px] relative">
        {/* Hint contextual próximo aos cartões */}
        <div className="hidden md:block absolute -top-8 right-0">
          <Hint text="Passe o mouse nos cards" />
        </div>
        {/* Card grande */}
        {a && (
          <MosaicCard item={a} className="md:col-span-2 md:row-span-2" />
        )}
        {/* Dois cartões médios */}
        {b && <MosaicCard item={b} />}
        {c && <MosaicCard item={c} />}
      </div>
    </section>
  );
}

function MosaicCard({ item, className = "" }: { item: Item; className?: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative rounded-2xl overflow-hidden border border-color surface ${className}`}
    >
      {/* Capa */}
      {item.cover_url ? (
        <Image
          src={item.cover_url}
          alt={`Capa do projeto ${item.title}`}
          fill
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-black/40">
          <span className="text-white/70 text-sm">Sem imagem</span>
        </div>
      )}
      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <h3 className="text-lg sm:text-xl font-semibold text-white drop-shadow">
          {item.title}
        </h3>
        {item.description ? (
          <p className="text-sm text-white/80 line-clamp-2 mt-1">{item.description}</p>
        ) : null}

        {/* Techs */}
        {item.techs?.length ? (
          <div className="mt-2 flex flex-wrap gap-2">
            {item.techs.slice(0, 4).map((t) => (
              <span key={t} className="text-[11px] px-2 py-0.5 rounded-full border border-white/30 text-white/90">
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-3 flex items-center gap-3">
          {item.demo_url ? (
            <Link href={item.demo_url} target="_blank" className="btn-accent rounded-full px-3 py-1.5 text-sm inline-flex items-center gap-2">
              <FiExternalLink /> Demo
            </Link>
          ) : null}
          {item.github_url ? (
            <Link href={item.github_url} target="_blank" className="underline text-white/90 inline-flex items-center gap-2">
              <SiGithub /> Código
            </Link>
          ) : null}
          {item.result ? (
            <span className="ml-auto text-xs px-2 py-1 rounded bg-white/20 text-white" title="Resultado/impacto">
              {item.result}
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}


