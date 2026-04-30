const steps = [
  {
    number: "01",
    title: "Solicite a simulação",
    description:
      "Preencha nosso formulário ou entre em contato. Em minutos você descobre exatamente quanto vai economizar.",
    icon: "📱",
  },
  {
    number: "02",
    title: "Projeto personalizado",
    description:
      "Nossa equipe de engenheiros cria um projeto 100% personalizado para o seu telhado e consumo.",
    icon: "📐",
  },
  {
    number: "03",
    title: "Instalação rápida",
    description:
      "Instalamos em até 7 dias úteis com zero sujeira e zero transtorno para você e sua família.",
    icon: "🔧",
  },
  {
    number: "04",
    title: "Comece a economizar",
    description:
      "Sua próxima conta de luz já será menor. Acompanhe sua geração em tempo real pelo app.",
    icon: "⚡",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Simples assim
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4">
            Como funciona
          </h2>
          <p className="text-gray-600 text-lg">
            Do primeiro contato até começar a economizar — um processo simples,
            rápido e sem burocracia.
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
