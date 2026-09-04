import React, { useState } from 'react';
import { Property } from '../types';
import { AGENCY_INFO } from '../data/realEstateData';
import { 
  X, MapPin, Bed, Bath, Car, Maximize2, Zap, CheckCircle2, 
  MessageSquare, Phone, Mail, Share2, Shield, Calendar
} from 'lucide-react';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!property) return null;

  const whatsappMessage = encodeURIComponent(
    `Hola EcoApo Propiedades, me interesa recibir información y coordinar una visita para la propiedad "${property.title}" (Ref: ${property.code}).`
  );
  const whatsappUrl = `https://wa.me/${AGENCY_INFO.phoneRaw}?text=${whatsappMessage}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Mirá esta propiedad en EcoApo: ${property.title} - ${property.priceFormatted}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div
      id="property-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] w-full max-w-5xl rounded-3xl border border-[#DDD5CA] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E2D8] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#9D7F63] font-bold tracking-wider">
              {property.code}
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-xs font-mono text-[#757068] uppercase tracking-wider">
              {property.operation} • {property.type}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full text-[#757068] hover:text-[#141518] hover:bg-black/5 transition-colors"
              title="Compartir propiedad"
              aria-label="Compartir"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#757068] hover:text-[#141518] hover:bg-black/5 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Gallery Area */}
          <div className="space-y-3">
            <div className="aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-black/5 border border-[#E0D8CE]">
              <img
                src={property.images[activeImageIndex] || property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Row */}
            {property.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-24 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeImageIndex === i ? 'border-[#9D7F63] opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Heading and Price */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#E8E2D8]">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs text-[#9D7F63] font-medium">
                <MapPin className="w-3.5 h-3.5" />
                <span>{property.location.neighborhood}, {property.location.city} ({property.location.addressApprox})</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#141518] font-light tracking-tight">
                {property.title}
              </h2>
            </div>

            <div className="text-left md:text-right bg-[#F3ECE4] p-4 rounded-xl border border-[#E2D8CD]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#757068] block">
                PRECIO FINAL
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-medium text-[#141518] block">
                {property.priceFormatted}
              </span>
              {property.expensesARS && (
                <span className="text-xs text-[#757068] block mt-0.5">
                  Expensas: {property.expensesARS}
                </span>
              )}
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white rounded-2xl border border-[#E5DFD7]">
            <div className="flex items-center gap-3">
              <Maximize2 className="w-5 h-5 text-[#9D7F63]" />
              <div>
                <div className="text-sm font-semibold text-[#141518]">{property.coveredAreaM2} m² cub.</div>
                <div className="text-[11px] text-[#757068]">{property.totalAreaM2} m² totales</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Bed className="w-5 h-5 text-[#9D7F63]" />
              <div>
                <div className="text-sm font-semibold text-[#141518]">{property.bedrooms} Dormitorios</div>
                <div className="text-[11px] text-[#757068]">Suites con vestidor</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Bath className="w-5 h-5 text-[#9D7F63]" />
              <div>
                <div className="text-sm font-semibold text-[#141518]">{property.bathrooms} Baños</div>
                <div className="text-[11px] text-[#757068]">Sanitarios de diseño</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Car className="w-5 h-5 text-[#9D7F63]" />
              <div>
                <div className="text-sm font-semibold text-[#141518]">{property.parkingSpaces} Cocheras</div>
                <div className="text-[11px] text-[#757068]">Cubiertas fijas</div>
              </div>
            </div>
          </div>

          {/* Description & Sustainable Features Columns */}
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left: Description & Features */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h3 className="font-serif text-lg font-medium text-[#141518] mb-3">
                  Memoria Descriptiva
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4843] leading-relaxed font-light">
                  {property.description}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg font-medium text-[#141518] mb-3">
                  Comodidades & Terminaciones
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {property.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#55524D]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9D7F63] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: EcoApo Sustainable & Direct Action Card */}
            <div className="md:col-span-5 space-y-6">
              {/* Sustainable Card */}
              <div className="p-5 rounded-2xl bg-[#F0F5F1] border border-[#D5E4D8] space-y-3">
                <div className="flex items-center gap-2 text-[#2C5E3B]">
                  <Zap className="w-4 h-4 fill-current" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                    Certificación & Sustentabilidad EcoApo
                  </span>
                </div>
                <p className="text-[11px] text-[#4A6451]">
                  Propiedad evaluada bajo criterios de eficiencia bioclimática y ahorro energético.
                </p>
                <div className="space-y-2 pt-1">
                  {property.sustainableFeatures.map((tag, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#20442B] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B8050]" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action Box */}
              <div className="p-6 bg-white rounded-2xl border border-[#E5DFD7] space-y-4">
                <div className="space-y-1">
                  <h4 className="font-serif text-base font-medium text-[#141518]">
                    ¿Desea coordinar una visita?
                  </h4>
                  <p className="text-xs text-[#757068]">
                    Atención personalizada por un asesor matriculado de EcoApo.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BE5C] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Consultar por WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${AGENCY_INFO.phoneRaw}`}
                    className="w-full py-3 px-4 rounded-xl border border-[#141518] text-[#141518] hover:bg-[#141518] hover:text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Llamar al {AGENCY_INFO.phone}</span>
                  </a>
                </div>

                <div className="pt-2 text-[11px] text-[#8C867D] text-center">
                  Operación respaldada bajo {AGENCY_INFO.licenses.caba} / {AGENCY_INFO.licenses.provincia}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Banner */}
        <div className="px-6 py-3 bg-[#F2ECE5] border-t border-[#E8E2D8] flex items-center justify-between text-xs text-[#757068]">
          <span>Ref: {property.code} • EcoApo Propiedades</span>
          {copied && <span className="text-[#2C5E3B] font-medium">¡Enlace copiado al portapapeles!</span>}
        </div>
      </div>
    </div>
  );
};
