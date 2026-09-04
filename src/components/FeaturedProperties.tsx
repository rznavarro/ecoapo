import React, { useState } from 'react';
import { Property, OperationType } from '../types';
import { Bed, Bath, Car, Maximize2, MapPin, Sparkles, ArrowUpRight, Zap } from 'lucide-react';

interface FeaturedPropertiesProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  selectedOperationTab: string;
  onSelectOperationTab: (tab: string) => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  onSelectProperty,
  selectedOperationTab,
  onSelectOperationTab,
}) => {
  const tabs = [
    { label: 'Colección Completa', value: 'Todas' },
    { label: 'Venta Exclusiva', value: 'Venta' },
    { label: 'Alquileres Premium', value: 'Alquiler' },
    { label: 'Emprendimientos & Pozo', value: 'Emprendimiento' },
  ];

  return (
    <section
      id="propiedades"
      className="py-24 sm:py-32 px-6 sm:px-8 bg-[#FAF8F5] border-b border-[#ECE6DD]"
      aria-label="Catálogo de propiedades exclusivas de EcoApo"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#9D7F63]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9D7F63]">
                CURADURÍA INMOBILIARIA
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141518] tracking-tight">
              Propiedades Destacadas
            </h2>
            <p className="text-xs sm:text-sm text-[#757068] font-light leading-relaxed">
              Selección de residencias únicas en CABA y Zona Sur que cumplen con estrictos parámetros de diseño, ubicación y eficiencia constructiva.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => onSelectOperationTab(tab.value)}
                className={`px-4 py-2 text-[11px] uppercase tracking-wider font-medium rounded-full transition-all whitespace-nowrap cursor-pointer border ${
                  selectedOperationTab === tab.value
                    ? 'bg-[#141518] text-white border-[#141518]'
                    : 'bg-white text-[#757068] border-[#E3DBD0] hover:border-[#9D7F63] hover:text-[#141518]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State if filter yields nothing */}
        {properties.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-2xl border border-[#E3DBD0] p-8 space-y-3">
            <p className="font-serif text-xl text-[#141518]">No se encontraron propiedades con los filtros seleccionados</p>
            <p className="text-xs text-[#757068]">Intente ampliar los criterios de búsqueda o restablecer los filtros superiores.</p>
          </div>
        ) : (
          /* Properties Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {properties.map((prop) => (
              <article
                key={prop.id}
                onClick={() => onSelectProperty(prop)}
                className="group bg-white rounded-2xl border border-[#E8E2D8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container with Zoom & Badges */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#ECE6DD]">
                  <img
                    src={prop.images[0]}
                    alt={prop.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Operation Tag */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#0E0F12]/80 backdrop-blur-md text-white text-[10px] uppercase font-mono tracking-widest rounded-full border border-white/10">
                      {prop.operation}
                    </span>
                    <span className="px-3 py-1 bg-[#FAF8F5]/90 backdrop-blur-md text-[#141518] text-[10px] uppercase font-mono tracking-wider rounded-full border border-[#DDD5CA]">
                      {prop.type}
                    </span>
                  </div>

                  {/* Sustainable Badge */}
                  {prop.sustainableFeatures.length > 0 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#233526]/85 backdrop-blur-md text-[#A3E3B5] text-[10px] font-mono tracking-wide rounded-full border border-[#3E5F44]/50">
                        <Zap className="w-3 h-3 text-[#55D285]" />
                        <span>{prop.sustainableFeatures[0]}</span>
                      </span>
                    </div>
                  )}

                  {/* Property Code */}
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-white/80 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                    {prop.code}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-[#9D7F63] font-medium tracking-wide">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{prop.location.neighborhood}, {prop.location.city}</span>
                    </div>

                    {/* Title in Serif */}
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-[#141518] leading-snug group-hover:text-[#9D7F63] transition-colors">
                      {prop.title}
                    </h3>

                    {/* Brief description snippet */}
                    <p className="text-xs text-[#757068] line-clamp-2 font-light leading-relaxed">
                      {prop.description}
                    </p>
                  </div>

                  {/* Specs Bar */}
                  <div className="pt-4 border-t border-[#EFE9E0] grid grid-cols-4 gap-2 text-center text-xs text-[#55524D]">
                    <div className="flex flex-col items-center">
                      <span className="text-[11px] font-semibold text-[#141518]">{prop.coveredAreaM2} m²</span>
                      <span className="text-[10px] text-[#8C867D]">Cubiertos</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[11px] font-semibold text-[#141518]">{prop.bedrooms}</span>
                      <span className="text-[10px] text-[#8C867D]">Dorms</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[11px] font-semibold text-[#141518]">{prop.bathrooms}</span>
                      <span className="text-[10px] text-[#8C867D]">Baños</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[11px] font-semibold text-[#141518]">{prop.parkingSpaces}</span>
                      <span className="text-[10px] text-[#8C867D]">Cocheras</span>
                    </div>
                  </div>

                  {/* Card Bottom: Price & Detail Action */}
                  <div className="pt-4 border-t border-[#EFE9E0] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#8C867D] block">
                        Valor
                      </span>
                      <span className="font-serif text-lg sm:text-xl font-medium text-[#141518]">
                        {prop.priceFormatted}
                      </span>
                    </div>

                    <button
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9D7F63] group-hover:text-[#141518] transition-colors"
                      aria-label={`Ver ficha de ${prop.title}`}
                    >
                      <span>Ver Ficha</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
