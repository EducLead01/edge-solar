const testimonials = [
  {
    name: "Talles Silvano",
    role: "CEO da Taldi Engenharia",
    avatar: "TS",
    quote:
      "Nós gerimos cerca de 1.000 usinas com auxílio da SolarZ. Ela nos ajuda a automatizar e gerir todo o volume gigante de clientes que a gente tem.",
    badge: "1.000 usinas gerenciadas",
    stars: 5,
  },
  {
    name: "Marcos Fernandes",
    role: "Gestor de Pós-Venda — Eletrobidu",
    avatar: "MF",
    quote:
      "Atualmente, a Eletrobidu chega a fazer 300 vendas por mês! Conseguimos saber se o cliente está gerando energia dentro do desempenho esperado.",
    badge: "300 vendas por mês",
    stars: 5,
  },
  {
    name: "Lucas Fernandes",
    role: "CEO da Azzon Energia",
    avatar: "LF",
    quote:
      "O Summit é extremamente valioso para nós! Conseguimos nos conectar com muita gente do setor e isso tem gerado oportunidades incríveis de negócio.",
    badge: "Rede de integradores",
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
            Integradores que já vendem mais com a SolarZ
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
                <div className="ml-auto shrink-0 bg-orange-50 text-orange-700 text-xs font-semibold px-2 py-1 rounded-full border border-orange-100">
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
