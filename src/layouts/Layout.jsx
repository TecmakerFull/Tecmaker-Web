import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Características", path: "/caracteristicas" },
    { name: "Método OEE", path: "/metodo" },
    { name: "Planes", path: "/planes" },
    { name: "Sobre Nosotros", path: "/nosotros" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src="/img/tecmaker.png" alt="Tecmaker" className="h-9 w-auto" />
          </Link>
          
          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <a href="https://tecmaker.app" className="pill-btn pill-btn-blue text-sm font-semibold">
              Entrar al Sistema
            </a>
          </div>

          {/* Botón Menu Hamburguesa */}
          <button 
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Navegación Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950/95 border-b border-white/10 py-6 px-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-lg font-semibold text-slate-300 hover:text-emerald-400 border-b border-white/5 pb-2 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 sm:hidden">
              <a href="https://tecmaker.app" className="block text-center pill-btn pill-btn-blue font-bold">
                Entrar al Sistema
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="border-t border-white/5 py-8 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-slate-500">Tecmaker 4.0 · Smart Manufacturing OS</p>
        </div>
      </footer>
    </div>
  );
}
