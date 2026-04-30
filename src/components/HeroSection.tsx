import { ArrowRight, CheckCircle2 } from "lucide-react";

const proof = [
  "2.000+ famílias atendidas",
  "Instalação em 7 dias",
  "25 anos de garantia",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full border border-orange-100">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Energia Solar Residencial e Comercial
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1]">
              Sua conta de luz{" "}
              <span className="text-orange-500">chegando próxima de zero</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              A EDGE instala painéis solares de alta performance na sua casa ou
              empresa. Economize até{" "}
              <strong className="text-gray-900">95% na conta de luz</strong>,
              valorize seu imóvel e contribua com o planeta.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-0.5"
              >
                Simular minha economia
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-4 rounded-full text-base transition-all border border-gray-200 hover:border-gray-300"
              >
                Falar com especialista
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              {proof.map((p) => (
                <div key={p} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  {p}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="/images/solar-residential.jpg"
                alt="Casa com painéis solares EDGE"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl">
                ☀️
              </div>
              <div>
                <div className="text-2xl font-black text-gray-900">95%</div>
                <div className="text-xs text-gray-500">Economia média</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">
                🌱
              </div>
              <div>
                <div className="text-2xl font-black text-gray-900">0 CO₂</div>
                <div className="text-xs text-gray-500">Emissão mensal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
