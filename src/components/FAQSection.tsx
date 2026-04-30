"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Quanto vou economizar na conta de luz?",
    a: "A economia média dos nossos clientes é de 85% a 95% na conta de luz. O valor exato depende do seu consumo, localização e tamanho do sistema. Faça uma simulação gratuita para saber exatamente quanto você vai economizar.",
  },
  {
    q: "Quanto tempo leva a instalação?",
    a: "O processo completo leva, em média, entre 7 e 15 dias úteis após a aprovação do projeto. A instalação em si é realizada em 1 a 2 dias, sem quebrar nada ou causar transtornos.",
  },
  {
    q: "E nos dias sem sol ou chuvosos?",
    a: "Seu sistema é conectado à rede elétrica (on-grid). Nos dias sem sol, você consome energia da rede e credita a energia produzida nos dias ensolarados para compensar. No Brasil, há sol mais de 300 dias por ano.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Oferecemos financiamento em até 84 meses com taxas acessíveis, além de pagamento à vista com desconto. Em muitos casos, a parcela do financiamento é menor que a sua conta de luz atual.",
  },
  {
    q: "Os painéis têm garantia?",
    a: "Sim! Os painéis têm garantia de 25 anos de performance e os inversores têm garantia de 10 anos. Nossa empresa oferece suporte técnico completo durante toda a vida útil do sistema.",
  },
  {
    q: "Preciso ser proprietário do imóvel?",
    a: "O ideal é ser proprietário, mas também atendemos locatários com autorização do proprietário e condomínios. Entre em contato para analisarmos a sua situação específica.",
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
            Tudo que você precisa saber antes de instalar energia solar.
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
