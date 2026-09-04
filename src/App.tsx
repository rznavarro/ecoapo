import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { PropertySearch } from './components/PropertySearch';
import { FeaturedProperties } from './components/FeaturedProperties';
import { AlternatingSection } from './components/AlternatingSection';
import { ValuationSection } from './components/ValuationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyModal } from './components/PropertyModal';
import { DataReportModal } from './components/DataReportModal';
import { PROPERTIES_DATA, ALTERNATING_SECTIONS, AGENCY_INFO } from './data/realEstateData';
import { FilterState, Property } from './types';
import { MessageSquare, ShieldCheck, Sparkles, FileText } from 'lucide-react';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isDataReportOpen, setIsDataReportOpen] = useState(false);
  const [operationTab, setOperationTab] = useState<string>('Todas');

  const [filters, setFilters] = useState<FilterState>({
    operation: 'Todas',
    type: 'Todos',
    location: 'Todas',
    maxPrice: 2000000,
    searchTerm: '',
  });

  const resetFilters = () => {
    setFilters({
      operation: 'Todas',
      type: 'Todos',
      location: 'Todas',
      maxPrice: 2000000,
      searchTerm: '',
    });
    setOperationTab('Todas');
  };

  const handleOperationTabChange = (tab: string) => {
    setOperationTab(tab);
    setFilters((prev) => ({ ...prev, operation: tab }));
  };

  // Filtered properties memoization
  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((item) => {
      // Filter by operation
      if (filters.operation !== 'Todas' && item.operation !== filters.operation) {
        return false;
      }
      // Filter by property type
      if (filters.type !== 'Todos' && item.type !== filters.type) {
        return false;
      }
      // Filter by location / zone
      if (filters.location !== 'Todas') {
        const matchesLocation =
          item.location.neighborhood.toLowerCase().includes(filters.location.toLowerCase()) ||
          item.location.city.toLowerCase().includes(filters.location.toLowerCase()) ||
          item.location.zone.toLowerCase() === filters.location.toLowerCase();
        if (!matchesLocation) return false;
      }
      // Filter by price (only apply if not a monthly rental or if within USD bounds)
      if (item.operation === 'Venta' && item.priceUSD > filters.maxPrice) {
        return false;
      }
      // Filter by search keyword
      if (filters.searchTerm.trim() !== '') {
        const term = filters.searchTerm.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(term);
        const matchesCode = item.code.toLowerCase().includes(term);
        const matchesDesc = item.description.toLowerCase().includes(term);
        const matchesNeighborhood = item.location.neighborhood.toLowerCase().includes(term);
        const matchesSustainable = item.sustainableFeatures.some((f) => f.toLowerCase().includes(term));
        const matchesFeatures = item.features.some((f) => f.toLowerCase().includes(term));

        if (
          !matchesTitle &&
          !matchesCode &&
          !matchesDesc &&
          !matchesNeighborhood &&
          !matchesSustainable &&
          !matchesFeatures
        ) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  const scrollToValuation = () => {
    const el = document.getElementById('tasaciones');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProperties = () => {
    const el = document.getElementById('propiedades');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141518] flex flex-col font-sans">
      {/* Top Floating Notification / Data Transparency Pill */}
      <div className="bg-[#141518] text-[#D8D2C7] py-2 px-4 text-[11px] font-mono tracking-wider border-b border-white/10 text-center flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-[#C4A482]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Rediseño Oficial EcoApo Propiedades • Sistema JEM Private Residences Standard</span>
        </span>
        <button
          onClick={() => setIsDataReportOpen(true)}
          className="underline text-white hover:text-[#C4A482] transition-colors cursor-pointer hidden sm:inline"
        >
          [Ver auditoría de datos reales vs placeholders]
        </button>
      </div>

      {/* Main Navigation Header */}
      <Header
        onOpenValuation={scrollToValuation}
        onOpenContact={scrollToContact}
      />

      {/* Main Hero Slider */}
      <main className="flex-1">
        <HeroSlider
          onExploreProperties={scrollToProperties}
          onOpenValuation={scrollToValuation}
        />

        {/* Property Search Bar (JEM styled) */}
        <PropertySearch
          filters={filters}
          onFilterChange={setFilters}
          onResetFilters={resetFilters}
          resultsCount={filteredProperties.length}
        />

        {/* Featured Properties Grid with Modal trigger */}
        <FeaturedProperties
          properties={filteredProperties}
          onSelectProperty={setSelectedProperty}
          selectedOperationTab={operationTab}
          onSelectOperationTab={handleOperationTabChange}
        />

        {/* Alternating Image + Copy Sections (JEM signature layout) */}
        <div id="secciones-institucionales">
          {ALTERNATING_SECTIONS.map((section) => (
            <AlternatingSection
              key={section.id}
              id={section.id}
              number={section.number}
              pretitle={section.pretitle}
              title={section.title}
              subtitle={section.subtitle}
              paragraphs={section.paragraphs}
              actionText={section.actionText}
              actionHref={section.actionHref}
              image={section.image}
              imageAlt={section.imageAlt}
              reverse={section.reverse}
              onActionClick={(href) => {
                const el = document.querySelector(href);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          ))}
        </div>

        {/* Valuation (Tasaciones) Section */}
        <ValuationSection />

        {/* Contact & Headquarters Section */}
        <ContactSection />
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Property Detail Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      {/* Data Transparency & Auditoría Report Modal */}
      <DataReportModal
        isOpen={isDataReportOpen}
        onClose={() => setIsDataReportOpen(false)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={`https://wa.me/${AGENCY_INFO.phoneRaw}?text=${encodeURIComponent('Hola EcoApo, me comunico desde la web para recibir asesoramiento inmobiliario.')}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out pl-0 group-hover:pl-2 text-xs font-semibold uppercase tracking-wider">
          Asesoría Inmediata
        </span>
      </a>

      {/* Floating Audit Button (Mobile friendly) */}
      <button
        onClick={() => setIsDataReportOpen(true)}
        className="fixed bottom-6 left-6 z-40 px-3.5 py-2 rounded-full bg-[#141518]/90 backdrop-blur-md border border-white/20 text-[#D8D2C7] hover:text-white shadow-lg text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all"
        title="Informe de datos reales vs placeholders"
      >
        <FileText className="w-3.5 h-3.5 text-[#9D7F63]" />
        <span className="hidden sm:inline">Auditoría Datos Reales</span>
      </button>
    </div>
  );
}
