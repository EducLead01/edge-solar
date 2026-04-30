const stats = [
  { value: "2.000+", label: "Clientes Atendidos", icon: "👨‍👩‍👧‍👦" },
  { value: "95%", label: "Economia Média", icon: "💰" },
  { value: "25 anos", label: "Garantia dos Painéis", icon: "🛡️" },
  { value: "< 5 anos", label: "Retorno do Investimento", icon: "📈" },
];

export function StatsSection() {
  return (
    <section className="bg-orange-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center text-white">
              <div className="text-4xl mb-3">{s.icon}</div>
              <div className="text-3xl lg:text-4xl font-black mb-1">{s.value}</div>
              <div className="text-sm lg:text-base text-orange-100 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
