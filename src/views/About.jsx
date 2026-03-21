import AnimatedBlock from "../components/AnimatedBlock";
import SectionTitle from "../components/SectionTitle";
import { Award, Code, Cpu, LineChart } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Cpu,
      title: "Trayectoria Industrial",
      text: "Más de 10 años liderando procesos de producción, automatización y control de calidad en plantas de plásticos.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      glow: "shadow-blue-500/20"
    },
    {
      icon: LineChart,
      title: "Metodologías Lean",
      text: "Experto en implementación de Lean Manufacturing, análisis de datos y mejora continua operativa.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      glow: "shadow-emerald-500/20"
    },
    {
      icon: Award,
      title: "Liderazgo Real",
      text: "Gestión directa de equipos operativos, estandarización de procesos y auditoría de clase mundial.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      glow: "shadow-amber-500/20"
    },
    {
      icon: Code,
      title: "Transformación 4.0",
      text: "Integración de software Full Stack (React, FastAPI) para cerrar la brecha entre el piso y la gerencia.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      glow: "shadow-purple-500/20"
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="py-20 px-4 pt-32">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Tecmaker 4.0 no nació en un escritorio, sino en la línea de producción."
            subtitle="Conoce la visión técnica y operativa detrás de la transformación digital."
          />
          
          <div className="mt-12 grid lg:grid-cols-[300px_1fr] gap-12 items-center mb-16">
            {/* Foto Reducida */}
            <AnimatedBlock>
              <div className="relative group max-w-[280px] mx-auto lg:mx-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
                  <img 
                    src="/img/perfil Enrique.jpg" 
                    alt="Enrique Temperini - Fundador de Tecmaker" 
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 object-cover aspect-square"
                  />
                  <div className="p-4 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent absolute bottom-0 w-full">
                    <h3 className="text-lg font-bold text-white">Enrique Temperini</h3>
                    <p className="text-emerald-400 font-semibold tracking-wider text-[10px] uppercase">Fundador & Full Stack Dev</p>
                  </div>
                </div>
              </div>
            </AnimatedBlock>

            {/* Texto de Perfil */}
            <div className="space-y-6 text-slate-300">
              <h3 className="text-2xl font-bold text-white leading-tight">
                Técnico especializado en procesos industriales con <span className="text-emerald-400">10 años de experiencia</span> directa en planta.
              </h3>
              
              <p className="text-lg leading-relaxed text-slate-400">
                Experto en la implementación de **Lean Manufacturing**, análisis de datos y optimización de procesos operativos. Mi trayectoria se ha forjado trabajando directamente en el piso de planta, liderando equipos hacia la mejora continua.
              </p>

              <p className="text-lg leading-relaxed text-slate-400">
                Actualmente, mi enfoque es la **Transformación Digital 4.0**, integrando soluciones tecnológicas robustas para optimizar la rentabilidad industrial mediante datos en tiempo real.
              </p>
            </div>
          </div>

          {/* Tarjetas Grandes Horizontalmente a lo largo */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedBlock key={idx} delay={0.1 + idx * 0.1} className="h-full">
                  <article className="modern-card p-8 h-full flex flex-col items-center text-center group">
                    <div className={`mb-6 p-4 rounded-full ${item.bg} ${item.glow} shadow-lg transition-transform group-hover:scale-110`}>
                      <Icon className={item.color} size={32} />
                    </div>
                    <h4 className="text-white font-bold text-base mb-3">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.text}</p>
                  </article>
                </AnimatedBlock>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
