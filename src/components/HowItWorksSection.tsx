const steps = [
  {
    number: "01",
    title: "Preencha o formulário",
    description:
      "Entre em contato com o Time Comercial para uma consulta inicial e personalização da solução adequada ao seu negócio.",
    icon: "📋",
  },
  {
    number: "02",
    title: "Faça o primeiro acesso",
    description:
      "Receba suas credenciais e acesse a plataforma SolarZ. Nossa equipe estará disponível para guiar você no onboarding.",
    icon: "🔑",
  },
  {
    number: "03",
    title: "Cadastre as suas usinas",
    description:
      "Adicione as usinas dos seus clientes ao sistema. Compatível com mais de 100 portais de monitoramento.",
    icon: "☀️",
  },
  {
    number: "04",
    title: "Venda e gerencie mais",
    description:
      "Use o CRM, o gerador de propostas, o chat e o pós-venda para escalar suas vendas e encantar seus clientes.",
    icon: "🚀",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Como começar
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4">
            Comece a vender mais em 4 passos
          </h2>
          <p className="text-gray-600 text-lg">
            Simples, rápido e sem burocracia. Em minutos você já está operando
            com o ecossistema completo da SolarZ.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] right-0 h-0.5 bg-orange-100 z-0" />
              )}
              <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center z-10">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-orange-500 font-black text-xs mb-2 tracking-widest">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
