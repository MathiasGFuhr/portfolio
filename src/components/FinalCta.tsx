import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="mt-16 surface rounded-2xl border border-color p-8 text-center">
      <h2 className="text-2xl font-bold">Vamos construir algo?</h2>
      <p className="muted mt-2">
        Projetos que geram valor real para pessoas e negócios. Me chame para conversarmos.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/contact" className="btn-accent rounded-full px-5 py-2.5 text-sm font-medium">
          Fale comigo
        </Link>
        <Link href="https://www.linkedin.com/" target="_blank" className="rounded-full px-5 py-2.5 text-sm font-medium border border-color hover:bg-black/5 dark:hover:bg-white/5 transition">
          LinkedIn
        </Link>
      </div>
    </section>
  );
}


