"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Msg =
  | { kind: "in" | "out"; text: string }
  | { kind: "tag"; text: string }
  | { kind: "result"; text: string };

const THREAD: Msg[] = [
  { kind: "in", text: "Olá, Dona Marta! Aqui é a assistente da clínica 👋 Sua consulta é amanhã às 14h. Posso confirmar?" },
  { kind: "out", text: "Ah, ia esquecer! Pode confirmar sim 🙏" },
  { kind: "in", text: "Perfeito, confirmado! ✓ Te mando um lembrete 2h antes. Até amanhã 💜" },
  { kind: "tag", text: "— 1 falta evitada —" },
  { kind: "result", text: "✓ Consulta confirmada, sem esforço da recepção" },
];

export function WhatsAppDemo() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(reduce ? THREAD.length : 0);

  useEffect(() => {
    if (reduce) return;
    let timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setVisible(0);
      THREAD.forEach((_, i) => timers.push(setTimeout(() => setVisible(i + 1), 600 + i * 900)));
    };
    run();
    const loop = setInterval(run, 600 + THREAD.length * 900 + 3500);
    return () => {
      clearInterval(loop);
      timers.forEach(clearTimeout);
    };
  }, [reduce]);

  return (
    <div
      className="bg-surface border border-bd rounded-[22px] overflow-hidden shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] max-w-[420px] mx-auto lg:mx-0"
      aria-hidden="true"
    >
      <div className="flex items-center gap-3 px-[18px] py-3.5 bg-[#10231a] border-b border-bd">
        <div className="w-[38px] h-[38px] rounded-full bg-wa grid place-items-center text-[#04210f] font-display font-bold">S</div>
        <div>
          <div className="font-display font-medium text-[15px]">Clínica · Synthera AI</div>
          <div className="text-xs text-mint">online</div>
        </div>
      </div>

      <div className="px-[18px] py-5 flex flex-col gap-3 min-h-[300px] bg-bgsoft">
        {THREAD.map((m, i) => {
          const shown = i < visible;
          if (m.kind === "tag")
            return (
              <motion.div
                key={i}
                animate={{ opacity: shown ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="self-center font-mono text-[11px] uppercase tracking-[0.12em] text-faint"
              >
                {m.text}
              </motion.div>
            );
          if (m.kind === "result")
            return (
              <motion.div
                key={i}
                animate={{ opacity: shown ? 1 : 0, scale: shown ? 1 : 0.9 }}
                transition={{ duration: 0.5 }}
                className="self-center flex items-center gap-2 bg-accentsoft border border-accent/40 text-accenthi px-4 py-2 rounded-full font-display font-medium text-sm"
              >
                {m.text}
              </motion.div>
            );
          const out = m.kind === "out";
          return (
            <motion.div
              key={i}
              animate={{ opacity: shown ? 1 : 0, y: shown ? 0 : 8 }}
              transition={{ duration: 0.45 }}
              className={`max-w-[80%] px-3.5 py-2.5 text-[14.5px] leading-snug rounded-[14px] ${
                out
                  ? "self-end bg-[#1f3d30] text-[#dfffee] rounded-br-[4px]"
                  : "self-start bg-surface2 border border-bd rounded-bl-[4px]"
              }`}
            >
              {m.text}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
