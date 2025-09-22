// Página "Projetos" (rota /projects)
// - Listará todos os projetos com filtros/paginação
// - A Home mostra destaques e alguns projetos; aqui vai o catálogo completo
"use client";

import { useEffect, useMemo, useState } from "react";
import { supabaseClient } from "@/lib/supabase/client";
import ProjectCard from "@/components/ProjectCard";

type Project = {
  id: string;
  title: string;
  description: string | null;
  cover_url: string | null;
  github_url: string | null;
  demo_url: string | null;
  featured: boolean | null;
  project_techs: { techs: { name: string } | null }[] | null;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");
  const [techFilter, setTechFilter] = useState<string>("all");
  const [page, setPage] = useState<number>(1);
  const pageSize = 6;

  useEffect(() => {
    async function load() {
      setLoading(true);
      const { data } = await supabaseClient
        .from("projects")
        .select("id,title,description,cover_url,github_url,demo_url,featured,project_techs(techs(name))")
        .eq("published", true)
        .order("sort_order", { ascending: true });
      const typed = (data as unknown as Project[]) ?? [];
      setProjects(typed);
      setLoading(false);
    }
    load();
  }, []);

  const allTechs = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => (p.project_techs ?? []).forEach((pt) => pt.techs?.name && s.add(pt.techs.name)));
    return ["all", ...Array.from(s)];
  }, [projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let arr = projects;
    if (q) arr = arr.filter((p) => p.title.toLowerCase().includes(q) || (p.description ?? "").toLowerCase().includes(q));
    if (techFilter !== "all") {
      arr = arr.filter((p) => (p.project_techs ?? []).some((pt) => pt.techs?.name === techFilter));
    }
    return arr;
  }, [projects, query, techFilter]);

  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">Projetos</h1>
      <p className="mt-2 opacity-70">Filtre por tecnologia, busque por título/descrição e navegue por páginas.</p>

      {/* Controles */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <input
          className="surface border border-color rounded-lg px-3 py-2 text-sm"
          placeholder="Buscar projetos..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
        />
        <select
          className="surface border border-color rounded-lg px-3 py-2 text-sm"
          value={techFilter}
          onChange={(e) => {
            setTechFilter(e.target.value);
            setPage(1);
          }}
        >
          {allTechs.map((t) => (
            <option key={t} value={t}>
              {t === "all" ? "Todas as tecnologias" : t}
            </option>
          ))}
        </select>
      </div>

      {/* Lista */}
      <section className="mt-8 grid gap-6 sm:grid-cols-2">
        {loading && <p className="opacity-60">Carregando...</p>}
        {!loading && paginated.map((p) => {
          const techs = (p.project_techs ?? []).map((pt) => pt.techs?.name).filter(Boolean) as string[];
          return (
            <ProjectCard
              key={p.id}
              title={p.title}
              description={p.description}
              coverUrl={p.cover_url}
              githubUrl={p.github_url}
              demoUrl={p.demo_url}
              featured={p.featured}
              techs={techs}
            />
          );
        })}
      </section>

      {/* Paginação */}
      <div className="mt-6 flex items-center gap-3">
        <button
          className="rounded-full border border-color px-3 py-1 text-sm disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Anterior
        </button>
        <span className="text-sm opacity-70">
          Página {page} de {totalPages}
        </span>
        <button
          className="rounded-full border border-color px-3 py-1 text-sm disabled:opacity-50"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Próxima
        </button>
      </div>
    </main>
  );
}


