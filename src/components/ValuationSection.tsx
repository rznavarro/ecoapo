import React, { useState } from 'react';
import { AGENCY_INFO } from '../data/realEstateData';
import { Calculator, CheckCircle2, ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { ValuationForm } from '../types';

export const ValuationSection: React.FC = () => {
  const [formData, setFormData] = useState<ValuationForm>({
    propertyType: 'Casa',
    operation: 'Venta',
    zone: 'Zona Sur (Banfield / Lomas)',
    coveredArea: '',
    rooms: '3',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Hola EcoApo, solicito una tasación profesional:\n- Tipo: ${formData.propertyType}\n- Operación: ${formData.operation}\n- Zona: ${formData.zone}\n- Superficie: ${formData.coveredArea || 'A convenir'} m²\n- Ambientes: ${formData.rooms}\n- Nombre: ${formData.name}\n- Teléfono: ${formData.phone}\n- Email: ${formData.email}\n- Observaciones: ${formData.notes || 'Ninguna'}`
    );
    window.open(`https://wa.me/${AGENCY_INFO.phoneRaw}?text=${msg}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section
      id="tasaciones"
      className="py-24 sm:py-32 px-6 sm:px-8 bg-[#141518] text-[#FAF8F5] relative overflow-hidden"
      aria-label="Tasación profesional de inmuebles"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#9D7F63]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Context & Authority */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#9D7F63]" />
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C4A482]">
                  VALORACIÓN CIENTÍFICA
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-white leading-[1.15]">
                Tasá tu propiedad con precisión y rigor técnico.
              </h2>

              <p className="text-xs sm:text-sm text-[#A8A196] font-light leading-relaxed">
                Determinar el valor real de un inmueble de alta gama exige mucho más que un promedio de portales. Aplicamos metodología econométrica comparativa y evaluamos factores de eficiencia sustentable y plusvalía constructiva.
              </p>
            </div>

            {/* Pillars */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#9D7F63] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Peritaje Matriculado</h3>
                  <p className="text-xs text-[#8C867D] font-light mt-0.5">
                    Avalado por {AGENCY_INFO.licenses.caba} y {AGENCY_INFO.licenses.provincia}.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#9D7F63] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Dictamen en 48 Horas</h3>
                  <p className="text-xs text-[#8C867D] font-light mt-0.5">
                    Informe por escrito con análisis de competencia real y absorción de mercado.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#9D7F63] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Sin Costo ni Compromiso</h3>
                  <p className="text-xs text-[#8C867D] font-light mt-0.5">
                    Servicio exclusivo para propietarios en CABA y Zona Sur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Luxury Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1C1E23] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#9D7F63]/20 text-[#C4A482] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-white">Solicitud Recibida</h3>
                  <p className="text-xs text-[#A8A196] max-w-md mx-auto">
                    Se ha generado tu solicitud de tasación. Un perito tasador de EcoApo se pondrá en contacto dentro de las próximas 24 horas hábiles.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-wider hover:border-[#9D7F63] hover:text-[#9D7F63] transition-colors"
                  >
                    Enviar otra tasación
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-[10px] font-mono text-[#9D7F63] uppercase tracking-widest block">
                      FORMULARIO DE TASACIÓN
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-light">
                      Datos de la Propiedad
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Operación */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-[#A8A196] uppercase tracking-wider block">
                        Destino / Operación
                      </label>
                      <select
                        value={formData.operation}
                        onChange={(e) => setFormData({ ...formData, operation: e.target.value })}
                        className="w-full bg-[#121316] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#9D7F63] transition-colors"
                      >
                        <option value="Venta">Venta Patrimonial</option>
                        <option value="Alquiler">Alquiler Tradicional / Corporativo</option>
                        <option value="Desarrollo">Terreno / Desarrollo en Pozo</option>
                      </select>
                    </div>

                    {/* Tipo de Propiedad */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-[#A8A196] uppercase tracking-wider block">
                        Tipo de Propiedad
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full bg-[#121316] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#9D7F63] transition-colors"
                      >
                        <option value="Casa">Casa / Residencia</option>
                        <option value="Departamento">Departamento / Semipiso</option>
                        <option value="Penthouse">Penthouse / Piso Exclusivo</option>
                        <option value="Terreno">Lote en Barrio Cerrado / Terreno</option>
                        <option value="Oficina">Oficina Comercial</option>
                      </select>
                    </div>

                    {/* Zona */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-[#A8A196] uppercase tracking-wider block">
                        Zona / Localidad
                      </label>
                      <select
                        value={formData.zone}
                        onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                        className="w-full bg-[#121316] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#9D7F63] transition-colors"
                      >
                        <option value="Banfield">Banfield (Este / Centro)</option>
                        <option value="Lomas de Zamora">Lomas de Zamora (Las Lomitas)</option>
                        <option value="Canning">Canning (Barrios Cerrados)</option>
                        <option value="Adrogué">Adrogué Residencial</option>
                        <option value="CABA Puerto Madero">CABA - Puerto Madero</option>
                        <option value="CABA Recoleta / Palermo">CABA - Recoleta / Palermo</option>
                        <option value="CABA Parque Patricios">CABA - Parque Patricios / Sur</option>
                        <option value="Otra Zona">Otra Zona en Buenos Aires</option>
                      </select>
                    </div>

                    {/* Superficie Aproximada */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-[#A8A196] uppercase tracking-wider block">
                        Superficie Estimada (m²)
                      </label>
                      <input
                        type="number"
                        placeholder="Ej. 180"
                        value={formData.coveredArea}
                        onChange={(e) => setFormData({ ...formData, coveredArea: e.target.value })}
                        className="w-full bg-[#121316] border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#9D7F63] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-2 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-[#A8A196] uppercase tracking-wider block">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#121316] border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#9D7F63] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-[#A8A196] uppercase tracking-wider block">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+54 9 11 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#121316] border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#9D7F63] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-[#A8A196] uppercase tracking-wider block">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#121316] border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#9D7F63] transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#9D7F63] hover:bg-[#8B6E53] text-white font-bold text-xs uppercase tracking-[0.16em] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#9D7F63]/20 cursor-pointer"
                  >
                    <span>Solicitar Tasación Profesional Inmediata</span>
                    <ArrowRight className="w-4 h-4" />
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
