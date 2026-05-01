import {
  Activity,
  Users,
  FileText,
  MessageCircle,
  CreditCard,
  TrendingUp,
} from "lucide-react";
import type { ElementType } from "react";

interface Solution {
  icon: ElementType;
  title: string;
  description: string;
  color: string;
  bg: string;
}

const solutions: Solution[] = [
  {
    icon: Activity,
    title: "Monitoramento",
    description:
      "Acompanhe os status das suas usinas solares e tenha total controle sobre desempenho, eficiência e controle financeiro.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Users,
    title: "CRM",
    description:
      "Gerencie as atividades, visualize o progresso das negociações e personalize propostas dentro da tecnologia de gestão de cliente.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: FileText,
    title: "Gerador de Propostas",
    description:
      "Dimensione e acompanhe seus projetos solares com etapas automatizadas e propostas personalizadas.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: MessageCircle,
    title: "Chat",
    description:
      "Otimize tempo e resultado acompanhando todas as mensagens enviadas através de um canal exclusivo no WhatsApp.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: CreditCard,
    title: "SolarZ Pay",
    description:
      "Uma ferramenta de pagamento completa para receber dos clientes com total integração ao monitoramento.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: TrendingUp,
    title: "Gestão em Pós-Vendas",
    description:
      "Transforme seu pós-vendas em um dos braços de geração de receita mais importante da sua companhia.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
];

export function BenefitsSection() {
  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Soluções
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4">
            Tudo que o integrador precisa em um só lugar
          </h2>
          <p className="text-gray-600 text-lg">
            Da prospecção ao pós-venda, a SolarZ oferece o ecossistema completo
            para você vender mais e gerenciar melhor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-orange-100 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <s.icon className={`w-6 h-6 ${s.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
