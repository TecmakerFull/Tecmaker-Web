import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/">
            <img src="/img/tecmaker.png" alt="Tecmaker" className="h-9 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/caracteristicas" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Características</Link>
            <Link to="/metodo" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Método OEE</Link>
            <Link to="/planes" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Planes</Link>
            <Link to="/nosotros" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sobre Nosotros</Link>
            <Link to="/contacto" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Contacto</Link>
          </nav>
        </div>
        <a href="https://tecmaker.app" className="pill-btn pill-btn-blue text-sm font-semibold">
          Entrar al Sistema
        </a>
      </div>
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
