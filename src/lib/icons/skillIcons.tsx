// Centraliza ícones suportados e utilitários de mapeamento
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiSupabase, SiOpenai, SiFramer, SiMongodb,
  SiNodedotjs, SiPrisma, SiPostgresql, SiMysql, SiSqlite, SiDocker, SiKubernetes, SiVercel, SiNetlify,
  SiAmazonaws, SiGooglecloud, SiMicrosoftazure, SiGit, SiGithub, SiGitlab, SiFigma, SiVisualstudiocode,
  SiJetbrains, SiIntellijidea, SiWebstorm, SiPython, SiJava, SiGo, SiPhp, SiRuby, SiC, SiCplusplus, SiCsharp,
  SiSwift, SiKotlin, SiDart, SiFlutter, SiAngular, SiVuedotjs, SiSvelte, SiBootstrap, SiChakraui, SiRedux,
  SiJest, SiTestinglibrary, SiCypress, SiPlaywright, SiEslint, SiPrettier, SiStorybook, SiGraphql,
  SiApollographql
} from "react-icons/si";

export const ICONS = {
  // Web frameworks e libs
  React: <SiReact className="h-6 w-6" aria-hidden />,
  "Next.js": <SiNextdotjs className="h-6 w-6" aria-hidden />,
  Vue: <SiVuedotjs className="h-6 w-6" aria-hidden />,
  Angular: <SiAngular className="h-6 w-6" aria-hidden />,
  Svelte: <SiSvelte className="h-6 w-6" aria-hidden />,

  // Linguagens
  JavaScript: <SiJavascript className="h-6 w-6" aria-hidden />,
  TypeScript: <SiTypescript className="h-6 w-6" aria-hidden />,
  Python: <SiPython className="h-6 w-6" aria-hidden />,
  Java: <SiJava className="h-6 w-6" aria-hidden />,
  Go: <SiGo className="h-6 w-6" aria-hidden />,
  PHP: <SiPhp className="h-6 w-6" aria-hidden />,
  Ruby: <SiRuby className="h-6 w-6" aria-hidden />,
  C: <SiC className="h-6 w-6" aria-hidden />,
  "C++": <SiCplusplus className="h-6 w-6" aria-hidden />,
  "C#": <SiCsharp className="h-6 w-6" aria-hidden />,
  Swift: <SiSwift className="h-6 w-6" aria-hidden />,
  Kotlin: <SiKotlin className="h-6 w-6" aria-hidden />,
  Dart: <SiDart className="h-6 w-6" aria-hidden />,
  Flutter: <SiFlutter className="h-6 w-6" aria-hidden />,

  // Estilo/UI
  Tailwind: <SiTailwindcss className="h-6 w-6" aria-hidden />,
  Bootstrap: <SiBootstrap className="h-6 w-6" aria-hidden />,
  Chakra: <SiChakraui className="h-6 w-6" aria-hidden />,

  // BaaS/AI
  Supabase: <SiSupabase className="h-6 w-6" aria-hidden />,
  AI: <SiOpenai className="h-6 w-6" aria-hidden />,
  Framer: <SiFramer className="h-6 w-6" aria-hidden />,

  // DB/Server
  MongoDB: <SiMongodb className="h-6 w-6" aria-hidden />,
  Node: <SiNodedotjs className="h-6 w-6" aria-hidden />,
  Prisma: <SiPrisma className="h-6 w-6" aria-hidden />,
  PostgreSQL: <SiPostgresql className="h-6 w-6" aria-hidden />,
  MySQL: <SiMysql className="h-6 w-6" aria-hidden />,
  SQLite: <SiSqlite className="h-6 w-6" aria-hidden />,

  // DevOps/Cloud
  Docker: <SiDocker className="h-6 w-6" aria-hidden />,
  Kubernetes: <SiKubernetes className="h-6 w-6" aria-hidden />,
  Vercel: <SiVercel className="h-6 w-6" aria-hidden />,
  Netlify: <SiNetlify className="h-6 w-6" aria-hidden />,
  AWS: <SiAmazonaws className="h-6 w-6" aria-hidden />,
  GCP: <SiGooglecloud className="h-6 w-6" aria-hidden />,
  Azure: <SiMicrosoftazure className="h-6 w-6" aria-hidden />,

  // Git/Design/IDE
  Git: <SiGit className="h-6 w-6" aria-hidden />,
  GitHub: <SiGithub className="h-6 w-6" aria-hidden />,
  GitLab: <SiGitlab className="h-6 w-6" aria-hidden />,
  Figma: <SiFigma className="h-6 w-6" aria-hidden />,
  VSCode: <SiVisualstudiocode className="h-6 w-6" aria-hidden />,
  JetBrains: <SiJetbrains className="h-6 w-6" aria-hidden />,
  IntelliJ: <SiIntellijidea className="h-6 w-6" aria-hidden />,
  WebStorm: <SiWebstorm className="h-6 w-6" aria-hidden />,

  // Testes/Tools
  Redux: <SiRedux className="h-6 w-6" aria-hidden />,
  Jest: <SiJest className="h-6 w-6" aria-hidden />,
  TestingLibrary: <SiTestinglibrary className="h-6 w-6" aria-hidden />,
  Cypress: <SiCypress className="h-6 w-6" aria-hidden />,
  Playwright: <SiPlaywright className="h-6 w-6" aria-hidden />,
  ESLint: <SiEslint className="h-6 w-6" aria-hidden />,
  Prettier: <SiPrettier className="h-6 w-6" aria-hidden />,
  Storybook: <SiStorybook className="h-6 w-6" aria-hidden />,
  GraphQL: <SiGraphql className="h-6 w-6" aria-hidden />,
  Apollo: <SiApollographql className="h-6 w-6" aria-hidden />,
} as const;

export type IconKey = keyof typeof ICONS;

// Fallback heurístico por nome (para quando icon_key não for fornecido)
export function getIconKeyFromName(raw: string): IconKey | null {
  const n = raw.trim().toLowerCase();
  if (n.includes("react")) return "React";
  if (n === "next" || n === "nextjs" || n === "next.js") return "Next.js";
  if (n.includes("vue")) return "Vue";
  if (n.includes("angular")) return "Angular";
  if (n.includes("svelte")) return "Svelte";
  if (n.includes("javascript")) return "JavaScript";
  if (n.includes("typescript") || n === "ts") return "TypeScript";
  if (n.includes("python")) return "Python";
  if (n.includes("java")) return "Java";
  if (n.includes("golang") || n === "go") return "Go";
  if (n.includes("php")) return "PHP";
  if (n.includes("ruby")) return "Ruby";
  if (n === "c ") return "C";
  if (n.includes("c++")) return "C++";
  if (n.includes("c#")) return "C#";
  if (n.includes("swift")) return "Swift";
  if (n.includes("kotlin")) return "Kotlin";
  if (n.includes("dart")) return "Dart";
  if (n.includes("flutter")) return "Flutter";
  if (n.includes("tailwind")) return "Tailwind";
  if (n.includes("bootstrap")) return "Bootstrap";
  if (n.includes("chakra")) return "Chakra";
  if (n.includes("supabase")) return "Supabase";
  if (n.includes("openai") || n.includes("ai") || n.includes("cursor")) return "AI";
  if (n.includes("framer")) return "Framer";
  if (n.includes("mongo")) return "MongoDB";
  if (n.includes("node")) return "Node";
  if (n.includes("prisma")) return "Prisma";
  if (n.includes("postgres")) return "PostgreSQL";
  if (n.includes("mysql")) return "MySQL";
  if (n.includes("sqlite")) return "SQLite";
  if (n.includes("docker")) return "Docker";
  if (n.includes("kubernetes")) return "Kubernetes";
  if (n.includes("vercel")) return "Vercel";
  if (n.includes("netlify")) return "Netlify";
  if (n.includes("aws")) return "AWS";
  if (n.includes("gcp")) return "GCP";
  if (n.includes("azure")) return "Azure";
  if (n.includes("gitlab")) return "GitLab";
  if (n.includes("github")) return "GitHub";
  if (n.startsWith("git")) return "Git";
  if (n.includes("figma")) return "Figma";
  if (n.includes("vscode") || n.includes("visual studio code")) return "VSCode";
  if (n.includes("jetbrains")) return "JetBrains";
  if (n.includes("intellij")) return "IntelliJ";
  if (n.includes("webstorm")) return "WebStorm";
  if (n.includes("redux")) return "Redux";
  if (n.includes("jest")) return "Jest";
  if (n.includes("testing library")) return "TestingLibrary";
  if (n.includes("cypress")) return "Cypress";
  if (n.includes("playwright")) return "Playwright";
  if (n.includes("eslint")) return "ESLint";
  if (n.includes("prettier")) return "Prettier";
  if (n.includes("storybook")) return "Storybook";
  if (n.includes("graphql")) return "GraphQL";
  if (n.includes("apollo")) return "Apollo";
  return null;
}


