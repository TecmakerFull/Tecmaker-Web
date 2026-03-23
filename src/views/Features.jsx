import AnimatedBlock from "../components/AnimatedBlock";
import SectionTitle from "../components/SectionTitle";
import { 
  BarChart3, 
  MonitorCog,
  FileStack,
  CalendarRange,
  Send,
  FilePieChart
} from "lucide-react";

function CoreModules() {
  const features = [
    {
      icon: MonitorCog,
      title: "Panel del Operador",
      text: "Semáforo de estado (Verde=Producción, Amarillo=Setup, Rojo=Falla) y 2-3 toques para justificar paradas.",
      color: "text-emerald-400",
      glow: "shadow-emerald-500/20",
      bg: "bg-emerald-500/10",
    },
    {
      icon: FileStack,
      title: "Cartas de Proceso",
      text: "Repositorio digital de PDFs técnicos con control de versiones e historial.",
      color: "text-blue-400",
      glow: "shadow-blue-500/20",
      bg: "bg-blue-500/10",
    },
    {
      icon: CalendarRange,
      title: "PCP Dinámico",
      text: "Calendario visual de turnos para planificar con foco operativo real.",
      color: "text-amber-400",
      glow: "shadow-amber-500/20",
      bg: "bg-amber-500/10",
    },
    {
      icon: Send,
      title: "Alertas Telegram",
      text: "¿La línea crítica se detuvo? Recibe una alerta instantánea en tu celular o reloj inteligente.",
      color: "text-sky-400",
      glow: "shadow-sky-500/20",
      bg: "bg-sky-500/10",
    },
    {
      icon: FilePieChart,
      title: "Reportes Automáticos",
      text: "Envío programado de informes PDF por turno, día o semana directamente a tu correo.",
      color: "text-purple-400",
      glow: "shadow-purple-500/20",
      bg: "bg-purple-500/10",
    },
    {
      icon: BarChart3,
      title: "Dashboard OEE",
      text: "Análisis interactivo de las 6 grandes pérdidas para priorizar acciones de mejora.",
      color: "text-rose-400",
      glow: "shadow-rose-500/20",
      bg: "bg-rose-500/10",
    },
  ];

  return (
    <section className="bg-slate-950 border-b border-white/5 py-24 px-4 pt-32 lg:pt-40">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Módulos Centrales del MES" />
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <AnimatedBlock key={feature.title} delay={idx * 0.05} className="h-full">
                <article className="modern-card p-10 h-full flex flex-col items-center text-center">
                  <div className={`mb-6 p-5 rounded-full ${feature.bg} ${feature.glow} shadow-lg flex items-center justify-center`}>
                    <Icon className={feature.color} size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{feature.text}</p>
                </article>
              </AnimatedBlock>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturesTour() {
  return (
    <section className="bg-slate-900/40 border-b border-white/5 py-14 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-24">
        <AnimatedBlock>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2">Planificación MES</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Órdenes de Producción</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <span className="text-white font-semibold underline decoration-emerald-500/30"> Arquitectura compatible con ERP:</span> El ingreso de órdenes de producción se realiza de forma automática y rápida, minimizando el esfuerzo de los planificadores.
                </p>
                <p>
                  La conectividad entre áreas permite que toda la cadena productiva esté preparada para atender cada nueva demanda: logística, producción, calidad y mantenimiento.
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
                  Gestión integral de productos y materia prima vinculada directamente a las órdenes de producción. El sistema genera **alertas de faltantes** basadas en lo programado.
                </p>
                <p>
                  Movimientos, ingresos y ajustes 100% auditables. Cada acción deja una "huella digital" del usuario responsable, garantizando transparencia total.
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
                  <span className="text-white font-semibold underline decoration-rose-500/30">Análisis Multidimensional:</span> Visualiza las principales pérdidas de eficiencia por motivos, máquinas o productos de manera instantánea.
                </p>
                <p>
                  Aplica filtros avanzados por líneas, turnos o periodos. La información fluye sin fricciones desde el piso de planta hasta la gerencia.
                </p>
                <p>
                  Identifica patrones con la **visualización de tendencia mensual**. Los resúmenes generales te permiten detectar cuellos de botella y priorizar inversiones.
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
    <section className="bg-slate-950 border-b border-white/5 py-14 sm:py-20 px-4">
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
    <div className="bg-slate-950 min-h-screen">
      <CoreModules />
      <FeaturesTour />
      <OperationsGallery />
    </div>
  );
}
