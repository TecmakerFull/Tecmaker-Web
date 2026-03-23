import { useState } from "react";
import AnimatedBlock from "../components/AnimatedBlock";
import SectionTitle from "../components/SectionTitle";
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Instagram,
  Linkedin,
  Facebook,
  MessageCircle
} from "lucide-react";

function ContactDetails() {
  const info = [
    { icon: Phone, label: "Teléfono", value: "3415866464", href: "tel:+543415866464" },
    { icon: Mail, label: "Email", value: "enrique.temperini@tecmaker.com.ar", href: "mailto:enrique.temperini@tecmaker.com.ar" },
    { icon: MapPin, label: "Ubicación", value: "Rosario, Santa Fe, Argentina", href: "#" },
  ];

  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/enrique-temperini", color: "hover:text-blue-400" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/enrique.temperini/", color: "hover:text-pink-400" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/Tecmaker.3D", color: "hover:text-blue-600" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/543415866464", color: "hover:text-emerald-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {info.map((item, idx) => {
          const Icon = item.icon;
          return (
            <AnimatedBlock key={idx} delay={idx * 0.1}>
              <a
                href={item.href}
                className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-widest text-slate-500 mb-1">{item.label}</p>
                  <p className="text-base font-medium text-white">{item.value}</p>
                </div>
              </a>
            </AnimatedBlock>
          );
        })}
      </div>

      <AnimatedBlock delay={0.4}>
        <div className="mt-8 p-8 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6 text-center">Conecta con nosotros</p>
          <div className="grid grid-cols-2 gap-4">
            {socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 transition-all duration-300 group ${social.color} hover:bg-white/10 hover:border-white/10`}
                >
                  <div className="shrink-0 text-slate-400 group-hover:text-inherit transition-colors">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">{social.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </AnimatedBlock>
    </div>
  );
}

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkoqlozq", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setIsError(true);
      }
    } catch (err) {
      setIsError(true);
    }
  }

  if (isSubmitted) {
    return (
      <AnimatedBlock className="modern-card p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
        <CheckCircle2 className="text-emerald-500 mb-6" size={64} />
        <h3 className="text-3xl font-bold text-white mb-4">¡Mensaje Enviado!</h3>
        <p className="text-slate-400 text-lg max-w-sm mx-auto">
          Gracias por contactar con Tecmaker. Nos pondremos en comunicación con usted a la brevedad.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-blue-400 hover:text-white underline font-semibold transition-colors"
        >
          Enviar otro mensaje
        </button>
      </AnimatedBlock>
    );
  }

  return (
    <AnimatedBlock delay={0.3}>
      <div className="modern-card p-10 shadow-2xl shadow-blue-500/5">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Nombre y Apellido</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg bg-slate-900 border border-white/10 p-3 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 shadow-inner"
                placeholder="Juan Perez"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg bg-slate-900 border border-white/10 p-3 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 shadow-inner"
                placeholder="juan@ejemplo.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">Teléfono / WhatsApp</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full rounded-lg bg-slate-900 border border-white/10 p-3 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 shadow-inner"
                placeholder="+54 341 0000000"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2 text-white">Empresa</label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full rounded-lg bg-slate-900 border border-white/10 p-3 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 shadow-inner"
                placeholder="Nombre de su industria"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Mensaje / Consulta</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full rounded-lg bg-slate-900 border border-white/10 p-3 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 shadow-inner"
              placeholder="Contanos brevemente tu necesidad..."
            ></textarea>
          </div>
          {isError && (
            <p className="text-red-400 text-sm font-medium">Ocurrió un error al enviar el mensaje. Por favor, reintente en unos instantes.</p>
          )}
          <button type="submit" className="pill-btn pill-btn-blue w-full font-bold text-base mt-2 shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-transform">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </AnimatedBlock>
  );
}

export default function Contact() {
  return (
    <div className="bg-slate-950 min-h-screen relative overflow-hidden">
      {/* Background Industrial Decorativo - Solo a la derecha con desvanecimiento */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full pointer-events-none">
        <img
          src="/img/ia/fondo7.jpg"
          alt="Fondo Industrial"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <section className="py-16 px-4 pt-24 lg:pt-28 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <SectionTitle
            title="Contacto y Soporte"
            subtitle="¿Interesado en una implementación o demo técnica? Déjanos un mensaje y nos pondremos en contacto contigo lo antes posible."
          />

          <div className="mt-10 grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <ContactDetails />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
