import { Link } from "react-router-dom";
import AnimatedBlock from "../components/AnimatedBlock";
import SectionTitle from "../components/SectionTitle";

const pricing = [
  {
    name: "Estándar",
    market: "Talleres pequeños",
    items: "Hasta 3 máquinas, Registro manual, Dashboard básico.",
    color: "text-blue-400",
  },
  {
    name: "Premium",
    market: "Plantas en crecimiento",
    items: "Máquinas ilimitadas, Stock, Cartas de Proceso.",
    color: "text-emerald-400",
  },
  {
    name: "Enterprise",
    market: "Excelencia Operativa",
    items: "IoT Ready, Automatización de Fondo, Análisis Avanzado.",
    color: "text-purple-400",
  },
];

function PlansBanner() {
  return (
    <section className="py-8 sm:py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Planes y niveles de servicio"
          subtitle="Modelos de suscripción que se adaptan al tamaño y objetivos de su planta industrial."
        />
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {pricing.map((plan, idx) => (
            <AnimatedBlock key={plan.name} delay={idx * 0.1} className="h-full">
              <div className="modern-card p-8 flex flex-col h-full items-center text-center">
                <h3 className={`text-xl font-bold ${plan.color} mb-3`}>{plan.name}</h3>
                <p className="text-white text-[10px] font-semibold mb-4 uppercase tracking-widest">{plan.market}</p>
                <div className="flex-grow">
                  <p className="text-slate-300 text-sm leading-relaxed">{plan.items}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10 w-full text-center">
                  <p className="text-[10px] text-slate-500 lowercase tracking-tight">Presupuesto a medida según requerimiento técnico.</p>
                </div>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterCta() {
  return (
    <section className="py-8 sm:py-10 px-4 mt-2">
      <div className="max-w-4xl mx-auto">
        <AnimatedBlock>
          <div className="rounded-2xl bg-slate-800/40 border border-white/10 p-8 sm:p-10 backdrop-blur-md text-center">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">¿Listo para digitalizar tu planta?</h3>
            <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-xl mx-auto italic font-medium">
              Elimina papel, mide pérdidas ocultas y recupera rentabilidad con datos reales hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto" className="pill-btn pill-btn-blue text-sm font-bold px-8 py-3">Solicitar Demo Técnica</Link>
              <Link to="/metodo" className="pill-btn pill-btn-green text-sm font-bold px-8 py-3">Ver Metodología OEE</Link>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </section>
  );
}

export default function Plans() {
  return (
    <div className="bg-slate-950 min-h-screen relative overflow-hidden flex flex-col items-center pt-20 lg:pt-24 pb-12">
      {/* Fondo Decorativo - Panel de Control */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full pointer-events-none">
        <img 
          src="/img/ia/paneldecontrol.jpg" 
          alt="Panel de Control" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <PlansBanner />
        <FooterCta />
      </div>
    </div>
  );
}
