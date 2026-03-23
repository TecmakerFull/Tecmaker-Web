import {
  Activity,
  AlertTriangle,
  BarChart3,
  CalendarRange,
  CheckCircle,
  Database,
  Factory,
  FilePieChart,
  FileStack,
  Gauge,
  Lock,
  MonitorCog,
  Send,
  ShieldCheck,
  ShieldHalf,
  Timer,
  Users,
  Network,
  Zap,
  Settings,
  Bell,
  Box,
  FileText,
  Eye,
  TrendingUp,
  Trash2,
  CheckSquare,
  Shield
} from "lucide-react";
import AnimatedBlock from "../components/AnimatedBlock";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-slate-950 border-b border-white/5 overflow-hidden flex flex-col items-center justify-between pt-16 pb-14 sm:pt-24 sm:pb-20 text-center">
      <img
        src="/img/ia/operador.jpg"
        alt="Operador en planta industrial"
        className="absolute inset-0 h-full w-full object-cover opacity-85 mix-blend-luminosity grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/75 to-slate-950" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex-grow flex flex-col justify-center">
        <AnimatedBlock>
          <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 font-bold text-orange-500 text-[10px] uppercase tracking-[0.3em]">
            Digital Transformation MES 4.0
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] text-white tracking-tighter shadow-sm mb-10">
            Monitor de Eficiencia<br />
            <span className="text-slate-400">en Tiempo Real</span>
          </h1>

          <div className="flex flex-col items-center gap-6">
            <p className="text-xl sm:text-3xl text-white max-w-3xl font-black uppercase tracking-tight leading-tight italic">
              CONTROL TOTAL DEL   <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)] bg-orange-500/5 px-3 py-1 rounded-lg border border-orange-500/10">OEE</span>
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50 mb-2" />
            <p className="text-lg sm:text-xl font-bold tracking-[0.15em] flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center">
              <span className="text-emerald-400 uppercase">Optimiza Operaciones</span>
              <span className="hidden sm:block text-slate-700">•</span>
              <span className="text-blue-400 uppercase">Maximiza Rentabilidad</span>
            </p>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="pill-btn pill-btn-blue text-base font-bold px-10 py-5">Solicitar Demo</Link>
            <Link to="/metodo" className="bg-white/5 border border-white/10 text-white rounded-full px-10 py-5 font-bold hover:bg-white/10 transition-all">Saber más</Link>
          </div>
        </AnimatedBlock>
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto px-4 mt-32 sm:mt-16">
        <AnimatedBlock delay={0.6}>
          <blockquote className="text-center italic text-slate-400 text-[10px] sm:text-sm leading-relaxed border-t border-white/10 pt-6">
            "Lo que no se define, no se puede medir. <br className="hidden sm:block" />
            Lo que no se mide, no se puede mejorar. <br className="hidden sm:block" />
            Lo que no se mejora, se degrada siempre."
            <footer className="mt-3 text-orange-500 font-black uppercase tracking-[0.2em] text-[9px] non-italic">— Lord Kelvin</footer>
          </blockquote>
        </AnimatedBlock>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="bg-slate-900 border-b border-white/5 py-14 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <AnimatedBlock>
          <article className="rounded-xl bg-red-500/5 border border-red-500/20 shadow-lg shadow-red-900/10 p-8 h-full backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-red-500 shrink-0" size={32} />
              <h3 className="text-xl font-bold text-red-100 uppercase tracking-tight">El Problema: La Fábrica Oculta</h3>
            </div>
            <p className="mt-4 text-slate-300 leading-relaxed font-medium">
              Caos del papel, datos tardíos, decisiones a ciegas y rentabilidad degradada por ineficiencias invisibles.
            </p>
          </article>
        </AnimatedBlock>
        <AnimatedBlock delay={0.08}>
          <article className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 shadow-lg shadow-emerald-900/10 p-8 h-full backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-emerald-500 shrink-0" size={32} />
              <h3 className="text-xl font-bold text-emerald-100 uppercase tracking-tight">La Solución: Precisión en Tiempo Real</h3>
            </div>
            <p className="mt-4 text-slate-300 leading-relaxed font-medium">
              Adquisición automatizada mediante IoT (ESP32), patrones históricos y desglose exacto de microparadas y rechazos.
            </p>
          </article>
        </AnimatedBlock>
      </div>
    </section>
  );
}

function MESConcept() {
  return (
    <section className="bg-slate-950 border-b border-white/5 py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedBlock>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 font-bold text-blue-400 text-xs uppercase tracking-widest">
              El Cerebro de tu Fábrica
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 leading-tight">
              Tecmaker 4.0: El <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">puente inteligente</span> entre tu oficina y tu planta.
            </h2>
            <div className="space-y-6 text-xl text-slate-300 leading-relaxed">
              <p>
                No somos solo un software; somos el "sistema nervioso" de tu fabricación. Tecmaker actúa como un MES (Manufacturing Execution System) de última generación que conecta tus decisiones estratégicas (ERP) con la realidad de tus máquinas.
              </p>
              <p className="text-lg text-slate-400">
                Mediante conectividad M2M (Machine to Machine), capturamos el pulso de cada ciclo, eliminando los puntos ciegos y transformando la intuición en datos precisos de rendimiento y calidad.
              </p>
            </div>
          </AnimatedBlock>
          <AnimatedBlock delay={0.2}>
            <div className="relative p-1">
              <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-3xl opacity-10 animate-pulse"></div>
              <div className="relative rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-2xl overflow-hidden group">
                <Network className="absolute top-0 right-0 text-blue-500/5 -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-1000" size={400} />
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-center gap-6">
                    <div className="h-16 w-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center">
                      <Zap className="text-blue-400" size={32} />
                    </div>
                    <div className="h-px flex-grow bg-gradient-to-r from-blue-500/50 to-emerald-500/50"></div>
                    <div className="h-16 w-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center">
                      <Settings className="text-emerald-400" size={32} />
                    </div>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-tighter text-slate-500 px-1">
                    <span>Decisión (ERP)</span>
                    <span>Acción (Planta)</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedBlock>
        </div>
      </div>
    </section>
  );
}

function MESCapabilities() {
  const capabilities = [
    {
      icon: BarChart3,
      title: "Control de OEE y Paradas",
      text: "Monitoreo constante para identificar causas raíz. Diferenciamos lo programado de lo imprevisto para que tu eficiencia nunca deje de crecer.",
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      icon: Bell,
      title: "Cadena de Ayuda Activa",
      text: "Sistema de alertas jerárquico. Si un operador detecta un problema, Tecmaker escala la notificación hasta encontrar la solución.",
      color: "text-rose-400",
      bg: "bg-rose-500/10"
    },
    {
      icon: Box,
      title: "Trazabilidad de Punta a Punta",
      text: "Desde el ingreso de materia prima hasta el despacho. Seguimiento detallado, auditable y 100% libre de papeles.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    },
    {
      icon: Settings,
      title: "Mantenimiento Inteligente",
      text: "Gestión de preventivos y correctivos vinculados al uso real de la máquina, no a estimaciones temporales.",
      color: "text-amber-400",
      bg: "bg-amber-400/10"
    },
    {
      icon: FileText,
      title: "Documentación Digital (ISO)",
      text: "Repositorio central de cartas de proceso y manuales. Tu equipo siempre trabaja con la última versión vigente.",
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    },
    {
      icon: Users,
      title: "Gestión del Talento",
      text: "Monitoreo de eficiencia y capacitaciones del personal para una operación más segura y productiva.",
      color: "text-sky-400",
      bg: "bg-sky-400/10"
    }
  ];

  return (
    <section className="bg-slate-950 border-b border-white/5 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Capacidades Blindadas"
          subtitle="Transformamos retos operativos en soluciones tecnológicas robustas para la industria moderna."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedBlock key={idx} delay={idx * 0.05} className="h-full">
                <article className="modern-card p-10 h-full flex flex-col group hover:border-white/20 transition-all">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    <Icon className={item.color} size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">⚡ {item.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm flex-grow">
                    {item.text}
                  </p>
                </article>
              </AnimatedBlock>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BusinessImpact() {
  const benefits = [
    {
      icon: Eye,
      title: "Visibilidad 360°",
      text: "Tomá decisiones basadas en lo que está pasando ahora, no en lo que pasó ayer.",
      color: "text-blue-400"
    },
    {
      icon: TrendingUp,
      title: "Optimización de Recursos",
      text: "Exprimí al máximo tu maquinaria, tu materia prima y tu mano de obra.",
      color: "text-emerald-400"
    },
    {
      icon: Trash2,
      title: "Cero Desperdicio",
      text: "Identificamos las fugas de dinero (scrap e ineficiencias) antes de afectar tu margen.",
      color: "text-rose-400"
    },
    {
      icon: CheckSquare,
      title: "Calidad Garantizada",
      text: "Supervisión continua para asegurar el estándar exigido por tus clientes.",
      color: "text-purple-400"
    },
    {
      icon: Shield,
      title: "Cumplimiento Normativo",
      text: "Trazabilidad completa para auditorías sin estrés.",
      color: "text-sky-400"
    }
  ];

  return (
    <section className="bg-slate-900 px-4 py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[2.5rem] border border-white/10 p-10 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
          <div className="relative z-10 lg:flex gap-20 items-center">
            <div className="lg:w-1/3 mb-12 lg:mb-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Impacto Directo en tu Cuenta de Resultados
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                En la industria B2B, la rentabilidad se gana en los pequeños márgenes de eficiencia.
              </p>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <AnimatedBlock key={idx} delay={idx * 0.1}>
                    <div className="flex items-start gap-4">
                      <Icon className={`${benefit.color} shrink-0 mt-1`} size={32} />
                      <div>
                        <h4 className="text-white text-xl font-bold mb-2 tracking-tight">
                          {benefit.title}
                        </h4>
                        <p className="text-slate-400 text-base leading-relaxed">
                          {benefit.text}
                        </p>
                      </div>
                    </div>
                  </AnimatedBlock>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function SecuritySection() {
  const securityFeatures = [
    {
      icon: ShieldHalf,
      title: "Seguridad de Grado Bancario",
      text: "Protegemos tus datos productivos con los mismos estándares de cifrado que las entidades financieras.",
      color: "text-blue-400",
    },
    {
      icon: Lock,
      title: "Aislamiento Multitenencia",
      text: "Cada empresa opera en una infraestructura lógicamente aislada, garantizando privacidad absoluta.",
      color: "text-emerald-400",
    },
    {
      icon: Database,
      title: "Nube de Alta Disponibilidad",
      text: "Arquitectura híbrida (Cloudflare + Render) con respaldos automáticos y auditoría constante.",
      color: "text-cyan-400",
    },
  ];

  return (
    <section className="bg-slate-950/40 border-b border-white/5 py-14 sm:py-24 px-4 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Tus Datos, Nuestra Prioridad"
          subtitle="Sabemos lo valiosa que es tu información industrial. Tecmaker utiliza tecnología de defensa en profundidad."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <AnimatedBlock key={feature.title} delay={idx * 0.1} className="h-full">
                <div className="p-8 h-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-white/20 transition-all duration-300 flex flex-col">
                  <div className={`mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-slate-900 shadow-inner shrink-0`}>
                    <Icon className={`${feature.color} group-hover:scale-110 transition-transform`} size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">{feature.text}</p>
                </div>
              </AnimatedBlock>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FooterCta() {
  return (
    <section className="bg-slate-950 py-14 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimatedBlock>
          <div className="rounded-3xl bg-slate-800/40 border border-white/10 p-10 sm:p-14 backdrop-blur-md text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">¿Listo para digitalizar tu planta?</h3>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Elimina papel, mide pérdidas ocultas y recupera rentabilidad con datos reales hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto" className="pill-btn pill-btn-blue text-base font-bold">Solicitar Demo Técnica</Link>
              <Link to="/metodo" className="pill-btn pill-btn-green text-base font-bold">Ver Metodología OEE</Link>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <ProblemSolution />
      <MESConcept />
      <MESCapabilities />
      <BusinessImpact />
      <SecuritySection />
      <FooterCta />
    </div>
  );
}
