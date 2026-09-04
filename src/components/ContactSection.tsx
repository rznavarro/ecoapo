import React, { useState } from 'react';
import { AGENCY_INFO } from '../data/realEstateData';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      `Consulta web EcoApo:\n- Nombre: ${name}\n- Tel: ${phone}\n- Email: ${email}\n- Mensaje: ${message}`
    );
    window.open(`https://wa.me/${AGENCY_INFO.phoneRaw}?text=${encoded}`, '_blank');
    setSent(true);
  };

  return (
    <section
      id="contacto"
      className="py-24 sm:py-32 px-6 sm:px-8 bg-[#FAF8F5] border-b border-[#ECE6DD]"
      aria-label="Contacto y Sedes de EcoApo"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#9D7F63]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9D7F63]">
              ATENCIÓN PERSONALIZADA
            </span>
            <span className="w-6 h-[1px] bg-[#9D7F63]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#141518] tracking-tight">
            Sedes Oficiales & Canales Directos
          </h2>

          <p className="text-xs sm:text-sm text-[#757068] font-light leading-relaxed">
            Coordiná una entrevista privada en nuestras oficinas de Banfield o CABA, o comunicate de forma directa con nuestros corredores inmobiliarios matriculados.
          </p>
        </div>

        {/* 2 Column Layout: HQ Cards & Direct Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: 2 Physical Headquarters Cards */}
          <div className="lg:col-span-6 space-y-6">
            {AGENCY_INFO.headquarters.map((hq, idx) => (
              <div
                key={idx}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E8E2D8] shadow-sm hover:border-[#9D7F63] transition-colors space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9D7F63]">
                    SEDE 0{idx + 1}
                  </span>
                  <span className="text-xs text-[#757068]">{hq.role}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#141518] font-normal">
                  {hq.title}
                </h3>

                <div className="space-y-2 text-xs text-[#55524D]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#9D7F63] shrink-0 mt-0.5" />
                    <span>{hq.address} — {hq.province} (CP {hq.zip})</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#9D7F63] shrink-0" />
                    <span>Horario de atención: {AGENCY_INFO.hours}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(hq.address + ', ' + hq.province)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="jem-link text-xs text-[#141518] hover:text-[#9D7F63]"
                  >
                    <span>Ver en Google Maps</span>
                  </a>
                </div>
              </div>
            ))}

            {/* Direct Contact Pill */}
            <div className="bg-[#F3ECE4] p-6 rounded-2xl border border-[#E0D5C8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-[#141518] uppercase tracking-wider">
                  Línea Telefónica & WhatsApp
                </p>
                <p className="text-sm font-serif text-[#141518] mt-0.5">
                  {AGENCY_INFO.phone}
                </p>
              </div>
              <a
                href={`https://wa.me/${AGENCY_INFO.phoneRaw}?text=${encodeURIComponent('Hola EcoApo, quisiera consultar por asesoramiento inmobiliario.')}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20BE5C] text-white text-xs font-semibold uppercase tracking-wider rounded-xl flex items-center gap-2 transition-colors shrink-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Directo</span>
              </a>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-6">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E2D8] shadow-sm">
              <h3 className="font-serif text-2xl text-[#141518] font-normal mb-2">
                Envianos tu Consulta
              </h3>
              <p className="text-xs text-[#757068] mb-6">
                Te responderemos a la brevedad con la confidencialidad que tu patrimonio amerita.
              </p>

              {sent ? (
                <div className="py-10 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#2C5E3B] mx-auto" />
                  <h4 className="font-serif text-xl text-[#141518]">Mensaje Enviado</h4>
                  <p className="text-xs text-[#757068]">
                    Tu consulta fue remitida exitosamente al equipo comercial de EcoApo.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-3 text-xs text-[#9D7F63] underline uppercase tracking-wider cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-[#757068] uppercase tracking-wider block">
                      Nombre & Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre completo"
                      className="w-full bg-[#FAF8F5] border border-[#DDD5CA] rounded-xl px-4 py-3 text-xs text-[#141518] focus:outline-none focus:border-[#9D7F63]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-[#757068] uppercase tracking-wider block">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ejemplo@correo.com"
                        className="w-full bg-[#FAF8F5] border border-[#DDD5CA] rounded-xl px-4 py-3 text-xs text-[#141518] focus:outline-none focus:border-[#9D7F63]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-[#757068] uppercase tracking-wider block">
                        Teléfono / Celular *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+54 9 11 ..."
                        className="w-full bg-[#FAF8F5] border border-[#DDD5CA] rounded-xl px-4 py-3 text-xs text-[#141518] focus:outline-none focus:border-[#9D7F63]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-[#757068] uppercase tracking-wider block">
                      Mensaje o Detalle de Búsqueda / Venta *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describí tu requerimiento (tipo de propiedad, presupuesto o consulta específica)..."
                      className="w-full bg-[#FAF8F5] border border-[#DDD5CA] rounded-xl px-4 py-3 text-xs text-[#141518] focus:outline-none focus:border-[#9D7F63] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#141518] hover:bg-[#9D7F63] text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Enviar Mensaje a Asesor</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
