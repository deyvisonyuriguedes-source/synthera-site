# Synthera AI — Site (Next.js + TypeScript + Tailwind + Framer Motion)

Versão profissional do site, em **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** e **Framer Motion** para as animações.

---

## 1. Pré-requisito

Instale o **Node.js 18 ou superior** (nodejs.org). Para conferir, no terminal:
```bash
node -v
```

## 2. Rodar localmente (3 comandos)

Dentro da pasta `synthera-ai-next`:
```bash
npm install      # instala as dependências (uma vez)
npm run dev      # inicia o site em http://localhost:3000
```
Abra `http://localhost:3000` no navegador.

> A pasta `node_modules` e o `package-lock.json` são gerados automaticamente pelo `npm install` — por isso não vêm no projeto.

## 3. Antes de publicar — troque 3 valores (obrigatório)

Abra `lib/config.ts` e edite:
```ts
export const CONFIG = {
  whatsapp: "5500000000000",                          // 55 + DDD + número, só dígitos
  calendly: "https://calendly.com/sua-conta/reuniao", // seu link de reunião
  email: "contato@synthera.ai",                        // seu e-mail
};
```

## 4. Editar depois (importante)

Procure pelos comentários `⚠️ EDITAR` em `components/Sections.tsx` (seções **Resultados** e **Depoimentos**).
**Não publique caso ou depoimento inventado.** Em clínica, prova social falsa destrói reputação. Preencha só com resultado real, depois do primeiro piloto.

## 5. Publicar (deploy)

### Vercel (recomendado — feito pela criadora do Next.js, grátis)
1. Suba o projeto para um repositório no GitHub.
2. Entre em **vercel.com**, "Add New Project", conecte o repositório.
3. A Vercel detecta o Next.js e publica sozinha. Cada `git push` atualiza o site.
4. Em *Settings → Domains*, conecte seu domínio próprio.

### Alternativa: build estático
```bash
npm run build
npm run start
```
Ou rode em qualquer host que suporte Node.js.

## 6. Domínio e captura de leads
- **Domínio:** registre em registro.br (.com.br) ou Namecheap (.com). Aponte o DNS conforme o painel da Vercel.
- **Leads:** o formulário abre o WhatsApp já preenchido (sem servidor). Para também receber por e-mail, conecte um serviço como Formspree no `onSubmit` de `components/ContactCta.tsx`.

---

## Estrutura do projeto

```
synthera-ai-next/
├── app/
│   ├── layout.tsx        # SEO, fontes (next/font), JSON-LD
│   ├── page.tsx          # monta as seções
│   └── globals.css       # Tailwind + estilos base
├── components/
│   ├── Nav.tsx           # navegação (menu mobile, sombra ao rolar)
│   ├── Hero.tsx          # hero animado
│   ├── WhatsAppDemo.tsx  # demonstração animada (assinatura)
│   ├── Sections.tsx      # Stats, Benefícios, Serviços, Como funciona, Resultados, Depoimentos
│   ├── Faq.tsx           # acordeão animado
│   ├── ContactCta.tsx    # CTA + formulário → WhatsApp
│   ├── Footer.tsx
│   ├── FloatingWhatsApp.tsx
│   ├── ActionButton.tsx  # botões de ação (WhatsApp / agendar / e-mail)
│   └── Reveal.tsx        # animação de entrada ao rolar
├── lib/
│   └── config.ts         # ⬅️ seus dados de contato
├── tailwind.config.ts    # paleta da marca e fontes
├── package.json
└── tsconfig.json
```

## Stack e decisões
- **Next.js App Router** com componentes de servidor por padrão; só o que tem interação (nav, formulário, animações, FAQ) é `"use client"`.
- **Tailwind** com paleta da marca em `tailwind.config.ts` (`accent`, `mint`, `surface` etc.).
- **Framer Motion**: entrada do hero, revelação ao rolar (`Reveal`), loop da demo de WhatsApp e acordeão do FAQ.
- **SEO**: Metadata API + Open Graph + JSON-LD. **Acessibilidade**: foco visível, `aria` no menu e no FAQ, suporte a "reduzir movimento".

Dúvida na instalação? Me chame que eu te guio comando a comando.
