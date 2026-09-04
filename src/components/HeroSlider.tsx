import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { HERO_SLIDES } from '../data/realEstateData';

interface HeroSliderProps {
  onExploreProperties: () => void;
  onOpenValuation: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onExploreProperties,
  onOpenValuation,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto advance every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleAction = (href: string) => {
    if (href === '#tasaciones') {
      onOpenValuation();
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        onExploreProperties();
      }
    }
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="hero-slider"
      className="relative h-screen min-h-[640px] max-h-[960px] w-full bg-[#0E0F12] text-white overflow-hidden flex items-end pb-20 sm:pb-28"
      aria-label="Presentación principal de EcoApo Propiedades"
    >
      {/* Background Images with Cross-Fade Transition */}
      {HERO_SLIDES.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1.2s' }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center brightness-[0.7] transform duration-[8000ms] scale-105 hover:scale-100"
          />
          {/* Subtle Dark Vignette & Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-[#0E0F12]/40 to-black/30" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      ))}

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-8">
        <div className="max-w-3xl space-y-6">
          {/* Tagline / Pre-headline */}
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#9D7F63]" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#C4A482] uppercase">
              {slide.tagline}
            </span>
          </div>

          {/* Heading (Single H1 for SEO as requested) */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light leading-[1.15] text-[#FAF8F5] tracking-tight">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#D4CDC3] max-w-2xl font-light leading-relaxed">
            {slide.subtitle}
          </p>

          {/* JEM Signature Action Link with Animated Underline */}
          <div className="pt-2">
            <button
              onClick={() => handleAction(slide.actionHref)}
              className="jem-link text-[#FAF8F5] hover:text-[#C4A482] group transition-colors inline-flex items-center gap-2"
            >
              <span>{slide.actionText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Slide Controls & Indicators (Bottom Bar) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/15 flex items-center justify-between">
          {/* Indicators */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#9D7F63]">
              <span className="text-white font-bold">0{currentSlide + 1}</span>
              <span className="text-white/40">/</span>
              <span className="text-white/60">0{HERO_SLIDES.length}</span>
            </div>

            {/* Progress Bars */}
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1 transition-all duration-500 rounded-full ${
                    idx === currentSlide ? 'w-10 bg-[#9D7F63]' : 'w-3 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Ir a diapositiva ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full border border-white/20 text-white hover:border-[#9D7F63] hover:text-[#9D7F63] hover:bg-white/5 transition-all"
              aria-label="Diapositiva anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full border border-white/20 text-white hover:border-[#9D7F63] hover:text-[#9D7F63] hover:bg-white/5 transition-all"
              aria-label="Siguiente diapositiva"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
