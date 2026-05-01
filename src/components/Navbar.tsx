"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#conhecimento", label: "Conhecimento" },
  { href: "#faq", label: "Ajuda" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white border-b border-gray-100"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-black tracking-tight text-gray-900">
              Solar<span className="text-orange-500">Z</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
            >
              Login
            </a>
            <a
              href="#contato"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors shadow-sm"
            >
              Comece Agora
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t bg-white py-4 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-2 py-2.5 text-gray-700 hover:text-orange-500 font-medium text-sm"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-3 border-t mt-2 flex flex-col gap-2">
              <a
                href="#"
                className="block text-center text-gray-700 font-medium px-5 py-3 rounded-full text-sm border border-gray-200"
              >
                Login
              </a>
              <a
                href="#contato"
                className="block text-center bg-orange-500 text-white font-semibold px-5 py-3 rounded-full text-sm"
              >
                Comece Agora
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
