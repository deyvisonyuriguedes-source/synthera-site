"use client";

import { useEffect, useState } from "react";
import { ActionButton } from "./ActionButton";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#faq", label: "Dúvidas" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/70 backdrop-blur-md border-b border-bd" : ""
      }`}
    >
      <div className="max-w-container mx-auto px-6 h-[72px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 font-display font-bold text-[19px]">
          <span className="text-accent text-xl">◆</span>
          Synthera<span className="text-accent">AI</span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] text-dim hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <a href="#contato" className="btn btn-ghost hidden sm:inline-flex">Falar com a gente</a>
          <ActionButton action="agendar" className="btn btn-primary">Agendar reunião</ActionButton>
          <button
            className="md:hidden p-2 text-ink"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-bgsoft border-b border-bd">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3.5 border-t border-bd text-dim hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
