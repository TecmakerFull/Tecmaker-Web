import { Gauge, ShieldCheck, Timer } from "lucide-react";
import AnimatedBlock from "../components/AnimatedBlock";
import SectionTitle from "../components/SectionTitle";

const oeePillars = [
  { icon: Timer, title: "Disponibilidad", text: "Tiempo real de producción vs tiempo programado.", color: "text-blue-400", glow: "shadow-blue-500/20", bg: "bg-blue-500/10" },
  { icon: Gauge, title: "Rendimiento", text: "Velocidad real del proceso vs velocidad ideal.", color: "text-amber-400", glow: "shadow-amber-500/20", bg: "bg-amber-500/10" },
  { icon: ShieldCheck, title: "Calidad", text: "Piezas buenas producidas vs piezas totales.", color: "text-emerald-400", glow: "shadow-emerald-500/20", bg: "bg-emerald-500/10" },
];

function OEETheory() {
  return (
    <section className="bg-slate-950/20 border-b border-white/5 py-14 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="El Metodo Tecmaker: Entendiendo el OEE"
          subtitle="El OEE mide la eficiencia de cada equipo, revela pérdidas ocultas y ayuda a la toma de decisiones, enfocándose en el verdadero problema."
        />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {oeePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <AnimatedBlock key={pillar.title} delay={idx * 0.05} className="h-full">
                <article className="modern-card p-10 h-full flex flex-col items-center text-center">
                  <div className={`mb-6 p-5 rounded-full ${pillar.bg} ${pillar.glow} shadow-lg flex items-center justify-center`}>
                    <Icon className={pillar.color} size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{pillar.text}</p>
                </article>
              </AnimatedBlock>
            );
          })}
        </div>
        <AnimatedBlock delay={0.1}>
          <div className="mt-12 rounded-xl bg-slate-800/40 border border-white/10 p-8 backdrop-blur-md">
            <h3 className="font-bold text-2xl mb-6 text-emerald-100">Las 6 Grandes Pérdidas</h3>
            <p className="text-slate-300 leading-relaxed">
              Fallas de equipo, Setup, Paradas menores, Velocidad reducida, Defectos y Arranque.
            </p>
            <div className="mt-8 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-sm text-emerald-200">
                <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs">Ventaja Tecmaker:</span> algoritmo que identifica y escala automáticamente microparadas sin intervención humana.
              </p>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </section>
  );
}

export default function Method() {
  return (
    <div>
      <OEETheory />
    </div>
  );
}
