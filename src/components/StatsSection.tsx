const stats = [
  { value: "6.000+", label: "Integradores na plataforma", icon: "🏢" },
  { value: "1.000+", label: "Usinas monitoradas", icon: "☀️" },
  { value: "300", label: "Vendas/mês (Eletrobidu)", icon: "📈" },
  { value: "10.000+", label: "Inscritos no newsletter", icon: "📩" },
];

export function StatsSection() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center text-white">
              <div className="text-4xl mb-3">{s.icon}</div>
              <div className="text-3xl lg:text-4xl font-black mb-1 text-orange-400">
                {s.value}
              </div>
              <div className="text-sm lg:text-base text-gray-400 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
