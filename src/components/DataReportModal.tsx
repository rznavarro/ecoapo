import React from 'react';
import { X, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { AGENCY_INFO } from '../data/realEstateData';

interface DataReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DataReportModal: React.FC<DataReportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] text-[#141518] w-full max-w-2xl rounded-3xl border border-[#DDD5CA] shadow-2xl p-6 sm:p-8 space-y-6 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D8]">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9D7F63]">
              AUDITORÍA DE CONTENIDO
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-light">
              Datos Reales de EcoApo vs. Placeholders
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#757068] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5 text-xs text-[#4A4843] leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          <p>
            Al consultar e inspeccionar en tiempo real el dominio oficial <strong>https://ecoapo.com.ar/</strong>, se identificó que la empresa es originalmente una distribuidora e instaladora de tecnología y energía solar en Argentina con presencia consolidada. Para adaptar su ecosistema a una <strong>inmobiliaria y desarrolladora de alta gama</strong> con el sistema de diseño JEM, se estructuró la siguiente diferenciación:
          </p>

          <div className="p-4 rounded-xl bg-white border border-[#E3DBD0] space-y-3">
            <h4 className="font-semibold text-xs text-[#141518] flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#2C5E3B]" />
              <span>1. DATOS REALES EXTRAÍDOS DIRECTAMENTE DEL SITIO:</span>
            </h4>
            <ul className="space-y-1.5 list-disc pl-5 text-[#55524D]">
              <li><strong>Nombre de marca:</strong> EcoApo</li>
              <li><strong>Teléfono / WhatsApp oficial:</strong> {AGENCY_INFO.phone}</li>
              <li><strong>Email corporativo:</strong> {AGENCY_INFO.email}</li>
              <li><strong>Sede física Banfield:</strong> Maipú 719, Banfield, Provincia de Buenos Aires</li>
              <li><strong>Sede física CABA:</strong> Luna 24, Parque Patricios, Distrito Tecnológico, CABA</li>
              <li><strong>Canales sociales reales:</strong> Instagram (@ecoapo_solar), Facebook (EcoApoTecnologia) y YouTube</li>
              <li><strong>Horario de atención:</strong> {AGENCY_INFO.hours}</li>
              <li><strong>Enfoque sustentable:</strong> Know-how en energía solar, eficiencia energética y proyectos bioclimáticos</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E3DBD0] space-y-3">
            <h4 className="font-semibold text-xs text-[#141518] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#9D7F63]" />
              <span>2. DATOS DE CORRETAJE ADAPTADOS / PLACEHOLDERS A COMPLETAR:</span>
            </h4>
            <ul className="space-y-1.5 list-disc pl-5 text-[#55524D]">
              <li><strong>Catálogo de propiedades:</strong> El sitio web ecoapo.com.ar actualmente no contaba con listados inmobiliarios cargados en producción. Se crearon fichas de ejemplo de alto nivel ubicadas exactamente en sus zonas de cobertura real (Banfield Este, Las Lomitas, Parque Patricios, Puerto Madero, Recoleta, Canning) con fotos de arquitectura de alta resolución y precios de mercado para que el cliente cargue sus inmuebles reales.</li>
              <li><strong>Matrículas de corretaje:</strong> Se dejaron como placeholder las matrículas estándar para las jurisdicciones de CABA y Lomas de Zamora/Banfield (CUCICBA Mat. 8241 y CPMCLZ Coleg. 4319) para ser reemplazadas por la matrícula del martillero responsable.</li>
            </ul>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#141518] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#9D7F63] transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
