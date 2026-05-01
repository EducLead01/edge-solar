import { Mail, Phone, Globe, Share2, Link2, Play } from "lucide-react";

const socialLinks = [
  { Icon: Globe, label: "Instagram", href: "#" },
  { Icon: Link2, label: "LinkedIn", href: "#" },
  { Icon: Share2, label: "Facebook", href: "#" },
  { Icon: Play, label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-white text-2xl font-black">
                Solar<span className="text-orange-500">Z</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Um ecossistema completo para o integrador solar monitorar, vender
              e encantar clientes com mais eficiência.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Sobre Nós</h4>
            <ul className="space-y-2.5 text-sm">
              {["A SolarZ", "Carreiras", "SolarZ Awards", "Canal de Ética"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Soluções</h4>
            <ul className="space-y-2.5 text-sm">
              {["Monitoramento", "CRM", "Proposta", "Chat", "Pay", "Pós-Vendas"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Conhecimento</h4>
            <ul className="space-y-2.5 text-sm">
              {["Blog", "Treinamentos", "Material Rico", "Podcast", "SolarZ BI"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold text-sm mt-6 mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href="tel:+5511956751469"
                  className="hover:text-orange-400 transition-colors"
                >
                  (11) 95675-1469
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href="mailto:contato@solarz.com.br"
                  className="hover:text-orange-400 transition-colors"
                >
                  contato@solarz.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} SolarZ. Todos os direitos reservados.
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
