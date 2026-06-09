import { ActionButton } from "./ActionButton";

export function Footer() {
  return (
    <footer className="border-t border-bd py-14 bg-bgsoft">
      <div className="max-w-container mx-auto px-6">
        <div className="flex justify-between gap-10 flex-wrap mb-9">
          <div className="max-w-[300px]">
            <a href="#" className="flex items-center gap-2.5 font-display font-bold text-[19px]">
              <span className="text-accent text-xl">◆</span>
              Synthera<span className="text-accent">AI</span>
            </a>
            <p className="text-dim text-sm mt-3">Transformando operações em crescimento.</p>
          </div>

          <div>
            <h4 className="font-display text-sm mb-3.5">Navegação</h4>
            {[
              { href: "#servicos", l: "Serviços" },
              { href: "#como", l: "Como funciona" },
              { href: "#planos", l: "Planos" },
              { href: "#resultados", l: "Resultados" },
              { href: "#faq", l: "Dúvidas" },
            ].map((x) => (
              <a key={x.href} href={x.href} className="block text-dim text-sm mb-2.5 hover:text-accenthi transition-colors">
                {x.l}
              </a>
            ))}
          </div>

          <div>
            <h4 className="font-display text-sm mb-3.5">Contato</h4>
            <ActionButton action="whatsapp" className="block text-dim text-sm mb-2.5 hover:text-accenthi transition-colors">WhatsApp</ActionButton>
            <ActionButton action="agendar" className="block text-dim text-sm mb-2.5 hover:text-accenthi transition-colors">Agendar reunião</ActionButton>
            <ActionButton action="email" className="block text-dim text-sm mb-2.5 hover:text-accenthi transition-colors">E-mail</ActionButton>
          </div>
        </div>

        <div className="border-t border-bd pt-5 flex justify-between gap-4 flex-wrap text-[13px] text-faint">
          <span>© {new Date().getFullYear()} Synthera AI. Todos os direitos reservados.</span>
          <a href="/privacidade" className="hover:text-accenthi transition-colors">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
