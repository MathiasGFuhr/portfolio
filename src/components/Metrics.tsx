"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FiCode, 
  FiTrendingUp, 
  FiUsers, 
  FiAward,
  FiClock,
  FiStar
} from "react-icons/fi";
import Hint from "@/components/Hint";

// Componente para exibir métricas impressionantes
// Cards com animações, ícones e descrições detalhadas para impressionar recrutadores
export default function Metrics({ projectsCount, skillsCount }: { projectsCount?: number; skillsCount?: number }) {
  const dynamicProjects = typeof projectsCount === "number" ? `${projectsCount}+` : "15+";
  const dynamicSkills = typeof skillsCount === "number" ? `${skillsCount}+` : "5+";
  const metrics = [
    {
      icon: FiCode,
      number: dynamicProjects,
      title: "Projetos Desenvolvidos",
      description: "Aplicações web completas",
    },
    {
      icon: FiTrendingUp,
      number: "3+",
      title: "Anos de Experiência",
      description: "Desenvolvimento profissional",
    },
    {
      icon: FiUsers,
      number: "100%",
      title: "Satisfação do Cliente",
      description: "Projetos entregues no prazo",
    },
    {
      icon: FiAward,
      number: dynamicSkills,
      title: "Tecnologias Dominadas",
      description: "Stack moderna e atualizada",
    },
    {
      icon: FiClock,
      number: "24h",
      title: "Tempo de Resposta",
      description: "Suporte e manutenção",
    },
    {
      icon: FiStar,
      number: "4.9/5",
      title: "Avaliação Média",
      description: "Qualidade dos projetos",
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho da seção */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-3">
                Resultados que Impressionam
              </h2>
              <p className="text-xl muted max-w-3xl leading-relaxed">
                Números reais que demonstram minha dedicação, qualidade e impacto nos projetos que desenvolvo
              </p>
            </div>
            <div className="hidden md:block pt-2">
              <Hint text="Passe o mouse nos cards" />
            </div>
          </div>
        </motion.div>

        {/* Grid de métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            
            return (
              <motion.div
                key={index}
                className="group relative h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.18)" }}
              >
                {/* Card principal */}
                <div className={`
                  relative p-8 rounded-2xl surface border border-color h-full min-h-[200px] md:min-h-[220px] flex flex-col
                  transition-all duration-500 ease-out
                  overflow-hidden
                `}>
                  {/* realce sutil no hover, alinhado às cards do projeto/skills */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 bg-[radial-gradient(1200px_200px_at_var(--mouse-x,50%)_var(--mouse-y,50%),var(--accent),transparent_60%)]" />
                  
                  {/* Ícone */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`
                      p-3 rounded-xl surface border border-color 
                      shadow-sm group-hover:shadow-md
                      transition-all duration-300
                    `}>
                      <IconComponent className={`w-6 h-6 text-[color:var(--accent)]`} />
                    </div>
                    
                    {/* Número principal */}
                    <div className="text-right">
                      <motion.div 
                        className={`text-4xl font-bold text-[color:var(--accent)]`}
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        {metric.number}
                      </motion.div>
                    </div>
                  </div>

                  {/* Título e descrição */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      {metric.title}
                    </h3>
                    <p className="muted text-sm leading-relaxed">
                      {metric.description}
                    </p>
                  </div>

                  {/* Linha decorativa no hover */}
                  <div className={`
                    absolute bottom-0 left-0 h-[2px] w-0 
                    bg-[color:var(--accent)]
                    group-hover:w-full
                    transition-all duration-500 ease-out
                  `} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action sutil */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg muted mb-6">
            Pronto para fazer parte desses números?
          </p>
          <motion.button
            className="
              px-8 py-4 btn-accent rounded-xl
              shadow-lg hover:shadow-xl
              transition-all duration-300
              transform hover:scale-105
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Vamos Conversar
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}


