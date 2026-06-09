"use client";

import { useState } from "react";
import { ActionButton } from "./ActionButton";
import { Reveal } from "./Reveal";
import { waLink } from "@/lib/config";

export function ContactCta() {
  const [form, setForm] = useState({ nome: "", clinica: "", whats: "", email: "", msg: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.whats.trim()) {
      alert("Por favor, preencha seu nome e WhatsApp.");
      return;
    }
    const texto =
      `Olá! Vim pelo site da Synthera AI.\n` +
      `Nome: ${form.nome}\n` +
      `Clínica: ${form.clinica || "-"}\n` +
      `WhatsApp: ${form.whats}\n` +
      `E-mail: ${form.email || "-"}\n` +
      `Mensagem: ${form.msg || "-"}`;
    window.open(waLink(texto), "_blank");
  };

  const inputCls =
    "w-full bg-bgsoft border border-bdstrong rounded-[10px] text-ink text-[15px] px-3.5 py-3 transition-colors focus:border-accent focus:outline-none";

  return (
    <section id="contato" className="py-[92px]">
      <div className="max-w-container mx-auto px-6">
        <Reveal>
          <div className="bg-gradient-to-br from-[#16131f] to-[#0f1320] border border-bd rounded-[22px] px-10 py-14 text-center">
            <h2 className="text-[clamp(26px,3.4vw,38px)] mb-3.5">Vamos encher a sua agenda?</h2>
            <p className="text-dim max-w-[540px] mx-auto mb-7">
              Marque uma reunião rápida. A gente mostra, com a sua realidade, quanto você pode recuperar por mês.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <ActionButton action="agendar" className="btn btn-primary">Agendar reunião →</ActionButton>
              <ActionButton action="whatsapp" className="btn btn-wa">Falar no WhatsApp</ActionButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-[620px] mx-auto mt-10 bg-surface border border-bd rounded-[14px] p-8">
            <h3 className="text-[20px] mb-1.5">Prefere que a gente te chame?</h3>
            <p className="text-dim text-[14px] mb-5">
              Deixe seus dados — ao enviar, abrimos uma conversa no WhatsApp já com tudo preenchido.
            </p>
            <form onSubmit={submit} noValidate>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[13px] text-dim mb-1.5 font-medium">Seu nome</label>
                  <input className={inputCls} value={form.nome} onChange={set("nome")} placeholder="Ex.: Marta Souza" required />
                </div>
                <div>
                  <label className="block text-[13px] text-dim mb-1.5 font-medium">Nome da clínica</label>
                  <input className={inputCls} value={form.clinica} onChange={set("clinica")} placeholder="Ex.: Clínica Sorriso" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[13px] text-dim mb-1.5 font-medium">Seu WhatsApp</label>
                  <input className={inputCls} value={form.whats} onChange={set("whats")} placeholder="(00) 00000-0000" type="tel" required />
                </div>
                <div>
                  <label className="block text-[13px] text-dim mb-1.5 font-medium">E-mail (opcional)</label>
                  <input className={inputCls} value={form.email} onChange={set("email")} placeholder="voce@clinica.com.br" type="email" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-[13px] text-dim mb-1.5 font-medium">Como podemos ajudar?</label>
                <textarea
                  className={`${inputCls} min-h-[90px] resize-y`}
                  value={form.msg}
                  onChange={set("msg")}
                  placeholder="Ex.: quero reduzir faltas na minha clínica."
                />
              </div>
              <button type="submit" className="btn btn-primary w-full justify-center">Enviar e abrir WhatsApp →</button>
              <p className="text-[12.5px] text-faint text-center mt-3.5">
                Resposta rápida em horário comercial. Seus dados são usados apenas para este contato.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
