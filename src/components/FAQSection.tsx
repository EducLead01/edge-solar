"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "O que é a SolarZ?",
    a: "A SolarZ é uma empresa de tecnologia especializada em soluções integradas de monitoramento e gestão para usinas solares voltada para integradores. Oferecemos um ecossistema completo que inclui monitoramento, CRM, gerador de propostas, chat, pagamentos e gestão de pós-vendas.",
  },
  {
    q: "Como funciona o monitoramento?",
    a: "Nosso sistema coleta dados precisos dos painéis solares, permitindo visualizar desempenho, produção de energia, eficiência e alertas em tempo real. Somos compatíveis com mais de 100 portais de monitoramento do mercado.",
  },
  {
    q: "A plataforma é compatível com todos os tipos de usinas?",
    a: "Sim, nossas soluções são flexíveis e compatíveis com diversos tipos de usinas solares, desde pequenas instalações residenciais até grandes parques solares comerciais e industriais.",
  },
  {
    q: "Quais serviços a SolarZ oferece?",
    a: "Oferecemos monitoramento em tempo real, CRM para gestão de clientes, gerador de propostas automatizado, canal de chat integrado ao WhatsApp, ferramenta de pagamentos (SolarZ Pay) e consultoria de gestão em pós-vendas.",
  },
  {
    q: "Quais são os principais benefícios para o integrador?",
    a: "Gestão mais eficiente das usinas e clientes, aumento nas vendas com o CRM e gerador de propostas, redução de custos operacionais, identificação de oportunidades de upsell no pós-venda e acesso a uma comunidade de mais de 6 mil integradores.",
  },
  {
    q: "Como posso começar a usar a SolarZ?",
    a: "Basta entrar em contato com nosso Time Comercial para uma consulta inicial. Nossa equipe vai entender o seu negócio e personalizar a solução ideal para você. O onboarding é guiado e você estará operando em poucos passos.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Dúvidas frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-gray-600">
            Tudo que você precisa saber sobre a plataforma SolarZ.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">
                  {faq.q}
                </span>
                {open === i ? (
                  <Minus className="w-4 h-4 text-orange-500 shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-400 shrink-0" />
                )}
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
