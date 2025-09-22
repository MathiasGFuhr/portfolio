// src/app/page.tsx
import { supabaseClient } from '@/lib/supabase/client';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import Metrics from '@/components/Metrics';
import Skills from '@/components/Skills';
import ProjectCard from '@/components/ProjectCard';

// Tipos para os dados do Supabase
interface ProjectTech {
  techs: {
    name: string;
    icon_key: string | null;
  };
}

interface Project {
  id: string;
  title: string;
  description: string | null;
  cover_url: string | null;
  github_url: string | null;
  demo_url: string | null;
  featured: boolean;
  result: string | null;
  project_techs: ProjectTech[];
}

// Função para buscar projetos do Supabase
async function getProjects(): Promise<Project[]> {
  try {
    // Verifica se as variáveis de ambiente estão disponíveis
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.warn('[HomePage] Variáveis do Supabase não configuradas, retornando array vazio');
      return [];
    }

    const { data, error } = await supabaseClient
      .from('projects')
      .select(`
        id,
        title,
        description,
        cover_url,
        github_url,
        demo_url,
        featured,
        result,
        project_techs (
          techs (
            name,
            icon_key
          )
        )
      `)
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erro ao buscar projetos:', error);
      return [];
    }

    // Normaliza o shape vindo do Supabase para garantir que
    // project_techs[].techs seja sempre um ÚNICO objeto (e não array)
    const normalized: Project[] = (data ?? []).map((p: any) => {
      const projectTechs: ProjectTech[] = Array.isArray(p.project_techs)
        ? p.project_techs.map((pt: any) => {
            const techs = Array.isArray(pt?.techs)
              ? (pt.techs[0] ?? { name: "", icon_key: null })
              : (pt?.techs ?? { name: "", icon_key: null });
            return { techs } as ProjectTech;
          })
        : [];

      return {
        id: String(p.id),
        title: String(p.title ?? ""),
        description: p.description ?? null,
        cover_url: p.cover_url ?? null,
        github_url: p.github_url ?? null,
        demo_url: p.demo_url ?? null,
        featured: Boolean(p.featured),
        result: p.result ?? null,
        project_techs: projectTechs,
      } as Project;
    });

    return normalized;
  } catch (error) {
    console.error('Erro na função getProjects:', error);
    return [];
  }
}

// Função para buscar tecnologias do Supabase
async function getTechs(): Promise<{ name: string; icon_key: string | null }[]> {
  try {
    // Verifica se as variáveis de ambiente estão disponíveis
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.warn('[HomePage] Variáveis do Supabase não configuradas, retornando array vazio');
      return [];
    }

    const { data, error } = await supabaseClient
      .from('techs')
      .select('name, icon_key')
      .order('name');

    if (error) {
      console.error('Erro ao buscar tecnologias:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Erro na função getTechs:', error);
    return [];
  }
}

export default async function HomePage() {
  // Busca dados do Supabase de forma defensiva
  const [projects, techs] = await Promise.all([
    getProjects(),
    getTechs()
  ]);

  // Filtra projetos em destaque
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  // Conta tecnologias únicas
  const skillsCount = new Set(techs.map(tech => tech.name)).size;

  return (
    <main className="min-h-screen">
      {/* Seção Hero com animação de fundo */}
      <Hero projectsCount={projects.length} />
      
      {/* Projetos em Destaque */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projetos em Destaque</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Alguns dos meus trabalhos mais recentes e impactantes
          </p>
        </div>
        
        {featuredProjects.length > 0 ? (
          <FeaturedProjects projects={featuredProjects} />
        ) : (
          <div className="text-center py-12">
            <p className="text-muted">Nenhum projeto em destaque encontrado.</p>
          </div>
        )}
      </section>

      {/* Métricas */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Números que Importam</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Resultados concretos dos meus projetos
          </p>
        </div>
        
        <Metrics projectsCount={projects.length} skillsCount={skillsCount} />
      </section>

      {/* Tecnologias */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Tecnologias Dominadas</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Ferramentas e linguagens que uso no dia a dia
          </p>
        </div>
        
        <Skills skillsItems={techs} />
      </section>

      {/* Todos os Projetos */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Todos os Projetos</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Explore minha coleção completa de trabalhos
          </p>
        </div>
        
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                coverUrl={project.cover_url}
                githubUrl={project.github_url}
                demoUrl={project.demo_url}
                techs={project.project_techs.map(pt => pt.techs.name)}
                result={project.result}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted">Nenhum projeto encontrado.</p>
    </div>
        )}
      </section>
    </main>
  );
}