import { ActionButton } from "./ActionButton";
import { Reveal } from "./Reveal";

/* ⚠️ EDITAR: ajuste os valores conforme sua economia unitária. */
const PLANS = [
  {
    name: "Essencial",
    price: "a partir de R$ 1.200",
    unit: "/mês + setup",
    desc: "Para começar a derrubar as faltas.",
    features: ["Agendamento pelo WhatsApp", "Confirmação automática", "Lembrete 24h antes da consulta"],
    highlight: false,
  },
  {
    name: "Profissional",
    price: "a partir de R$ 2.000",
    unit: "/mês + setup",
    desc: "O sistema completo de crescimento.",
    features: [
      "Tudo do Essencial",
      "Reativação de pacientes inativos",
      "FAQ e atendimento 24h",
      "Relatório mensal de consultas recuperadas",
    ],
    highlight: true,
  },
  {
    name: "Multi-unidade",
    price: "Sob consulta",
    unit: "",
    desc: "Para clínicas com várias unidades.",
    features: ["Várias unidades", "Integração com seu sistema de gestão", "Painel de acompanhamento"],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="planos" className="py-[92px] bg-bgsoft border-y border-bd">
      <div className="max-w-container mx-auto px-6">
        <Reveal>
          <div className="max-w-[680px] mx-auto text-center mb-12">
            <span className="eyebrow">Planos</span>
            <h2 className="text-[clamp(28px,3.6vw,40px)] my-3.5">Escolha como sua clínica vai crescer</h2>
            <p className="text-dim text-[17px]">O valor final é definido após o diagnóstico — você só paga pelo que faz sentido para a sua agenda.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                className={`rounded-[16px] p-7 h-full flex flex-col ${
                  p.highlight
                    ? "bg-surface2 border-2 border-accent"
                    : "bg-surface border border-bd"
                }`}
              >
                {p.highlight && (
                  <span className="self-start font-mono text-[11px] tracking-[0.12em] uppercase text-accenthi border border-accent/50 rounded-full px-3 py-1 mb-4">
                    Mais escolhido
                  </span>
                )}
                <h3 className="text-[22px] mb-1">{p.name}</h3>
                <p className="text-dim text-[14px] mb-5">{p.desc}</p>
                <div className="mb-5">
                  <span className="font-display font-bold text-[26px]">{p.price}</span>
                  <span className="text-dim text-[14px]">{p.unit}</span>
                </div>
                <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0 text-mint" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <ActionButton
                  action="agendar"
                  className={`btn w-full justify-center ${p.highlight ? "btn-primary" : "btn-ghost"}`}
                >
                  Agendar reunião
                </ActionButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
