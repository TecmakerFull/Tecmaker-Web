import AnimatedBlock from "../components/AnimatedBlock";
import SectionTitle from "../components/SectionTitle";

function FeaturesTour() {
  return (
    <section className="bg-slate-950 border-b border-white/5 py-14 sm:py-24 px-4 px-4">
      <div className="max-w-7xl mx-auto space-y-24">
        <AnimatedBlock>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2">Planificación MES</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Órdenes de Producción</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <span className="text-white font-semibold underline decoration-emerald-500/30"> Arquitectura compatible con ERP (Enterprise Resource Planning):</span> El ingreso de órdenes de producción se realiza de forma automática y rápida, minimizando el esfuerzo de los planificadores.
                </p>
                <p>
                  La conectividad entre áreas permite que toda la cadena productiva esté preparada para atender cada nueva demanda, logística, producción, calidad y mantenimiento.
                </p>
                <p>
                  Todos los eslabones de la cadena están integrados, minimizando fallos de planificación y aumentando el rendimiento de la operación.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur opacity-30 " />
              <div className="relative modern-card overflow-hidden">
                <img
                  src="/img/Menu ordenes.png"
                  alt="Órdenes de Producción Tecmaker"
                  className="w-full h-full object-cover opacity-95 filter blur-[0.5px] group-hover:blur-none transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
            </div>
          </div>
        </AnimatedBlock>

        <AnimatedBlock>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-30 " />
              <div className="relative modern-card overflow-hidden">
                <img
                  src="/img/Menu Calendario por máquina.png"
                  alt="Calendario por Máquina Tecmaker"
                  className="w-full h-full object-cover opacity-95 filter blur-[0.5px] group-hover:blur-none transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">Gestión de Tiempo</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Calendario por Máquina</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <span className="text-white font-semibold underline decoration-blue-500/30">Exclusión Inteligente de OEE:</span> Carga eventos programados (mantenimientos, almuerzos, cambios de molde) para que el sistema los reste automáticamente del tiempo programado.
                </p>
                <p>
                  Elimina penalizaciones injustas en tus métricas de disponibilidad. El OEE solo mide el tiempo donde tu máquina **realmente debería estar produciendo**.
                </p>
                <p>
                  Visualiza turnos y huecos operativos de un vistazo. Una planificación dinámica permite reaccionar ante imprevistos sin perder la trazabilidad de la eficiencia.
                </p>
              </div>
            </div>
          </div>
        </AnimatedBlock>

        <AnimatedBlock>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-2">Logística MES</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Control de Stock e Inventario</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <span className="text-white font-semibold underline decoration-purple-500/30">Consumo en Tiempo Real:</span> Cada "golpe" de producción descontará automáticamente el material del stock de materia prima y aumentará la cantidad de piezas disponibles terminadas.
                </p>
                <p>
                  Gestión integral de productos y materia prima vinculada directamente a las órdenes de producción. El sistema genera **alertas de faltantes** basadas en lo programado, permitiendo anticiparse a quiebres de stock.
                </p>
                <p>
                  Movimientos, ingresos y ajustes 100% auditables. Cada acción deja una "huella digital" del usuario responsable, garantizando transparencia total en la cadena de suministros.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-rose-500/20 rounded-2xl blur opacity-30 " />
              <div className="relative modern-card overflow-hidden">
                <img
                  src="/img/Menu control de Stock Materia Prima.png"
                  alt="Control de Stock Tecmaker"
                  className="w-full h-full object-cover opacity-95 filter blur-[0.5px] group-hover:blur-none transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
            </div>
          </div>
        </AnimatedBlock>

        <AnimatedBlock>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 to-orange-500/20 rounded-2xl blur opacity-30 " />
              <div className="relative modern-card overflow-hidden">
                <img
                  src="/img/Menu Dashboar OEE.png"
                  alt="Dashboards Dinámicos Tecmaker"
                  className="w-full h-full object-cover opacity-95 filter blur-[0.5px] group-hover:blur-none transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-2">Business Intelligence</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Dashboards e Inteligencia de Datos</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <span className="text-white font-semibold underline decoration-rose-500/30">Análisis Multidimensional:</span> Visualiza las principales pérdidas de eficiencia categorizadas por motivos, máquinas o productos específicos de manera instantánea.
                </p>
                <p>
                  Aplica filtros avanzados para desglosar la operación por líneas de producción, turnos o periodos temporales personalizados. La información fluye sin fricciones desde el piso de planta hasta la gerencia.
                </p>
                <p>
                  Identifica patrones con la **visualización de tendencia mensual** por máquina. Los resúmenes generales te permiten detectar cuellos de botella y priorizar inversiones basadas en datos reales.
                </p>
              </div>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </section>
  );
}

function OperationsGallery() {
  const gallery = [
    {
      src: "/img/ia/Trabajo en equipo en planta industrial.png",
      alt: "Equipo colaborando en planta industrial",
      title: "Trabajo en equipo en planta",
      text: "Coordinacion operativa entre produccion, calidad y supervision en tiempo real.",
    },
    {
      src: "/img/ia/Monitoreo.png",
      alt: "Tablero de estado de maquinas en planta",
      title: "Estado de maquinas de la planta",
      text: "Vista general de disponibilidad por maquina para reaccion rapida ante desviaciones.",
    },
    {
      src: "/img/ia/gestion.jpg",
      alt: "Equipo tomando decisiones con dashboard industrial",
      title: "Decisiones con dashboard",
      text: "Reuniones de gestion con datos productivos para priorizar acciones de alto impacto.",
    },
  ];

  return (
    <section className="bg-slate-900/40 border-b border-white/5 py-14 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Operaciones y decisiones basadas en datos" />
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {gallery.map((item, idx) => (
            <AnimatedBlock key={item.title} delay={idx * 0.05} className="h-full">
              <article className="modern-card overflow-hidden h-full flex flex-col items-center text-center group">
                <div className="relative overflow-hidden w-full h-56">
                  <img src={item.src} alt={item.alt} className="h-full w-full object-cover filter brightness-75 group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              </article>
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Features() {
  return (
    <div>
      <FeaturesTour />
      <OperationsGallery />
    </div>
  );
}
