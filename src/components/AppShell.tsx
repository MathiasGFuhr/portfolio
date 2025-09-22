"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import LoaderOverlay from "@/components/LoaderOverlay";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [showOverlay, setShowOverlay] = useState(true);

  // No first paint: hide overlay quickly (we already have SSR content)
  useEffect(() => {
    const t = setTimeout(() => setShowOverlay(false), 120);
    return () => clearTimeout(t);
  }, []);
  // Removemos overlay em mudanças de rota para evitar flicker; overlay só no primeiro paint.

  return (
    <div className="min-h-screen grid grid-rows-[auto,1fr,auto]">
      {showOverlay && <LoaderOverlay />}
      <Header />
      <PageTransition>
        <main className={`min-h-[70vh] transition-opacity duration-200 ${showOverlay ? "opacity-0" : "opacity-100"}`}>{children}</main>
      </PageTransition>
      <Footer />
    </div>
  );
}


