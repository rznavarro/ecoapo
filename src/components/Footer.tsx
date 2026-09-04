import React from 'react';
import { AGENCY_INFO } from '../data/realEstateData';
import { Instagram, Facebook, Youtube, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0E0F12] text-[#A8A196] pt-20 pb-12 px-6 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white uppercase">
                ECOAPO
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9D7F63]" />
            </div>
            <p className="text-xs text-[#8C867D] leading-relaxed max-w-sm">
              Inmobiliaria y desarrollos de alta gama con foco en eficiencia energética y arquitectura sustentable en Buenos Aires.
            </p>
            <div className="pt-2 text-[11px] font-mono text-[#9D7F63]">
              {AGENCY_INFO.licenses.caba} • {AGENCY_INFO.licenses.provincia}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white">
              NAVEGACIÓN
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#propiedades" className="hover:text-white transition-colors">Colección de Propiedades</a>
              </li>
              <li>
                <a href="#quienes-somos" className="hover:text-white transition-colors">Filosofía & Equipo</a>
              </li>
              <li>
                <a href="#zonas" className="hover:text-white transition-colors">Zonas: CABA & Zona Sur</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">Servicios Inmobiliarios</a>
              </li>
              <li>
                <a href="#tasaciones" className="hover:text-white transition-colors">Tasación Profesional</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white">
              SEDES & ATENCIÓN
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9D7F63] shrink-0 mt-0.5" />
                <span><strong>Sede Zona Sur:</strong> Maipú 719, Banfield, Prov. de Buenos Aires</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9D7F63] shrink-0 mt-0.5" />
                <span><strong>Sede CABA:</strong> Luna 24, Parque Patricios, Distrito Tecnológico</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#9D7F63] shrink-0" />
                <a href={`tel:${AGENCY_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {AGENCY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#9D7F63] shrink-0" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white transition-colors">
                  {AGENCY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal, Socials, Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#757068]">
          <div className="flex flex-wrap items-center gap-6">
            <span>© {new Date().getFullYear()} EcoApo. Todos los derechos reservados.</span>
            <a href="#contacto" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#contacto" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#contacto" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>

          <div className="flex items-center gap-6">
            {/* Social Icons in Clean Outline */}
            <div className="flex items-center gap-4">
              <a
                href={AGENCY_INFO.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-white/15 text-[#A8A196] hover:text-white hover:border-[#9D7F63] transition-colors"
                aria-label="Instagram de EcoApo"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={AGENCY_INFO.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-white/15 text-[#A8A196] hover:text-white hover:border-[#9D7F63] transition-colors"
                aria-label="Facebook de EcoApo"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={AGENCY_INFO.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-white/15 text-[#A8A196] hover:text-white hover:border-[#9D7F63] transition-colors"
                aria-label="YouTube de EcoApo"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-white/15 text-[#A8A196] hover:text-white hover:border-white transition-colors cursor-pointer"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
