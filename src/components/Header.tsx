import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { AGENCY_INFO } from '../data/realEstateData';

interface HeaderProps {
  onOpenValuation: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenValuation, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when editorial full screen menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Colección de Propiedades', href: '#propiedades', number: '01' },
    { label: 'Quiénes Somos', href: '#quienes-somos', number: '02' },
    { label: 'Zona de Cobertura', href: '#zonas', number: '03' },
    { label: 'Servicios Inmobiliarios', href: '#servicios', number: '04' },
    { label: 'Tasación Profesional', href: '#tasaciones', number: '05' },
    { label: 'Contacto & Sedes', href: '#contacto', number: '06' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md py-4 shadow-sm border-b border-[#E8E2D9] text-[#141518]'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-logo"
            className="flex flex-col group focus:outline-none"
            aria-label="EcoApo Propiedades - Inicio"
          >
            <div className="flex items-center gap-2">
              <span
                className={`font-serif text-2xl sm:text-3xl font-bold tracking-[0.18em] uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-[#141518]' : 'text-white'
                }`}
              >
                ECOAPO
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9D7F63]" />
            </div>
            <span
              className={`text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-sans transition-colors duration-300 ${
                isScrolled ? 'text-[#757068]' : 'text-white/80'
              }`}
            >
              PROPIEDADES & DESARROLLOS
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.14em] font-medium" aria-label="Navegación principal">
            <a
              href="#propiedades"
              className={`transition-colors duration-300 relative py-1 group ${
                isScrolled ? 'text-[#2D2E32] hover:text-[#9D7F63]' : 'text-white/90 hover:text-white'
              }`}
            >
              Propiedades
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#9D7F63] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#quienes-somos"
              className={`transition-colors duration-300 relative py-1 group ${
                isScrolled ? 'text-[#2D2E32] hover:text-[#9D7F63]' : 'text-white/90 hover:text-white'
              }`}
            >
              Filosofía
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#9D7F63] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#zonas"
              className={`transition-colors duration-300 relative py-1 group ${
                isScrolled ? 'text-[#2D2E32] hover:text-[#9D7F63]' : 'text-white/90 hover:text-white'
              }`}
            >
              Zonas
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#9D7F63] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#servicios"
              className={`transition-colors duration-300 relative py-1 group ${
                isScrolled ? 'text-[#2D2E32] hover:text-[#9D7F63]' : 'text-white/90 hover:text-white'
              }`}
            >
              Servicios
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#9D7F63] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#tasaciones"
              className={`transition-colors duration-300 relative py-1 group ${
                isScrolled ? 'text-[#2D2E32] hover:text-[#9D7F63]' : 'text-white/90 hover:text-white'
              }`}
            >
              Tasaciones
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#9D7F63] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Action CTAs and Hamburger Menu */}
          <div className="flex items-center gap-4">
            <button
              id="header-cta-valuation"
              onClick={onOpenValuation}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.14em] font-semibold transition-all duration-300 border ${
                isScrolled
                  ? 'border-[#9D7F63] text-[#9D7F63] hover:bg-[#9D7F63] hover:text-white'
                  : 'border-white/40 text-white hover:border-white hover:bg-white/10'
              }`}
            >
              Tasá tu Propiedad
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Hamburger Button */}
            <button
              id="editorial-menu-toggle"
              onClick={() => setIsMenuOpen(true)}
              className={`p-2.5 rounded-full transition-all duration-300 flex items-center justify-center border ${
                isScrolled
                  ? 'border-[#E0D8CE] bg-white text-[#141518] hover:border-[#9D7F63] hover:text-[#9D7F63]'
                  : 'border-white/30 bg-black/20 text-white hover:border-white hover:bg-black/40'
              }`}
              aria-label="Abrir menú de navegación editorial"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Editorial Navigation Overlay (JEM Pattern) */}
      {isMenuOpen && (
        <div
          id="fullscreen-editorial-overlay"
          className="fixed inset-0 z-50 bg-[#0E0F12] text-[#F4EFEB] flex flex-col justify-between p-6 sm:p-12 lg:p-16 animate-in fade-in duration-400"
        >
          {/* Overlay Top Bar */}
          <div className="max-w-7xl w-full mx-auto flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white">
                ECOAPO
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#9D7F63] uppercase font-mono">
                SISTEMA DE DISEÑO JEM STANDARD
              </span>
            </div>

            <button
              id="editorial-menu-close"
              onClick={() => setIsMenuOpen(false)}
              className="p-3 rounded-full border border-white/20 text-white hover:border-[#9D7F63] hover:text-[#9D7F63] hover:rotate-90 transition-all duration-300"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Editorial Menu Content Grid */}
          <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-12 my-auto py-8 items-center">
            {/* Main Links */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              {navLinks.map((link) => (
                <div key={link.number} className="group">
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="flex items-baseline gap-4 sm:gap-6 text-left w-full focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm font-mono text-[#9D7F63] tracking-widest">
                      {link.number}
                    </span>
                    <span className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-[#E5DFD7] tracking-wide group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
                      {link.label}
                    </span>
                  </button>
                </div>
              ))}
            </div>

            {/* Sidebar with Real Agency Details */}
            <div className="lg:col-span-4 space-y-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10 text-sm text-[#A8A196]">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#9D7F63] font-semibold mb-3">
                  SEDES OFICIALES
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#9D7F63] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Sede Zona Sur</p>
                      <p className="text-xs">Maipú 719, Banfield, Buenos Aires</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#9D7F63] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Sede CABA</p>
                      <p className="text-xs">Luna 24, Parque Patricios, CABA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#9D7F63] font-semibold mb-3">
                  CONTACTO DIRECTO
                </p>
                <div className="space-y-2">
                  <a
                    href={`tel:${AGENCY_INFO.phoneRaw}`}
                    className="flex items-center gap-2 text-white hover:text-[#9D7F63] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#9D7F63]" />
                    <span>{AGENCY_INFO.phone}</span>
                  </a>
                  <a
                    href={`mailto:${AGENCY_INFO.email}`}
                    className="flex items-center gap-2 text-white hover:text-[#9D7F63] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#9D7F63]" />
                    <span>{AGENCY_INFO.email}</span>
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-3.5 px-6 border border-[#9D7F63] text-[#9D7F63] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#9D7F63] hover:text-white transition-all duration-300 text-center"
                >
                  Agendar Entrevista Privada
                </button>
              </div>
            </div>
          </div>

          {/* Overlay Bottom Footer */}
          <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 text-xs text-[#7B746A]">
            <p>© {new Date().getFullYear()} EcoApo Propiedades. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6 mt-4 sm:mt-0">
              <a href={AGENCY_INFO.social.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href={AGENCY_INFO.social.facebook} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a>
              <a href={AGENCY_INFO.social.youtube} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
