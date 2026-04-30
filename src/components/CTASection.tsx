import { ArrowRight, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-sm font-semibold px-4 py-2 rounded-full border border-orange-500/30 mb-8">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          Simulação 100% Gratuita
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
          Pronto para pagar muito menos{" "}
          <span className="text-orange-400">na sua conta de luz?</span>
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Faça uma simulação gratuita agora e descubra exatamente quanto você
          pode economizar todo mês com energia solar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contato@edgesolar.com.br"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-0.5"
          >
            Simular minha economia
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/5511999999999"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-base transition-all border border-white/20 hover:border-white/40"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Sem compromisso. Resposta em até 24 horas.
        </p>
      </div>
    </section>
  );
}
