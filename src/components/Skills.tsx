"use client";
import { ICONS } from "@/lib/icons/skillIcons";
import { motion } from "framer-motion";
import Hint from "@/components/Hint";

type Skill = { key: keyof typeof ICONS; name: string };

// Ícones centralizados em src/lib/icons/skillIcons.tsx

const DEFAULT_SKILLS: Skill[] = [
    { key: "React", name: "React" },
    { key: "Next.js", name: "Next.js" },
    { key: "TypeScript", name: "TypeScript" },
    { key: "Tailwind", name: "Tailwind CSS" },
    { key: "Supabase", name: "Supabase" },
    { key: "AI", name: "IA (Cursor/OpenAI)" },
];

/**
 * Skills & Stack
 * Cards visuais com ícones SVG (sem libs externas) para a stack principal.
 * - Sem níveis/tempo: foco em clareza visual
 * - Usa utilitárias surface/border-color do tema
 */
export default function Skills({ items = DEFAULT_SKILLS }: { items?: Skill[] }) {
    return (
        <section className="mb-12">
            <header className="mb-4">
                <h2 className="text-2xl font-bold">Skills & Stack</h2>
                <div className="mt-1 flex items-center justify-between">
                    <p className="muted text-sm">Ferramentas que uso no dia a dia</p>
                    <div className="hidden md:block">
                        <Hint text="Passe o mouse nos cards" />
                    </div>
                </div>
            </header>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {items.map((s, index) => (
                    <motion.div
                        key={s.name}
                        className="surface rounded-xl border border-color p-5 flex items-center gap-3 will-change-transform skill-hover"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
                        viewport={{ once: true, margin: "-20%" }}
                        whileHover={{ y: -3 }}
                    >
                        <div className="shrink-0 rounded-xl p-2 bg-[color:var(--background)] border border-color icon-float">
                            <span className="text-[color:var(--accent)]">{ICONS[s.key] ?? <span className="block w-6 h-6 rounded-full bg-[color:var(--accent)]" />}</span>
                        </div>
                        <div>
                            <div className="font-semibold">{s.name}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}


