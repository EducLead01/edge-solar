import { Zap, TrendingUp, Leaf, Home, Headphones, Timer } from "lucide-react";
import type { ElementType } from "react";

interface Benefit {
  icon: ElementType;
  title: string;
  description: string;
  color: string;
  bg: string;
}

const benefits: Benefit[] = [
  {
    icon: Zap,
    title: "Economia de até 95%",
    description:
      "Reduza drasticamente sua conta de luz todo mês e use essa economia para o que realmente importa.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Home,
    title: "Valoriza seu Imóvel",
    description:
      "Imóveis com energia solar valem até 8% a mais no mercado. É um investimento que se paga sozinho.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Leaf,
    title: "Energia 100% Limpa",
    description:
      "Produza sua própria energia sem emitir CO₂. Contribua com o meio ambiente para as próximas gerações.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: TrendingUp,
    title: "ROI em até 4 anos",
    description:
      "O sistema se paga em média entre 3 e 5 anos. Depois disso, é economia pura por décadas.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Headphones,
    title: "Suporte Completo",
    description:
      "Nossa equipe está disponível para monitorar e manter seu sistema funcionando perfeitamente.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Timer,
    title: "Instalação em 7 dias",
    description:
      "Do projeto à instalação em até 7 dias úteis. Rápido, seguro e sem transtornos para você.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Por que EDGE?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4">
            Vantagens que transformam sua vida
          </h2>
          <p className="text-gray-600 text-lg">
            Mais do que painéis solares — entregamos economia real, segurança e
            tranquilidade para você e sua família.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-orange-100 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-12 h-12 ${b.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <b.icon className={`w-6 h-6 ${b.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
