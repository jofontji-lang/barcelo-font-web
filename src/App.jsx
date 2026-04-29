import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Globe,
  Home,
  Scale,
  Gavel,
  ShieldCheck,
  BriefcaseBusiness,
  Landmark,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Nuda propiedad",
    text: "Liquidez sin renunciar al uso de la vivienda. Analizamos su caso y diseñamos una solución segura y viable.",
    detail:
      "La nuda propiedad permite vender la titularidad del inmueble conservando el derecho de uso mediante usufructo. Es una alternativa especialmente útil para obtener liquidez, ordenar el patrimonio o resolver situaciones económicas complejas sin abandonar la vivienda.",
    points: ["Estudio de viabilidad", "Valoración de la operación", "Acompañamiento en negociación", "Seguridad jurídica en todo el proceso"],
  },
  {
    icon: ShieldCheck,
    title: "Usufructo",
    text: "Protección patrimonial, derechos de uso y operaciones con garantías para todas las partes.",
    detail:
      "Asesoramos en la constitución, transmisión y extinción del usufructo, protegiendo los derechos de uso y disfrute del inmueble y evitando conflictos futuros entre propietarios, familiares o herederos.",
    points: ["Derecho de uso y disfrute", "Planificación patrimonial", "Protección familiar", "Prevención de conflictos"],
  },
  {
    icon: Gavel,
    title: "Subastas",
    text: "Asesoramiento y acompañamiento antes, durante y después de la subasta para decidir con seguridad.",
    detail:
      "Analizamos riesgos, cargas, valor real del inmueble y estrategia de puja. Nuestro objetivo es que pueda participar en una subasta con información clara y evitando errores costosos.",
    points: ["Análisis previo del inmueble", "Revisión de cargas", "Estrategia de puja", "Acompañamiento posterior"],
  },
  {
    icon: TrendingUp,
    title: "Gestión de deudas y finanzas",
    text: "Negociación, planificación y soluciones para recuperar estabilidad económica.",
    detail:
      "Estudiamos su situación financiera y buscamos soluciones realistas: negociación con acreedores, reestructuración, venta ordenada de activos o alternativas patrimoniales para recuperar margen y tranquilidad.",
    points: ["Diagnóstico financiero", "Negociación con acreedores", "Plan de actuación", "Soluciones patrimoniales"],
  },
  {
    icon: BriefcaseBusiness,
    title: "Asesoría laboral",
    text: "Orientación estratégica ante conflictos laborales, reclamaciones y situaciones delicadas.",
    detail:
      "Le orientamos ante conflictos en la empresa, sanciones, modificaciones de condiciones, reclamaciones salariales y situaciones de presión laboral, con una estrategia clara desde el primer momento.",
    points: ["Conflictos laborales", "Reclamaciones", "Sanciones", "Negociación con empresa"],
  },
  {
    icon: Scale,
    title: "Protección frente a despidos",
    text: "Defensa frente a despidos, negociación y protección de derechos del trabajador.",
    detail:
      "Analizamos la carta de despido, plazos, indemnización y posibles acciones. Buscamos proteger sus derechos y mejorar su posición ante la empresa o en una eventual reclamación.",
    points: ["Revisión de despido", "Cálculo de indemnización", "Negociación", "Reclamación de derechos"],
  },
  {
    icon: Landmark,
    title: "Herencias",
    text: "Gestión de herencias, conflictos entre herederos, trámites y soluciones patrimoniales.",
    detail:
      "Acompañamos en la tramitación de herencias, particiones, conflictos entre herederos, adjudicación de bienes y búsqueda de soluciones cuando existen inmuebles, deudas o desacuerdos familiares.",
    points: ["Tramitación completa", "Conflictos entre herederos", "Inmuebles heredados", "Planificación y reparto"],
  },
];

const Button = ({ children, variant = "gold", className = "", onClick }) => {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] transition duration-300";
  const styles =
    variant === "gold"
      ? "bg-[#d4af37] text-[#071a2f] shadow-[0_18px_40px_rgba(212,175,55,0.25)] hover:-translate-y-1 hover:bg-[#f0c95a]"
      : "border border-white/35 bg-white/5 text-white backdrop-blur hover:-translate-y-1 hover:bg-white hover:text-[#071a2f]";
  return <button onClick={onClick} className={`${base} ${styles} ${className}`}>{children}</button>;
};

export default function BarceloFontWebsite() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-[#f6f1e8] text-[#09192d] antialiased">
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#061426]/80 px-4 backdrop-blur-sm" onClick={() => setSelectedService(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white p-8 shadow-2xl md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelectedService(null)} className="absolute right-6 top-6 rounded-full bg-[#071a2f] p-2 text-white hover:bg-[#d4af37] hover:text-[#071a2f]">
              <X size={20} />
            </button>
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#071a2f] text-[#d4af37]">
              {React.createElement(selectedService.icon, { size: 32 })}
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b08d2c]">Área de especialización</p>
            <h2 className="font-serif text-4xl font-semibold md:text-5xl">{selectedService.title}</h2>
            <p className="mt-6 text-xl leading-relaxed text-[#4d5868]">{selectedService.detail}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {selectedService.points.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-2xl bg-[#f6f1e8] p-4 text-[#09192d]">
                  <CheckCircle2 size={19} className="shrink-0 text-[#b08d2c]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-3xl bg-[#071a2f] p-6 text-white">
              <p className="font-serif text-2xl text-[#d4af37]">¿Quiere analizar su caso?</p>
              <p className="mt-3 text-white/80">Contacte con nosotros y estudiaremos la mejor alternativa.</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href="tel:630104856" className="rounded-full bg-[#d4af37] px-5 py-3 text-center font-semibold text-[#071a2f]">Llamar ahora</a>
                <a href="mailto:jofontji@gmail.com" className="rounded-full border border-white/25 px-5 py-3 text-center font-semibold text-white">Enviar email</a>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <header className="relative min-h-screen overflow-hidden bg-[#061426] text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=80')" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,20,38,0.98),rgba(6,20,38,0.78),rgba(6,20,38,0.35))]" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d4af37]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#d4af37]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="font-serif text-3xl font-semibold tracking-[0.22em]"><span className="text-white">B</span><span className="text-[#d4af37]">F</span></div>
          <div className="hidden items-center gap-9 text-xs font-semibold uppercase tracking-[0.24em] text-white/75 md:flex">
            <a className="hover:text-[#d4af37]" href="#servicios">Servicios</a>
            <a className="hover:text-[#d4af37]" href="#metodo">Método</a>
            <a className="hover:text-[#d4af37]" href="#contacto">Contacto</a>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:630104856" className="group flex items-center gap-2 rounded-full bg-[#d4af37] px-5 py-3 text-sm font-bold text-[#071a2f] shadow-[0_12px_30px_rgba(212,175,55,0.25)] transition hover:-translate-y-0.5 hover:bg-[#f0c95a]">
              <Phone size={17} /> 630 104 856
            </a>
            <a href="tel:687620391" className="group flex items-center gap-2 rounded-full border border-[#d4af37]/80 bg-white/10 px-5 py-3 text-sm font-bold text-[#d4af37] backdrop-blur transition hover:-translate-y-0.5 hover:bg-[#d4af37] hover:text-[#071a2f]">
              <Phone size={17} /> 687 620 391
            </a>
          </div>
        </nav>

        <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-8 md:grid-cols-[1.1fr_0.9fr] md:pb-32 md:pt-12">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">Soluciones inmobiliarias · patrimonio · laboral</p>
            <div className="mb-6 font-serif text-8xl font-bold leading-none md:text-[10rem]"><span className="text-white drop-shadow-2xl">B</span><span className="text-[#d4af37] drop-shadow-2xl">F</span></div>
            <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">Barceló & Font Asociados</h1>
            <p className="mt-8 max-w-2xl text-2xl leading-relaxed text-white/88 md:text-3xl">Convertimos situaciones complejas en soluciones claras, discretas y eficaces.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button>Solicitar asesoramiento <ArrowRight size={18} /></Button>
              <Button variant="outline">Ver servicios</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="relative">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
              <p className="font-serif text-3xl text-[#d4af37]">Asesoramiento integral</p>
              <p className="mt-5 text-lg leading-relaxed text-white/82">Para herencias, nuda propiedad, usufructo, subastas, deudas, finanzas y protección laboral.</p>
              <div className="mt-8 space-y-4">
                {["Estudio personalizado", "Estrategia clara", "Acompañamiento profesional"].map((item) => <div key={item} className="flex items-center gap-3 text-white/90"><CheckCircle2 className="text-[#d4af37]" size={20} /> {item}</div>)}
              </div>
              <div className="mt-9 rounded-2xl bg-[#061426]/70 p-5 text-white/90">
                <div className="flex items-center gap-3"><Phone size={18} className="text-[#d4af37]" /> 630 104 856 · 687 620 391</div>
                <div className="mt-3 flex items-center gap-3"><Mail size={18} className="text-[#d4af37]" /> jofontji@gmail.com</div>
              </div>
            </div>
          </motion.div>
        </section>
      </header>

      <main>
        <section id="servicios" className="relative overflow-hidden bg-[#f6f1e8] px-6 py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(212,175,55,0.16),transparent_28%),radial-gradient(circle_at_90%_30%,rgba(7,26,47,0.10),transparent_30%)]" />

          {/* Imagen lateral premium */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 hidden lg:block w-[42%] overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90')] bg-cover bg-center scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f6f1e8] via-[#f6f1e8]/60 to-transparent" />
            <div className="absolute inset-0 bg-[#071a2f]/20 mix-blend-multiply" />
            <div className="absolute left-10 top-14 bottom-14 w-px bg-[#d4af37]/60" />
          </div>

          <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full border border-[#d4af37]/25" />
          <div className="pointer-events-none absolute left-10 bottom-20 h-40 w-40 rounded-full border border-[#071a2f]/10" />

          <div className="relative mx-auto max-w-7xl lg:pr-[36%]">
            <div className="mb-16 max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#b08d2c]">Servicios</p>
              <h2 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">Áreas de especialización</h2>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[#4d5868]">Soluciones con criterio jurídico, visión práctica y orientación a resultados. Haga clic en cada área para ampliar información.</p>
            </div>

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.button
                    type="button"
                    key={service.title}
                    onClick={() => setSelectedService(service)}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-[1.75rem] bg-white p-8 text-left shadow-[0_24px_70px_rgba(9,25,45,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(9,25,45,0.18)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-[#d4af37]" />
                    <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#071a2f] text-[#d4af37] transition group-hover:scale-110"><Icon size={31} /></div>
                    <h3 className="font-serif text-3xl leading-tight">{service.title}</h3>
                    <p className="mt-5 text-[1.03rem] leading-relaxed text-[#4d5868]">{service.text}</p>
                    <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#b08d2c]">Ver detalle <ArrowRight size={17} /></div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="metodo" className="relative overflow-hidden bg-[#071a2f] px-6 py-24 text-white md:py-32">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2200&q=80')" }} />
          <div className="absolute inset-0 bg-[#071a2f]/80" />
          <div className="relative mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.9fr_1.1fr]">
            <div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">Método</p><h2 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">Primero entender. Después resolver.</h2></div>
            <div className="grid gap-5 sm:grid-cols-3">
              {["Análisis", "Estrategia", "Ejecución"].map((step, i) => <div key={step} className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur"><p className="text-5xl font-serif text-[#d4af37]">0{i + 1}</p><h3 className="mt-8 font-serif text-2xl">{step}</h3><p className="mt-4 text-white/72">Un proceso claro, sin rodeos y centrado en proteger sus intereses.</p></div>)}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32"><div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-8 shadow-[0_30px_100px_rgba(9,25,45,0.12)] md:p-14"><div className="grid gap-12 md:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#b08d2c]">Sobre nosotros</p><h2 className="font-serif text-5xl font-semibold leading-tight md:text-6xl">Experiencia, discreción y soluciones reales</h2></div><div className="space-y-6 text-lg leading-relaxed text-[#4d5868]"><p>Barceló & Font Asociados acompaña a personas y familias en decisiones importantes cuando existen deudas, conflictos patrimoniales, herencias, subastas o problemas laborales.</p><p>Nuestro objetivo es ofrecer una respuesta clara, profesional y orientada a resultados, evitando tecnicismos innecesarios y buscando siempre la vía más eficaz.</p></div></div></div></section>

        <section id="contacto" className="relative overflow-hidden bg-[#061426] px-6 py-24 text-white md:py-32"><div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#d4af37]/20 blur-3xl" /><div className="relative mx-auto max-w-6xl text-center"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">Contacto</p><h2 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">Hablemos de su caso</h2><p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/78">Cuéntenos su situación y analizaremos la mejor alternativa para proteger sus intereses.</p><div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3"><a href="tel:630104856" className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur hover:bg-white/15"><Phone className="mx-auto text-[#d4af37]" /><p className="mt-4 font-serif text-xl">Teléfonos</p><p className="mt-2 text-white/75">630 104 856<br />687 620 391</p></a><a href="mailto:jofontji@gmail.com" className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur hover:bg-white/15"><Mail className="mx-auto text-[#d4af37]" /><p className="mt-4 font-serif text-xl">Email</p><p className="mt-2 text-white/75">jofontji@gmail.com</p></a><div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur"><Globe className="mx-auto text-[#d4af37]" /><p className="mt-4 font-serif text-xl">Web</p><p className="mt-2 text-white/75">barcelo-font-asociados.com</p></div></div></div></section>
      </main>
    </div>
  );
}
