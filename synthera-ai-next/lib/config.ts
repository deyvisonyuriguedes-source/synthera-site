/* ====================================================================
   CONFIGURAÇÃO — TROQUE OS 3 VALORES PELOS SEUS DADOS REAIS
   ==================================================================== */
export const CONFIG = {
  // WhatsApp: só dígitos, com DDI(55) + DDD + número. Ex.: 5587999998888
  whatsapp: "5500000000000",
  // Link da sua reunião (Calendly, Google Agenda etc.)
  calendly: "https://calendly.com/sua-conta/reuniao",
  // E-mail de contato
  email: "contato@synthera.ai",
};

export const waLink = (texto: string) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
