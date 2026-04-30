import { Zap, Mail, Phone, Globe, Share2, Link } from "lucide-react";

const socialLinks = [
  { Icon: Globe, label: "Instagram" },
  { Icon: Share2, label: "Facebook" },
  { Icon: Link, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-white text-xl font-black">
                EDGE<span className="text-orange-500">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Energia solar de alta performance para residências e empresas.
              Economize, valorize e contribua com o futuro.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Soluções</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                "Solar Residencial",
                "Solar Comercial",
                "Solar Industrial",
                "Solar Rural",
                "Monitoramento",
                "Manutenção",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                "Sobre nós",
                "Como funciona",
                "Depoimentos",
                "Blog",
                "Parcerias",
                "Trabalhe conosco",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href="tel:+5511999999999"
                  className="hover:text-orange-400 transition-colors"
                >
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href="mailto:contato@edgesolar.com.br"
                  className="hover:text-orange-400 transition-colors"
                >
                  contato@edgesolar.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © 2024 EDGE Solar. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="hover:text-orange-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
