import React, { useState } from "react";
import {
  Gauge,
  ShieldCheck,
  Timer,
  Building2,
  TrendingUp,
  BarChart3,
  FileX,
  HardHat,
  Mic2,
  ZapOff,
  Target,
  ArrowRight,
  Zap,
  CheckCircle2,
  RefreshCcw,
  Play,
  Settings,
  Trash2,
  Clock,
  ChevronRight
} from "lucide-react";
import AnimatedBlock from "../components/AnimatedBlock";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

function MethodHero() {
  return (
    <section className="bg-slate-950 border-b border-white/5 py-24 sm:py-32 px-4 pt-32 lg:pt-48 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedBlock>
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 font-bold text-blue-400 text-xs uppercase tracking-widest">
            Educación Industrial
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 leading-tight">
            Entendiendo el OEE: <br />El <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">lenguaje universal</span> de la eficiencia.
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed font-medium">
            El OEE (Overall Equipment Effectiveness) no es solo un número; es una radiografía en tiempo real de la salud de tu fábrica. Desarrollado originalmente en los años 60 en el Sistema de Producción Toyota, hoy es el estándar mundial para medir la productividad. En Tecmaker, lo hemos digitalizado para que hable el mismo idioma que la gerencia y el piso de planta.
          </p>

          <div className="mt-16 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Timer, title: "Disponibilidad", color: "text-blue-400" },
              { icon: Gauge, title: "Rendimiento", color: "text-amber-400" },
              { icon: CheckCircle2, title: "Calidad", color: "text-emerald-400" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedBlock key={item.title} delay={0.2 + idx * 0.1}>
                  <div className="modern-card p-5 flex items-center justify-center gap-4 bg-white/5 border-white/5 shadow-xl">
                    <Icon className={item.color} size={22} />
                    <span className="font-bold text-white text-xs uppercase tracking-widest">{item.title}</span>
                  </div>
                </AnimatedBlock>
              );
            })}
          </div>
        </AnimatedBlock>
      </div>
    </section >
  );
}

function ForManagement() {
  const points = [
    {
      icon: TrendingUp,
      title: "Visibilidad total y ROI",
      text: "La intuición no es suficiente para escalar. Si no mide el OEE, su planta tiene una 'fábrica oculta': capacidad que se pierde diariamente en microparadas y rechazos no registrados."
    },
    {
      icon: BarChart3,
      title: "Decisiones basadas en datos",
      text: "¿Es un problema de mantenimiento (averías), de procesos (setups) o de calidad (scrap)? El OEE le indica exactamente dónde está perdiendo dinero."
    },
    {
      icon: Zap,
      title: "El impacto del 1%",
      text: "Un aumento del 1% en el OEE genera ahorros drásticos anuales al maximizar la capacidad instalada sin necesidad de comprar nueva maquinaria."
    },
    {
      icon: FileX,
      title: "Adiós al caos del papel",
      text: "Con Tecmaker 4.0, los datos llegan procesados al instante, permitiendo corregir el rumbo en el mismo turno, no al día siguiente."
    }
  ];

  return (
    <section className="bg-slate-900/20 border-b border-white/5 py-24 px-4 overflow-hidden relative">
      <img
        src="/img/ia/gestion.jpg"
        alt="Fondo Gestión"
        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Titulo Centrado */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Building2 className="text-blue-500 shadow-blue-500/20" size={32} />
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tighter italic uppercase">1. Para la Dirección</h2>
          </div>
          <div className="h-1 w-20 bg-blue-500/50 mx-auto rounded-full" />
        </div>

        <div className="lg:flex gap-12 items-stretch">
          {/* Tarjeta de Introducción con Fondo */}
          <div className="lg:w-2/5 mb-10 lg:mb-0">
            <AnimatedBlock className="h-full">
              <div className="relative h-full min-h-[300px] rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl">
                <img 
                  src="/img/ia/gestion.jpg" 
                  alt="Gestión Industrial" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/90" />
                <div className="relative p-8 sm:p-10 min-h-[320px] lg:h-full flex flex-col justify-between">
                  <p className="text-xl sm:text-2xl font-black text-blue-400 leading-tight italic uppercase tracking-tighter">
                    ¿Por qué su empresa necesita el OEE?
                  </p>
                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed italic font-bold">
                    Orientado a dueños, gerentes y líderes de mejora continua que buscan visibilidad total.
                  </p>
                </div>
              </div>
            </AnimatedBlock>
          </div>

          <div className="lg:w-3/5 grid sm:grid-cols-2 gap-8 py-4">
            {points.map((point, idx) => {
              const Icon = point.icon;
              return (
                <AnimatedBlock key={idx} delay={idx * 0.1}>
                  <div className="flex gap-5 group">
                    <div className="shrink-0 p-3.5 rounded-xl bg-blue-500/5 border border-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300 h-fit">
                      <Icon className="text-blue-400 group-hover:scale-110 transition-transform" size={22} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2 text-lg">{point.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{point.text}</p>
                    </div>
                  </div>
                </AnimatedBlock>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ForOperator() {
  const operatorBenefits = [
    {
      icon: Mic2,
      title: "Tu voz importa",
      text: "Al reportar una parada en el Panel del Operador con 2 o 3 toques, documentas con pruebas que la máquina falla, obligando a solucionar la causa raíz."
    },
    {
      icon: ZapOff,
      title: "Menos frustración",
      text: "Se acabaron las planillas de papel engorrosas al final del turno. El IoT registra automáticamente los tiempos para que solo justifiques y continúes."
    },
    {
      icon: Target,
      title: "Metas claras",
      text: "Sabrás exactamente qué espera la empresa de tu máquina y podrás ver tu propio rendimiento en tiempo real."
    }
  ];

  return (
    <section className="bg-slate-950 border-b border-white/5 py-24 px-4 overflow-hidden relative">
      <img
        src="/img/ia/operador.jpg"
        alt="Fondo Operador"
        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Titulo Centrado */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <HardHat className="text-emerald-500 shadow-emerald-500/20" size={32} />
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tighter italic uppercase">2. Para el Operador</h2>
          </div>
          <div className="h-1 w-20 bg-emerald-500/50 mx-auto rounded-full" />
        </div>

        <div className="lg:flex gap-12 items-stretch lg:flex-row-reverse">
          {/* Tarjeta de Introducción con Fondo */}
          <div className="lg:w-2/5 mb-10 lg:mb-0">
            <AnimatedBlock className="h-full">
              <div className="modern-card relative h-full min-h-[300px] rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl">
                <img 
                  src="/img/ia/operador.jpg" 
                  alt="Operador Tecmaker" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/90" />
                <div className="relative p-8 sm:p-10 min-h-[320px] lg:h-full flex flex-col justify-between">
                  <p className="text-xl sm:text-2xl font-black text-emerald-400 leading-tight italic uppercase tracking-tighter">
                    Tu herramienta, no tu jefe.
                  </p>
                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed italic font-bold">
                    Trabajar más inteligente, no más duro. El objetivo es facilitar tu labor diaria.
                  </p>
                </div>
              </div>
            </AnimatedBlock>
          </div>

          <div className="lg:w-3/5 grid sm:grid-cols-3 gap-6 py-4">
            {operatorBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <AnimatedBlock key={idx} delay={idx * 0.1}>
                  <div className="h-full rounded-2xl bg-white/5 border border-white/5 p-8 flex flex-col group hover:border-emerald-500/30 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="text-emerald-400" size={22} />
                    </div>
                    <h4 className="text-white font-bold mb-3 text-base">{benefit.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed flex-grow">{benefit.text}</p>
                  </div>
                </AnimatedBlock>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function AnatomySection() {
  const pillars = [
    {
      title: "Pilar 1: Disponibilidad",
      icon: Timer,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      mainText: "¿Cuánto tiempo real estuvo la máquina produciendo frente al tiempo programado?",
      measure: "Las horas reales de trabajo.",
      losses: [
        { l: "Fallas de equipo:", d: "Roturas o averías inesperadas." },
        { l: "Configuración y Ajustes:", d: "El tiempo que tardas en el Setup." }
      ],
      action: "Al justificar con Semáforo Rojo o Amarillo, el sistema alerta a Mantenimiento."
    },
    {
      title: "Pilar 2: Rendimiento",
      icon: Gauge,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      mainText: "¿A qué velocidad produjo la máquina comparada con su velocidad ideal o teórica?",
      measure: "El ritmo de la producción (Performance).",
      losses: [
        { l: "Microparadas:", d: "Atascos de pocos segundos que el IoT sí registra." },
        { l: "Velocidad reducida:", d: "Desgaste o mala configuración lenta." }
      ],
      action: "Si la máquina debe hacer 100 y hace 80, el software alerta para optimizar el proceso."
    },
    {
      title: "Pilar 3: Calidad",
      icon: CheckCircle2,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      mainText: "¿Cuántas piezas buenas se fabricaron respecto al total producido?",
      measure: "La perfección del producto final.",
      losses: [
        { l: "Defectos de producción:", d: "Piezas malas (Scrap) que van a la basura." },
        { l: "Rechazos de arranque:", d: "Defectos mientras la máquina se ajusta." }
      ],
      action: "Al ingresar el Scrap en Tecmaker, el sistema calcula el impacto financiero real."
    }
  ];

  return (
    <section className="bg-slate-900/40 border-b border-white/5 py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="3. La Anatomía del OEE"
          subtitle="Los 3 Pilares y las 6 Grandes Pérdidas"
        />
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <AnimatedBlock key={idx} delay={idx * 0.1}>
                <div className="h-full rounded-2xl bg-slate-800/40 border border-white/10 p-8 sm:p-10 flex flex-col group hover:border-white/20 transition-all duration-300">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${pillar.bg} flex items-center justify-center mb-8 shadow-2xl transition-all duration-500`}>
                    <Icon className={pillar.color} size={32} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 uppercase tracking-tight">{pillar.title}</h3>
                  <p className="text-slate-300 mb-6 font-medium leading-relaxed italic">
                    {pillar.mainText}
                  </p>
                  <div className="space-y-6 flex-grow">
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Lo que mide:</p>
                      <p className="text-slate-200">{pillar.measure}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Las pérdidas que ataca:</p>
                      <div className="space-y-3">
                        {pillar.losses.map((item, i) => (
                          <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/5 hover:bg-white/[0.07] transition-colors">
                            <p className="text-white font-semibold text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full ${pillar.bg.replace('/10', '')} shadow-[0_0_8px_rgba(255,255,255,0.4)]`} />
                              {item.l.replace(':', '')}
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                              {item.d}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-6 border-t border-white/5">
                      <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Zap size={14} /> La acción en Tecmaker:
                      </p>
                      <p className="text-sm text-slate-300 italic">{pillar.action}</p>
                    </div>
                  </div>
                </div>
              </AnimatedBlock>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OEECalculator() {
  const [availability, setAvailability] = useState(85);
  const [performance, setPerformance] = useState(85);
  const [quality, setQuality] = useState(98);

  const oee = (availability / 100) * (performance / 100) * (quality / 100) * 100;

  const getStatus = (val) => {
    if (val >= 100) return { label: "Producción Perfecta", color: "text-emerald-400", border: "border-emerald-500/50", bg: "bg-emerald-500/10", glow: "emerald", desc: "Producción impecable (Solo piezas buenas, sin paradas, máxima velocidad)." };
    if (val >= 85) return { label: "Clase Mundial (World Class)", color: "text-emerald-500", border: "border-emerald-500/40", bg: "bg-emerald-500/5", glow: "emerald", desc: "Excelente competitividad internacional. Nivel soñado de eficiencia." };
    if (val >= 60) return { label: "Aceptable", color: "text-blue-400", border: "border-blue-500/40", bg: "bg-blue-500/5", glow: "blue", desc: "Resultado aceptable, pero con un amplio margen para ganar dinero eliminado ineficiencias." };
    if (val >= 50) return { label: "Alta Pérdida", color: "text-amber-500", border: "border-amber-500/40", bg: "bg-amber-500/5", glow: "amber", desc: "Atención: La planta está perdiendo gran parte de su capacidad operativa de forma diaria." };
    return { label: "Nivel Crítico", color: "text-red-500", border: "border-red-500/50", bg: "bg-red-500/10", glow: "red", desc: "Urgente: Implementar medidas correctivas inmediatas para detener el desperdicio financiero." };
  };

  const status = getStatus(oee);

  const sliders = [
    { label: "Disponibilidad", val: availability, set: setAvailability, icon: Timer, color: "text-blue-400", accent: "accent-blue-500", bgTrack: "bg-blue-500" },
    { label: "Rendimiento", val: performance, set: setPerformance, icon: Gauge, color: "text-amber-400", accent: "accent-amber-500", bgTrack: "bg-amber-500" },
    { label: "Calidad", val: quality, set: setQuality, icon: CheckCircle2, color: "text-emerald-400", accent: "accent-emerald-500", bgTrack: "bg-emerald-500" }
  ];

  return (
    <section className="bg-slate-950 py-16 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="4. Simulador Interactivo OEE"
          subtitle="Calcula tu eficiencia multiplicando los 3 pilares. Desliza las barras para ver cómo cambia tu estatus."
        />

        <div className="mt-12 modern-card p-8 lg:p-12 relative overflow-hidden backdrop-blur-xl">
          <div className={`absolute inset-0 bg-${status.glow}-500/5 mix-blend-overlay pointer-events-none transition-colors duration-500`}></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Display de Resultado */}
            <div className="text-center group">
              <div className="relative inline-block mb-8">
                <div className={`absolute -inset-10 bg-${status.glow}-500/20 blur-[60px] rounded-full transition-all duration-700 opacity-60`}></div>
                <div className={`relative w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 ${status.border} flex flex-col items-center justify-center transition-all duration-500 bg-slate-950/80 shadow-2xl`}>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">OEE Resultante</p>
                  <h2 className={`text-6xl sm:text-7xl font-black ${status.color} transition-colors duration-500`}>
                    {oee.toFixed(1)}<span className="text-2xl font-light">%</span>
                  </h2>
                </div>
              </div>
              <div className={`px-6 py-3 rounded-xl ${status.bg} border ${status.border} transition-all duration-500 mb-4 shadow-lg`}>
                <p className={`font-black ${status.color} uppercase tracking-tighter text-lg sm:text-xl`}>
                  {status.label}
                </p>
              </div>
              <AnimatedBlock key={status.label} className="max-w-xs mx-auto">
                <p className="text-slate-400 text-xs leading-relaxed italic">
                  {status.desc}
                </p>
              </AnimatedBlock>
            </div>

            {/* Sliders */}
            <div className="space-y-8">
              {sliders.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="group flex flex-col gap-3">
                    <div className="flex justify-between items-center h-6">
                      <label className="text-white font-bold flex items-center gap-3 text-base">
                        <Icon size={20} className={`${s.color} transition-colors`} />
                        {s.label}
                      </label>
                      <span className={`text-xl font-black ${s.color}`}>{s.val}%</span>
                    </div>

                    <div className="relative h-4 flex items-center">
                      <div className="absolute inset-x-0 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${s.bgTrack} transition-all duration-300 opacity-30`}
                          style={{ width: `${s.val}%` }}
                        />
                      </div>

                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={s.val}
                        onChange={(e) => s.set(parseInt(e.target.value))}
                        className={`absolute inset-x-0 h-1.5 bg-transparent rounded-lg appearance-none cursor-pointer ${s.accent} transition-all z-10`}
                        title={s.label}
                      />
                    </div>

                    <div className="flex justify-between text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                      <span>0%</span>
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                  </div>
                );
              })}

              <div className="pt-6 border-t border-white/10 flex flex-col gap-3 bg-white/3 rounded-xl p-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <RefreshCcw size={14} className="animate-spin-slow" />
                  <p className="text-[10px] uppercase font-bold tracking-widest">Fórmula:</p>
                </div>
                <p className="text-lg text-white font-black flex items-center gap-2">
                  <span className="text-blue-400">{availability}%</span>
                  <span className="text-slate-600">×</span>
                  <span className="text-amber-500">{performance}%</span>
                  <span className="text-slate-600">×</span>
                  <span className="text-emerald-400">{quality}%</span>
                </p>
                <p className="text-[9px] text-slate-500 italic">Cálculo digitalizado en tiempo real por Tecmaker.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PracticalExample() {
  const [stopMins, setStopMins] = useState(45);
  const [realCycle, setRealCycle] = useState(65); // Ideal is 60s
  const [scrapUnits, setScrapUnits] = useState(12);

  const DURATION_MINS = 480; // 8 hours
  const IDEAL_CYCLE_SECS = 60;

  // Cálculos
  const operatingMins = DURATION_MINS - stopMins;
  const availability = (operatingMins / DURATION_MINS) * 100;

  const performance = (IDEAL_CYCLE_SECS / realCycle) * 100;

  const totalPieces = Math.floor((operatingMins * 60) / realCycle);
  const goodPieces = Math.max(0, totalPieces - scrapUnits);
  const quality = totalPieces > 0 ? (goodPieces / totalPieces) * 100 : 0;

  const oee = (availability / 100) * (performance / 100) * (quality / 100) * 100;

  return (
    <section className="bg-slate-900/60 py-24 px-4 overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Caso Real: Turno de 8 Horas"
          subtitle="Modifica las variables de planta para ver el impacto matemático exacto en cada pilar."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {/* Controles */}
          <div className="lg:col-span-1 space-y-8 bg-slate-950/50 p-8 rounded-[2rem] border border-white/10 h-fit">
            <h3 className="text-white font-bold text-xl flex items-center gap-3 mb-4">
              <Settings size={24} className="text-blue-500" />
              Variables del Turno
            </h3>

            <div className="space-y-6">
              <div className="group">
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-slate-400 font-bold uppercase tracking-widest">Paradas No Prog.</label>
                  <span className="text-blue-400 font-black">{stopMins} min</span>
                </div>
                <input
                  type="range" min="0" max="180" step="5" value={stopMins}
                  onChange={(e) => setStopMins(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <p className="text-[10px] text-slate-600 mt-1 italic">Impacta en Disponibilidad</p>
              </div>

              <div className="group">
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-slate-400 font-bold uppercase tracking-widest">Ciclo Real (TCI)</label>
                  <span className="text-amber-500 font-black">{realCycle} seg</span>
                </div>
                <input
                  type="range" min="60" max="120" step="1" value={realCycle}
                  onChange={(e) => setRealCycle(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <p className="text-[10px] text-slate-600 mt-1 italic">Ideal: 60s. Impacta en Rendimiento</p>
              </div>

              <div className="group">
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-slate-400 font-bold uppercase tracking-widest">Scrap (Descarte)</label>
                  <span className="text-emerald-400 font-black">{scrapUnits} pzs</span>
                </div>
                <input
                  type="range" min="0" max="100" step="1" value={scrapUnits}
                  onChange={(e) => setScrapUnits(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <p className="text-[10px] text-slate-600 mt-1 italic">Impacta en Calidad</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500 uppercase">Tiempo Total:</span>
                <span className="text-white">480 min (8h)</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500 uppercase">Ciclo Ideal:</span>
                <span className="text-white">60 seg/pz</span>
              </div>
            </div>
          </div>

          {/* Resultados Desglosados */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <div className="modern-card p-6 flex flex-col border-blue-500/20 bg-blue-500/5">
              <div className="flex items-center gap-3 mb-4">
                <Timer className="text-blue-400" size={24} />
                <h4 className="text-white font-bold">Disponibilidad</h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400 text-sm italic">Tiempo de Prod:</span>
                  <span className="text-white font-bold">{operatingMins} min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs uppercase font-bold tracking-widest">Resultado A:</span>
                  <span className="text-2xl font-black text-blue-400">{availability.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            <div className="modern-card p-6 flex flex-col border-amber-500/20 bg-amber-500/5">
              <div className="flex items-center gap-3 mb-4">
                <Gauge className="text-amber-400" size={24} />
                <h4 className="text-white font-bold">Rendimiento</h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400 text-sm italic">Pzs teóricas:</span>
                  <span className="text-white font-bold">{operatingMins} pzs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs uppercase font-bold tracking-widest">Resultado R:</span>
                  <span className="text-2xl font-black text-amber-500">{performance.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            <div className="modern-card p-6 flex flex-col border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-emerald-400" size={24} />
                <h4 className="text-white font-bold">Calidad</h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400 text-sm italic">Pzs Totales:</span>
                  <span className="text-white font-bold">{totalPieces} pzs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs uppercase font-bold tracking-widest">Resultado Q:</span>
                  <span className="text-2xl font-black text-emerald-400">{quality.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-[2rem] border transition-all duration-500 flex flex-col items-center justify-center text-center
              ${oee >= 85 ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]' :
                oee >= 60 ? 'bg-blue-500/10 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]' :
                  'bg-red-500/10 border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.1)]'}`}>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">OEE Final de Turno</h3>
              <h2 className={`text-6xl font-black transition-colors duration-500 
                ${oee >= 85 ? 'text-emerald-400' : oee >= 60 ? 'text-blue-400' : 'text-red-500'}`}>
                {oee.toFixed(1)}%
              </h2>
              <div className="mt-4 flex gap-2">
                <div className={`w-2 h-2 rounded-full animate-ping ${oee >= 85 ? 'bg-emerald-500' : oee >= 60 ? 'bg-blue-500' : 'bg-red-500'}`} />
                <p className="text-[10px] text-white/50 uppercase font-black tracking-tighter">Estado Operativo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-slate-950/40 p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Play size={120} className="text-white" />
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 italic underline decoration-blue-500 underline-offset-8">La conclusión del ejemplo:</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Fíjate cómo una pequeña variación en el ciclo (de 60s a 65s) y una hora de parada puede hundir tu eficiencia por debajo del 70%, aunque sientas que la mañana fue "productiva".
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-emerald-400 font-bold">
                <ChevronRight size={20} />
                <span>Piezas Producidas: {totalPieces}</span>
              </div>
              <div className="flex items-center gap-4 text-blue-400 font-bold">
                <ChevronRight size={20} />
                <span>Piezas Vendibles: {goodPieces}</span>
              </div>
              <div className="flex items-center gap-4 text-red-400 font-bold">
                <Trash2 size={20} />
                <span>Dinero perdido en Scrap: {scrapUnits} pzs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-slate-950 py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <AnimatedBlock delay={0.5}>
          <div className="text-center p-12 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden shadow-2xl shadow-blue-500/20">
            <div className="absolute inset-0 bg-slate-900/10 pointer-events-none"></div>
            <h3 className="text-3xl font-black text-white mb-6 relative z-10 uppercase tracking-tighter">¿Quieres conocer el OEE real de tu planta?</h3>
            <p className="text-blue-100 mb-10 text-xl relative z-10 font-medium font-serif">Digitaliza tu éxito con la tecnología de Tecmaker 4.0.</p>
            <Link to="/contacto" className="inline-flex items-center gap-3 bg-white text-blue-700 px-10 py-5 rounded-full font-black text-lg hover:bg-slate-100 hover:scale-105 transition-all uppercase tracking-widest shadow-xl shadow-black/10 group relative z-10">
              Solicitar Demo Técnica <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </AnimatedBlock>
      </div>
    </section>
  );
}

export default function Method() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <MethodHero />
      <ForManagement />
      <ForOperator />
      <AnatomySection />
      <OEECalculator />
      <PracticalExample />
      <FinalCTA />
    </div>
  );
}
