"use client";

import { CONFIG, waLink } from "@/lib/config";
import type { ReactNode } from "react";

type Action = "whatsapp" | "agendar" | "email";

const DEFAULT_WA =
  "Olá! Vim pelo site da Synthera AI e quero saber como reduzir as faltas na minha clínica.";

export function ActionButton({
  action,
  children,
  className = "",
  message,
}: {
  action: Action;
  children: ReactNode;
  className?: string;
  message?: string;
}) {
  const handle = () => {
    if (action === "whatsapp") window.open(waLink(message ?? DEFAULT_WA), "_blank");
    if (action === "agendar") window.open(CONFIG.calendly, "_blank");
    if (action === "email") window.location.href = `mailto:${CONFIG.email}`;
  };
  return (
    <button type="button" onClick={handle} className={className}>
      {children}
    </button>
  );
}
