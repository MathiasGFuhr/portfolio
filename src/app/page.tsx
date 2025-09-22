// Cliente do Supabase para consultar dados do banco
import { supabaseClient } from "@/lib/supabase/client";
import { ICONS, getIconKeyFromName } from "@/lib/icons/skillIcons";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import FeaturedProjects from "@/components/FeaturedProjects";
import Skills from "@/components/Skills";
import Metrics from "@/components/Metrics";
// import FeaturedMosaic from "@/components/FeaturedMosaic";
import FinalCta from "@/components/FinalCta";

type ProjectCard = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  cover_url: string | null;
  github_url: string | null;
  demo_url: string | null;
  featured: boolean | null;
  project_techs: { techs: { name: string } | null }[] | null;
};

export default async function Home() {
  // Consulta: busca projetos publicados com suas techs relacionadas
  const { data, error } = await supabaseClient
    .from("projects")
    .select(
      "id,title,description,cover_url,github_url,demo_url,featured,result,project_techs(techs(name))"
    )
    .eq("published", true)
    .order("featured", { ascending: false })
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  // Consulta: busca todas as tecnologias da tabela techs
  const { data: techsData } = await supabaseClient
    .from("techs")
    .select("name,icon_key")
    .order("created_at", { ascending: true });

  // Garante array vazio se a consulta retornar null
  const projects = (data as ProjectCard[] | null) ?? [];
  const allTechs = (techsData as { name: string; icon_key?: string | null }[] | null) ?? [];

  // Separa projetos em destaque e não-destaque (evita duplicar títulos na página)
  const featured = projects.filter((p) => p.featured).slice(0, 3).map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    cover_url: p.cover_url,
    demo_url: p.demo_url,
    github_url: p.github_url,
    featured: p.featured,
    result: (p as unknown as { result?: string | null }).result ?? null,
    // Extrai nomes das techs da relação project_techs → techs
    techs: ((p.project_techs ?? []).map((pt) => pt.techs?.name).filter(Boolean) as string[]),
  }));

  const nonFeatured = projects.filter((p) => !p.featured);

  // Mapeia nomes livres do banco para chaves de ícones suportados no componente Skills
  const iconKeyByName = (raw: string) => getIconKeyFromName(raw);

  // Skills baseadas na tabela techs (todas as tecnologias que você domina)
  const skillsItems = allTechs
    .map((tech) => {
      const fromIconKey = tech.icon_key && (tech.icon_key in ICONS ? (tech.icon_key as keyof typeof ICONS) : null);
      const inferred = iconKeyByName(tech.name) as keyof typeof ICONS | null;
      const key = fromIconKey ?? inferred;
      return key ? { key, name: tech.name } : null;
    })
    .filter((x): x is { key: keyof typeof ICONS; name: string } => Boolean(x));

  const skillsCount = skillsItems.length;



  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      {/* Seção Hero */}
      <div className="mb-12">
        <Hero projectsCount={projects.length} />
        {error && <p className="mt-3 text-sm text-red-500">Erro: {error.message}</p>}
      </div>

      <FeaturedProjects items={featured as any} />
      <Metrics projectsCount={projects.length} skillsCount={skillsCount} />
      <Skills items={skillsItems} />

      {/* Lista de projetos */}
      {/* Lista geral de projetos (todos publicados) */}
      <section className="grid gap-6 sm:grid-cols-2">
        {nonFeatured.map((p) => {
          // Mapeia nomes de tecnologias (remove valores nulos)
          const techs = (p.project_techs ?? [])
            .map((pt) => pt.techs?.name)
            .filter(Boolean) as string[];
          return (
            <ProjectCard
              key={p.id}
              title={p.title}
              description={p.description}
              techs={techs}
              demoUrl={p.demo_url}
              githubUrl={p.github_url}
              featured={p.featured}
              coverUrl={p.cover_url}
            />
          );
        })}
      </section>

      <FinalCta />
      </main>
  );
}
