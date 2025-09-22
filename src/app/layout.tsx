import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mathias • Portfólio",
  description: "Portfólio de projetos e contato de Mathias",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo-circle.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // lang: pt-br para SEO/Acessibilidade
  // suppressHydrationWarning: evita avisos de diferença entre server/client
  // quando o tema é aplicado via script antes da hidratação.
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        {/* Evita flash de tema errado: aplica classe 'dark' antes da hidratação */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', isDark);
  } catch {}
})();`,
          }}
        />
      </head>
      <body
        // Define variáveis de fonte e antialiasing para tipografia consistente
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
