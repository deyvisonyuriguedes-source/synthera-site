import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade — Synthera AI",
  description: "Como a Synthera AI coleta, usa e protege os dados pessoais em conformidade com a LGPD.",
  robots: { index: true, follow: true },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-[20px] mb-3">{title}</h2>
    <div className="text-dim text-[15.5px] space-y-3">{children}</div>
  </div>
);

export default function Privacidade() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-bg/70 backdrop-blur-md border-b border-bd">
        <div className="max-w-container mx-auto px-6 h-[72px] flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 font-display font-bold text-[19px]">
            <span className="text-accent text-xl">◆</span> Synthera<span className="text-accent">AI</span>
          </a>
          <a href="/" className="text-[15px] text-dim hover:text-ink transition-colors">← Voltar ao site</a>
        </div>
      </header>

      <main className="max-w-[780px] mx-auto px-6 py-16">
        <span className="eyebrow">Documento legal</span>
        <h1 className="text-[clamp(30px,4vw,44px)] my-4">Política de Privacidade</h1>
        <p className="text-faint text-[14px] mb-10">Última atualização: [DATA]</p>

        {/* ⚠️ MODELO: preencha os campos entre [colchetes] e revise com um advogado antes de publicar. */}

        <Section title="1. Quem somos">
          <p>
            Esta política se aplica ao site da Synthera AI, operado por [RAZÃO SOCIAL], inscrita no CNPJ [CNPJ],
            com contato em [E-MAIL]. Somos o controlador dos dados coletados neste site, nos termos da Lei nº 13.709/2018 (LGPD).
          </p>
        </Section>

        <Section title="2. Quais dados coletamos">
          <p>
            Coletamos apenas os dados que você nos fornece no formulário de contato: nome, nome da clínica,
            número de WhatsApp, e-mail (opcional) e a mensagem que você escreve. Não coletamos dados de saúde de
            pacientes por meio deste site.
          </p>
        </Section>

        <Section title="3. Para que usamos">
          <p>
            Usamos seus dados exclusivamente para responder ao seu contato, entender sua necessidade e apresentar
            nossos serviços. Não vendemos nem alugamos seus dados a terceiros.
          </p>
        </Section>

        <Section title="4. Base legal">
          <p>
            O tratamento se baseia no seu consentimento, ao enviar o formulário, e no legítimo interesse de
            responder a uma solicitação comercial que você iniciou.
          </p>
        </Section>

        <Section title="5. Com quem compartilhamos">
          <p>
            Para entrar em contato, podemos usar serviços de terceiros como WhatsApp (Meta) e ferramentas de e-mail.
            Esses serviços têm suas próprias políticas de privacidade. Compartilhamos apenas o necessário para o contato.
          </p>
        </Section>

        <Section title="6. Seus direitos">
          <p>
            Você pode, a qualquer momento, solicitar acesso, correção ou exclusão dos seus dados, além de revogar o
            consentimento. Para isso, escreva para [E-MAIL].
          </p>
        </Section>

        <Section title="7. Retenção e segurança">
          <p>
            Mantemos seus dados apenas pelo tempo necessário ao atendimento e adotamos medidas razoáveis para protegê-los.
            Quando não forem mais necessários, são eliminados.
          </p>
        </Section>

        <Section title="8. Contato do encarregado (DPO)">
          <p>Dúvidas sobre esta política ou sobre seus dados? Fale com [NOME / E-MAIL DO ENCARREGADO].</p>
        </Section>

        <p className="text-faint text-[13px] border-t border-bd pt-6 mt-10">
          Este é um modelo inicial. Revise com um advogado para adequar à sua operação real antes de publicar.
        </p>
      </main>
      <Footer />
    </>
  );
}
