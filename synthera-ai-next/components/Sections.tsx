import { Reveal } from "./Reveal";

/* ---------- STATS ---------- */
const STATS = [
  { n: "24/7", l: "Atendimento automático, inclusive fora do horário" },
  { n: "Em dias", l: "Tempo de instalação — não meses" },
  { n: "100%", l: "Dentro do WhatsApp que sua clínica já usa" },
];

export function Stats() {
  return (
    <div className="bg-bgsoft border-y border-bd">
      <div className="max-w-container mx-auto px-6 grid md:grid-cols-3">
        {STATS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <div className="py-[30px] px-6 text-center md:border-r border-bd last:border-r-0">
              <div className="font-display font-bold text-[30px]">{s.n}</div>
              <div className="text-[13.5px] text-dim mt-1">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ---------- SECTION HEAD (reutilizável) ---------- */
function Head({ eyebrow, title, sub, center }: { eyebrow: string; title: string; sub?: string; center?: boolean }) {
  return (
    <Reveal>
      <div className={`max-w-[680px] mb-12 ${center ? "mx-auto text-center" : ""}`}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="text-[clamp(28px,3.6vw,40px)] my-3.5">{title}</h2>
        {sub && <p className="text-dim text-[17px]">{sub}</p>}
      </div>
    </Reveal>
  );
}

const cardCls =
  "bg-surface border border-bd rounded-[14px] p-7 transition-[border-color,transform,background] duration-300 hover:border-accent hover:-translate-y-1 hover:bg-surface2";

/* ---------- BENEFÍCIOS ---------- */
const BENEFITS = [
  { t: "Confirmação automática", d: "Cada paciente recebe confirmação e lembrete na hora certa. Quem ia esquecer, confirma. Quem ia faltar, remarca." },
  { t: "Recuperação de inativos", d: "Pacientes que sumiram há meses voltam sozinhos. O sistema reativa com a mensagem certa, no tom da sua clínica." },
  { t: "Sua recepção, livre", d: "Menos ligações repetitivas e mensagens manuais. Sua equipe foca no paciente que está na sua frente." },
  { t: "Resultado em reais", d: "Todo mês um relatório simples: quantas consultas foram recuperadas e quanto isso significou no caixa." },
];

export function Benefits() {
  return (
    <section className="py-[92px]">
      <div className="max-w-container mx-auto px-6">
        <Head
          eyebrow="Por que Synthera"
          title="A gente não entrega um robô. Entrega agenda cheia."
          sub="Outras empresas instalam ferramentas. A Synthera instala um sistema que trabalha pela sua clínica todos os dias — e te mostra o resultado em reais."
        />
        <div className="grid md:grid-cols-2 gap-5">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.t} delay={(i % 2) * 0.1}>
              <div className={cardCls}>
                <div className="w-11 h-11 rounded-[11px] bg-accentsoft grid place-items-center mb-[18px] text-accenthi">
                  <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-[19px] mb-2">{b.t}</h3>
                <p className="text-dim text-[15px]">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVIÇOS ---------- */
const SERVICES = [
  { t: "Agendamento automático", d: "O paciente marca, remarca e tira dúvidas pelo WhatsApp, a qualquer hora, sem segurar a recepção." },
  { t: "Confirmação e lembretes", d: "Mensagens automáticas antes de cada consulta para derrubar as faltas — o coração do sistema." },
  { t: "Reativação de pacientes", d: "Campanhas inteligentes que trazem de volta quem não aparece há meses." },
  { t: "Atendimento 24 horas", d: "Dúvidas frequentes respondidas na hora, com transferência para a recepção quando precisa de gente." },
];

export function Services() {
  return (
    <section id="servicos" className="py-[92px] bg-bgsoft border-y border-bd">
      <div className="max-w-container mx-auto px-6">
        <Head
          eyebrow="O que instalamos"
          title="Um sistema completo para a sua agenda"
          sub="Tudo roda dentro do WhatsApp da clínica. Você não opera nada — o sistema trabalha sozinho."
        />
        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={(i % 2) * 0.1}>
              <div className={cardCls}>
                <h3 className="text-[19px] mb-2">{s.t}</h3>
                <p className="text-dim text-[15px]">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- COMO FUNCIONA ---------- */
const STEPS = [
  { n: "01 — Diagnóstico", t: "Entendemos sua clínica", d: "Conversamos sobre sua agenda e medimos onde você perde dinheiro com faltas e inativos hoje." },
  { n: "02 — Instalação", t: "Montamos o sistema", d: "Em poucos dias, o sistema está rodando no seu WhatsApp — confirmando, lembrando e reativando." },
  { n: "03 — Crescimento", t: "Você acompanha o resultado", d: "Relatório mensal com consultas recuperadas e o retorno em reais. Ajustamos para crescer mais." },
];

export function HowItWorks() {
  return (
    <section id="como" className="py-[92px]">
      <div className="max-w-container mx-auto px-6">
        <Head eyebrow="Como funciona" title="Do diagnóstico ao crescimento, em 3 passos" />
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="pt-3.5 border-t border-bdstrong">
                <div className="font-mono text-[13px] text-accenthi tracking-[0.1em]">{s.n}</div>
                <h3 className="text-[20px] mt-3.5 mb-2.5">{s.t}</h3>
                <p className="text-dim text-[15px]">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- RESULTADOS (placeholder honesto) ---------- */
export function Results() {
  return (
    <section id="resultados" className="py-[92px] bg-bgsoft border-y border-bd">
      <div className="max-w-container mx-auto px-6">
        <Head
          eyebrow="Resultados"
          title="Casos reais aparecem aqui"
          sub="Esta seção foi feita para receber o resultado do seu primeiro cliente. Publique apenas números verdadeiros."
        />
        {/* ⚠️ EDITAR: troque pelo case real após o primeiro piloto. NÃO publique dados inventados. */}
        <Reveal>
          <div className="bg-surface border border-dashed border-bdstrong rounded-[14px] p-[30px] text-center">
            <span className="inline-block font-mono text-[11px] tracking-[0.14em] uppercase text-mint border border-mint/40 rounded-full px-3 py-1.5 mb-3.5">
              Aguardando seu 1º case
            </span>
            <p className="text-dim text-[15px] max-w-[440px] mx-auto">
              Depois do primeiro piloto, troque este bloco por: nome da clínica, nº de consultas recuperadas no mês
              e o valor recuperado em reais. Prova social real converte — inventada destrói confiança.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- DEPOIMENTOS (placeholder honesto) ---------- */
const QUOTES = [
  '"[Depoimento do seu primeiro cliente aparece aqui — nas palavras dele, sobre o resultado real.]"',
  '"[Segundo depoimento real. Peça ao cliente logo após mostrar o relatório de consultas recuperadas.]"',
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-[92px]">
      <div className="max-w-container mx-auto px-6">
        <Head
          eyebrow="Depoimentos"
          title="O que dizem nossas clínicas"
          sub="Modelos prontos para preencher com depoimentos reais dos primeiros clientes."
        />
        {/* ⚠️ EDITAR: troque pelos depoimentos reais dos seus clientes. */}
        <div className="grid md:grid-cols-2 gap-5">
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={(i % 2) * 0.1}>
              <div className="bg-surface border border-bd rounded-[14px] p-[26px]">
                <div className="text-mint tracking-[3px] mb-3">★★★★★</div>
                <blockquote className="text-[16px] text-ink mb-4">{q}</blockquote>
                <div className="text-[13.5px] text-faint font-mono">— Nome · Clínica (a preencher)</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
