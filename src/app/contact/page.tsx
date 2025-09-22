// Página "Contato" (rota /contact)
// - Receberá um formulário que salvará mensagens no Supabase
// - Aqui manteremos cópia no dashboard para gerenciar a inbox
"use client";

import { useState } from "react";
import { supabaseClient } from "@/lib/supabase/client";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<"idle" | "success" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setSent("idle");
    const { error } = await supabaseClient.from("messages").insert({ name, email, message });
    setSending(false);
    if (!error) {
      setSent("success");
      setName(""); setEmail(""); setMessage("");
    } else {
      setSent("error");
    }
  }

  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Vamos construir algo incrível?</h1>
        <p className="mt-2 muted max-w-2xl">Entre em contato por e‑mail, LinkedIn ou WhatsApp — ou preencha o formulário que eu retorno rapidinho.</p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        {/* Coluna 1 - Form */}
        <form onSubmit={submit} className="surface rounded-2xl border border-color p-6 sm:p-8 grid gap-4">
          <div className="grid gap-1">
            <label className="text-sm opacity-80" htmlFor="name">Nome</label>
            <input id="name" className="surface border border-color rounded-lg px-3 py-2" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="grid gap-1">
            <label className="text-sm opacity-80" htmlFor="email">Email</label>
            <input id="email" type="email" className="surface border border-color rounded-lg px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="grid gap-1">
            <label className="text-sm opacity-80" htmlFor="message">Mensagem</label>
            <textarea id="message" className="surface border border-color rounded-lg px-3 py-2 min-h-[160px]" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" disabled={sending} className="btn-accent cta-accent rounded-lg px-4 py-2 font-semibold disabled:opacity-60">
              {sending ? "Enviando..." : "Enviar mensagem"}
            </button>
            {sent === "success" && <span className="text-green-500 text-sm">Mensagem enviada! 🎉</span>}
            {sent === "error" && <span className="text-red-500 text-sm">Erro ao enviar. Tente novamente.</span>}
          </div>
        </form>

        {/* Coluna 2 - Contatos diretos */}
        <aside className="surface rounded-2xl border border-color p-6 sm:p-8 grid gap-4">
          <h2 className="text-xl font-bold">Canais diretos</h2>
          <p className="muted">Prefere falar agora? Escolha um canal abaixo.</p>

          <div className="grid gap-3">
            <a className="chip text-base" href="mailto:mathiasgilvanf@gmail.com" target="_blank">
              <span className="chip-dot" /> Email • mathiasgilvanf@gmail.com
            </a>
            <a className="chip text-base" href="https://www.linkedin.com/in/mathias-gilvan-fuhr-840683346/" target="_blank" rel="noopener noreferrer">
              <span className="chip-dot" /> LinkedIn • /in/mathias-gilvan-fuhr-840683346
            </a>
            <a className="chip text-base" href="https://wa.me/5555997282539" target="_blank" rel="noopener noreferrer">
              <span className="chip-dot" /> WhatsApp • +55 (55) 99728‑2539
            </a>
            <a className="chip text-base" href="https://github.com/MathiasGFuhr" target="_blank" rel="noopener noreferrer">
              <span className="chip-dot" /> GitHub • @MathiasGFuhr
            </a>
          </div>

          <div className="mt-4 text-sm muted">
            Disponibilidade: <span className="text-[color:var(--accent)] font-semibold">aberto a propostas</span>
          </div>
        </aside>
      </section>
    </main>
  );
}


