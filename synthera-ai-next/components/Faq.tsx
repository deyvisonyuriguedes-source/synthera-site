"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "./Reveal";

const ITEMS = [
  { q: "Preciso trocar meu sistema de agenda?", a: "Não. O sistema se conecta ao seu fluxo atual. A ideia é somar à sua operação, não substituí-la." },
  { q: "Funciona no WhatsApp que minha clínica já usa?", a: "Sim. Tudo acontece dentro do WhatsApp, com seu número e a identidade da sua clínica." },
  { q: "Quanto tempo leva para instalar?", a: "Dias, não meses. Fazemos o diagnóstico, configuramos e colocamos no ar rapidamente." },
  { q: "E a segurança dos dados dos pacientes (LGPD)?", a: "Dados de saúde são sensíveis e tratados com o cuidado que a LGPD exige: consentimento do paciente e ferramentas adequadas. Levamos isso a sério." },
  { q: "Preciso entender de tecnologia?", a: "Não. Nós cuidamos de tudo. Você acompanha o resultado por um relatório simples, todo mês." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-[92px] bg-bgsoft border-y border-bd">
      <div className="max-w-container mx-auto px-6">
        <Reveal>
          <div className="max-w-[680px] mx-auto text-center mb-10">
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2 className="text-[clamp(28px,3.6vw,40px)] mt-3.5">Perguntas que toda clínica faz</h2>
          </div>
        </Reveal>

        <div className="max-w-[780px] mx-auto">
          {ITEMS.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-bd">
                <button
                  className="w-full text-left font-display font-medium text-[17.5px] py-[22px] pr-10 relative"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {it.q}
                  <span
                    className={`absolute right-1 top-1/2 -translate-y-1/2 text-2xl text-accenthi transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-dim text-[15.5px] pb-[22px] pr-8">{it.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
