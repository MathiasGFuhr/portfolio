import ProjectCard from "@/components/ProjectCard";

/**
 * FeaturedProjects
 * - Renderiza até 3 projetos em destaque acima da lista geral
 * - Recebe dados já preparados pela page (inclui techs)
 */

type Featured = {
  id: string;
  title: string;
  description: string | null;
  cover_url?: string | null;
  demo_url: string | null;
  github_url: string | null;
  featured: boolean | null;
  techs: string[];
};

export default function FeaturedProjects({ items }: { items: Featured[] }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="mb-12">
      <header className="mb-4">
        <h2 className="text-2xl font-bold">Destaques</h2>
        <p className="muted mt-1 text-sm">Projetos com maior impacto</p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            techs={p.techs}
            demoUrl={p.demo_url}
            githubUrl={p.github_url}
            featured={p.featured}
            coverUrl={p.cover_url ?? undefined}
          />
        ))}
      </div>
    </section>
  );
}


