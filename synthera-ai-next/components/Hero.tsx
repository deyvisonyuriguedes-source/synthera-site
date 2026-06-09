"use client";

import { motion } from "framer-motion";
import { ActionButton } from "./ActionButton";
import { WhatsAppDemo } from "./WhatsAppDemo";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

export function Hero() {
  return (
    <section className="hero-glow relative pt-20 pb-[90px]">
      <div className="max-w-container mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          <motion.span custom={0} variants={fade} initial="hidden" animate="show" className="eyebrow block">
            Arquitetura inteligente · Clínicas
          </motion.span>
          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="text-[clamp(38px,5.4vw,62px)] font-bold my-5"
          >
            Menos faltas.<br />Agenda cheia.<br />
            <span className="text-accenthi">No automático.</span>
          </motion.h1>
          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="text-[clamp(17px,2vw,20px)] text-dim max-w-[540px] mb-8"
          >
            A Synthera AI instala um sistema inteligente que confirma consultas, lembra pacientes e
            recupera quem sumiu — direto no WhatsApp da sua clínica. Você só vê a agenda encher.
          </motion.p>
          <motion.div custom={3} variants={fade} initial="hidden" animate="show" className="flex gap-3.5 flex-wrap">
            <ActionButton action="agendar" className="btn btn-primary">Agendar reunião →</ActionButton>
            <a href="#como" className="btn btn-ghost">Ver como funciona</a>
          </motion.div>
          <motion.p
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-5 text-[13px] text-faint flex items-center gap-2"
          >
            <span className="w-[7px] h-[7px] rounded-full bg-mint shadow-[0_0_0_4px_rgba(52,224,176,0.16)]" />
            Instalação em dias. Sem trocar seu número de WhatsApp.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <WhatsAppDemo />
        </motion.div>
      </div>
    </section>
  );
}
