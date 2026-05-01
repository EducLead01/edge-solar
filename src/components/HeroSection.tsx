import { ArrowRight } from "lucide-react";

const partners = ["Taldi", "Azzon", "TopSun", "Eletrobidu", "Rudnik"];

export function HeroSection() {
  return (
    <section className="relative bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full border border-orange-100 mb-8">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Junte-se aos mais de 6 mil integradores que confiam na SolarZ
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
            Um ecossistema para o{" "}
            <span className="text-orange-500">integrador solar</span>{" "}
            vender mais
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Integrador, seu negócio não precisa de muitas ferramentas.{" "}
            <strong className="text-gray-900">Seu negócio precisa da SolarZ!</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-0.5"
            >
              Comece Agora
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="border-t border-gray-100 pt-10">
            <p className="text-sm text-gray-400 font-medium mb-6 uppercase tracking-wider">
              Empresas que já vendem mais com a SolarZ
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {partners.map((p) => (
                <span
                  key={p}
                  className="text-gray-400 font-bold text-lg tracking-tight hover:text-gray-600 transition-colors"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
