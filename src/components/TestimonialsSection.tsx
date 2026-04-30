const testimonials = [
  {
    name: "Maria Santos",
    role: "Moradora em São Paulo, SP",
    avatar: "MS",
    quote:
      "Minha conta de luz caiu de R$850 para R$48 por mês. Não acreditei quando recebi a primeira fatura depois da instalação. A equipe da EDGE foi incrível do começo ao fim!",
    badge: "Economizando R$802/mês",
    stars: 5,
  },
  {
    name: "João Ferreira",
    role: "Empresário em Belo Horizonte, MG",
    avatar: "JF",
    quote:
      "Instalamos na nossa empresa e o retorno veio muito antes do esperado. Em 3 anos já pagou tudo. Agora é economia pura. Indico a EDGE para todo mundo.",
    badge: "ROI em menos de 3 anos",
    stars: 5,
  },
  {
    name: "Ana Lima",
    role: "Proprietária de chácara em Campinas, SP",
    avatar: "AL",
    quote:
      "Melhor investimento que já fiz para minha chácara. Sem conta de luz, sem preocupação. O app de monitoramento é fantástico, acompanho tudo em tempo real.",
    badge: "Zero conta de luz",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4">
            Quem usa a EDGE não para de economizar
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-orange-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs truncate">{t.role}</div>
                </div>
                <div className="ml-auto shrink-0 bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded-full border border-green-100">
                  {t.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
