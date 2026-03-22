import AnimatedBlock from "../components/AnimatedBlock";
import SectionTitle from "../components/SectionTitle";
import { Mail, MapPin, Phone } from "lucide-react";

function ContactDetails() {
  const info = [
    { icon: Phone, label: "Teléfono", value: "3415866464", href: "tel:+543415866464" },
    { icon: Mail, label: "Email", value: "temperini@gmail.com", href: "mailto:temperini@gmail.com" },
    { icon: MapPin, label: "Ubicación", value: "Rosario, Santa Fe, Argentina", href: "#" },
  ];

  return (
    <div className="space-y-8">
      {info.map((item, idx) => {
        const Icon = item.icon;
        return (
          <AnimatedBlock key={idx} delay={idx * 0.1}>
            <a 
              href={item.href} 
              className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="p-4 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                <Icon size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{item.label}</p>
                <p className="text-lg font-semibold text-white">{item.value}</p>
              </div>
            </a>
          </AnimatedBlock>
        );
      })}
    </div>
  );
}

function ContactForm() {
  return (
    <section className="bg-slate-950/20 border-b border-white/5 py-14 sm:py-20 px-4 pt-32">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Contacto y Soporte"
          subtitle="¿Interesado en una implementación o demo técnica? Déjanos un mensaje y nos pondremos en contacto contigo lo antes posible."
        />
        
        <div className="mt-16 grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Columna Izquierda: Datos de contacto */}
          <ContactDetails />

          {/* Columna Derecha: Formulario */}
          <AnimatedBlock delay={0.3}>
            <div className="modern-card p-10">
              <form 
                action="https://formspree.io/f/XXXXX" // Reemplazar XXXXX por el ID de Formspree
                method="POST"
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold mb-2 text-white">Nombre y Apellido</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="w-full rounded-lg bg-slate-900 border border-white/10 p-3 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50" 
                      placeholder="Juan Perez" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-2 text-white">Correo Electrónico</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="w-full rounded-lg bg-slate-900 border border-white/10 p-3 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50" 
                      placeholder="juan@ejemplo.com" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2 text-white">Mensaje / Consulta</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="5" 
                    required
                    className="w-full rounded-lg bg-slate-900 border border-white/10 p-3 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50" 
                    placeholder="Contanos brevemente tu necesidad..."
                  ></textarea>
                </div>
                <button type="submit" className="pill-btn pill-btn-blue w-full font-bold text-base mt-2 shadow-lg shadow-blue-500/20">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </AnimatedBlock>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <ContactForm />
    </div>
  );
}
