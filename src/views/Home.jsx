import { Activity, AlertTriangle, BarChart3, CalendarRange, CheckCircle, Database, Factory, FilePieChart, FileStack, Gauge, Lock, MonitorCog, Send, ShieldCheck, ShieldHalf, Timer, Users } from "lucide-react";
import AnimatedBlock from "../components/AnimatedBlock";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-slate-950 border-b border-white/5 overflow-hidden flex items-center">
      <img
        src="/img/ia/operador.jpg"
        alt="Operador en planta industrial"
        className="absolute inset-0 h-full w-full object-contain md:object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-slate-950/50" />
      <div className="hero-glow" />
      <div className="hero-glow-green" />
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-20 sm:pb-28">
        <div className="max-w-3xl">
          <AnimatedBlock>
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Sistema de Gestion Industrial<br />
              <br />

            </h1>
            <p className="mt-5 text-xl text-slate-300 max-w-2xl font-medium">
              Visualiza el OEE en tiempo real <br />
              OPTIMIZA OPERACIONES<br />
              MAXIMIZA RENTABILIDAD.
            </p>
            <blockquote className="mt-6 border-l-4 border-electric pl-4 italic text-slate-300">
              "Lo que no se define, no se puede medir.<br />
              Lo que no se mide, no se puede mejorar.<br />
              Lo que no se mejora, se degrada siempre."<br />
              — Lord Kelvin.
            </blockquote>
          </AnimatedBlock>
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="bg-slate-900 border-b border-white/5 py-14 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-5">
        <AnimatedBlock>
          <article className="rounded-xl bg-red-500/5 border border-red-500/20 shadow-lg shadow-red-900/10 p-8 h-full backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-red-500 shrink-0" size={32} />
              <h3 className="text-xl font-bold text-red-100">El Problema:   La Fabrica Oculta</h3>
            </div>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Caos del papel, datos tardios, decisiones a ciegas y rentabilidad degradada.
            </p>
          </article>
        </AnimatedBlock>
        <AnimatedBlock delay={0.08}>
          <article className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 shadow-lg shadow-emerald-900/10 p-8 h-full backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-emerald-500 shrink-0" size={32} />
              <h3 className="text-xl font-bold text-emerald-100">La Solucion:   Precision en Tiempo Real</h3>
            </div>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Adquisicion automatizada mediante IoT (ESP32), patrones historicos y desglose exacto de microparadas y rechazos.
            </p>
          </article>
        </AnimatedBlock>
      </div>
    </section>
  );
}

function FeatureEcosystem() {
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
    <section className="bg-slate-900/40 border-b border-white/5 py-14 sm:py-20 px-4">
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
        <div className="mt-12 text-center">
          <Link to="/caracteristicas" className="pill-btn pill-btn-blue text-sm font-bold">Ver todas las características</Link>
        </div>
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
      text: "Coordinación operativa entre producción, calidad y supervisión en tiempo real.",
    },
    {
      src: "/img/ia/Monitoreo.png",
      alt: "Tablero de estado de máquinas en planta",
      title: "Estado de máquinas de la planta",
      text: "Vista general de disponibilidad por máquina para reacción rápida ante desviaciones.",
    },
    {
      src: "/img/ia/gestion.jpg",
      alt: "Equipo tomando decisiones con dashboard industrial",
      title: "Decisiones con dashboard",
      text: "Reuniones de gestión con datos productivos para priorizar acciones de alto impacto.",
    },
  ];

  return (
    <section className="bg-slate-950/20 border-b border-white/5 py-14 sm:py-20 px-4">
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

function MethodTeaser() {
  return (
    <section className="bg-slate-950/20 border-b border-white/5 py-14 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="El OEE como Corazón del Proceso"
          subtitle="Medir la eficiencia no es controlar personas, es descubrir dónde perdemos dinero cada segundo."
        />
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {[
            { icon: Timer, title: "Disponibilidad", color: "text-blue-400" },
            { icon: Gauge, title: "Rendimiento", color: "text-amber-400" },
            { icon: ShieldCheck, title: "Calidad", color: "text-emerald-400" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedBlock key={item.title} delay={idx * 0.05} className="h-full">
                <div className="modern-card p-6 h-full flex items-center gap-4">
                  <Icon className={item.color} size={24} />
                  <span className="font-bold text-white">{item.title}</span>
                </div>
              </AnimatedBlock>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link to="/metodo" className="text-emerald-400 hover:text-emerald-300 font-bold underline underline-offset-8 transition-colors">Aprende la teoría del OEE →</Link>
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
          subtitle="Sabemos lo valiosa que es tu información industrial. Tecmaker utiliza tecnología de defensa en profundidad para mantener tu planta segura."
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
      <FeatureEcosystem />
      <OperationsGallery />
      <MethodTeaser />
      <SecuritySection />
      <FooterCta />
    </div>
  );
}
