import React from 'react';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { FilterState } from '../types';

interface PropertySearchProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onResetFilters: () => void;
  resultsCount: number;
}

export const PropertySearch: React.FC<PropertySearchProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  resultsCount,
}) => {
  const handleOperationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, operation: e.target.value });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, type: e.target.value });
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, location: e.target.value });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, maxPrice: Number(e.target.value) });
  };

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, searchTerm: e.target.value });
  };

  const hasActiveFilters =
    filters.operation !== 'Todas' ||
    filters.type !== 'Todos' ||
    filters.location !== 'Todas' ||
    filters.maxPrice < 2000000 ||
    filters.searchTerm !== '';

  return (
    <div
      id="property-search-container"
      className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 -mt-10 sm:-mt-12"
    >
      <div className="bg-[#FAF8F5] border border-[#E5DFD7] shadow-xl p-6 sm:p-8 rounded-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-[#EAE3DA]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9D7F63] block">
              BUSCADOR DE ALTA GAMA
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#16171B] tracking-tight">
              Encontrá tu próxima residencia o inversión
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-[#757068] font-medium">
              <strong className="text-[#16171B]">{resultsCount}</strong> propiedades disponibles
            </span>
            {hasActiveFilters && (
              <button
                onClick={onResetFilters}
                className="inline-flex items-center gap-1.5 text-[#9D7F63] hover:text-[#7A614A] transition-colors font-medium cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restablecer</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          {/* Operación */}
          <div className="space-y-1.5">
            <label htmlFor="filter-operation" className="block text-[11px] font-mono uppercase tracking-wider text-[#757068]">
              Operación
            </label>
            <div className="relative">
              <select
                id="filter-operation"
                value={filters.operation}
                onChange={handleOperationChange}
                className="w-full bg-white border border-[#DDD5CA] rounded-xl px-4 py-3 text-xs text-[#16171B] font-medium focus:outline-none focus:border-[#9D7F63] focus:ring-1 focus:ring-[#9D7F63] transition-all cursor-pointer appearance-none"
              >
                <option value="Todas">Todas las operaciones</option>
                <option value="Venta">Venta</option>
                <option value="Alquiler">Alquiler</option>
                <option value="Emprendimiento">Emprendimientos / Pozo</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#757068]">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Tipo de Propiedad */}
          <div className="space-y-1.5">
            <label htmlFor="filter-type" className="block text-[11px] font-mono uppercase tracking-wider text-[#757068]">
              Tipo de Inmueble
            </label>
            <div className="relative">
              <select
                id="filter-type"
                value={filters.type}
                onChange={handleTypeChange}
                className="w-full bg-white border border-[#DDD5CA] rounded-xl px-4 py-3 text-xs text-[#16171B] font-medium focus:outline-none focus:border-[#9D7F63] focus:ring-1 focus:ring-[#9D7F63] transition-all cursor-pointer appearance-none"
              >
                <option value="Todos">Todos los tipos</option>
                <option value="Casa">Casas & Chalets</option>
                <option value="Departamento">Departamentos & Semipisos</option>
                <option value="Penthouse">Penthouses & Pisos</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#757068]">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Ubicación */}
          <div className="space-y-1.5">
            <label htmlFor="filter-location" className="block text-[11px] font-mono uppercase tracking-wider text-[#757068]">
              Ubicación / Zona
            </label>
            <div className="relative">
              <select
                id="filter-location"
                value={filters.location}
                onChange={handleLocationChange}
                className="w-full bg-white border border-[#DDD5CA] rounded-xl px-4 py-3 text-xs text-[#16171B] font-medium focus:outline-none focus:border-[#9D7F63] focus:ring-1 focus:ring-[#9D7F63] transition-all cursor-pointer appearance-none"
              >
                <option value="Todas">Todas las zonas (CABA & Sur)</option>
                <option value="Zona Sur">Zona Sur (Banfield / Lomas / Canning)</option>
                <option value="CABA">CABA (Madero / Recoleta / Palermo)</option>
                <option value="Banfield">Banfield Este / Centro</option>
                <option value="Lomas de Zamora">Lomas de Zamora (Las Lomitas)</option>
                <option value="Canning">Canning (Barrios Privados)</option>
                <option value="Puerto Madero">Puerto Madero</option>
                <option value="Recoleta">Recoleta</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#757068]">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Presupuesto Máximo */}
          <div className="space-y-1.5">
            <label htmlFor="filter-price" className="block text-[11px] font-mono uppercase tracking-wider text-[#757068]">
              Hasta: {filters.maxPrice >= 2000000 ? 'Sin límite' : `USD ${filters.maxPrice.toLocaleString()}`}
            </label>
            <div className="relative">
              <select
                id="filter-price"
                value={filters.maxPrice}
                onChange={handlePriceChange}
                className="w-full bg-white border border-[#DDD5CA] rounded-xl px-4 py-3 text-xs text-[#16171B] font-medium focus:outline-none focus:border-[#9D7F63] focus:ring-1 focus:ring-[#9D7F63] transition-all cursor-pointer appearance-none"
              >
                <option value={2000000}>Cualquier presupuesto</option>
                <option value={200000}>Hasta USD 200.000</option>
                <option value={400000}>Hasta USD 400.000</option>
                <option value={700000}>Hasta USD 700.000</option>
                <option value={1500000}>Hasta USD 1.500.000</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#757068]">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Search by keyword bar */}
        <div className="mt-4 pt-4 border-t border-[#EAE3DA]/60 flex items-center">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-[#9D7F63] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por código (ej. ECO-1042), barrio o característica sustentable (solar, piscina, terraza)..."
              value={filters.searchTerm}
              onChange={handleSearchTerm}
              className="w-full bg-white border border-[#DDD5CA] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#16171B] placeholder-[#9E968B] focus:outline-none focus:border-[#9D7F63] focus:ring-1 focus:ring-[#9D7F63] transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
