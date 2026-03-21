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
    <section className="bg-slate-950/20 border-b border-white/5 py-14 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Planes y niveles de servicio"
          subtitle="Modelos de suscripción que se adaptan al tamaño y objetivos de su planta industrial. Acordamos el presupuesto según el despliegue requerido."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {pricing.map((plan, idx) => (
            <AnimatedBlock key={plan.name} delay={idx * 0.1} className="h-full">
              <div className="modern-card p-10 flex flex-col h-full items-center text-center">
                <h3 className={`text-2xl font-bold ${plan.color} mb-4`}>{plan.name}</h3>
                <p className="text-white text-sm font-semibold mb-6 uppercase tracking-widest">{plan.market}</p>
                <div className="flex-grow">
                  <p className="text-slate-300 leading-relaxed">{plan.items}</p>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 w-full text-center">
                  <p className="text-xs text-slate-500 lowercase tracking-tight">Presupuesto a medida según requerimiento técnico.</p>
                </div>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Plans() {
  return (
    <div>
      <PlansBanner />
    </div>
  );
}
