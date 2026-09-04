import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AlternatingSectionProps {
  id: string;
  number: string;
  pretitle: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  actionText: string;
  actionHref: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  onActionClick?: (href: string) => void;
}

export const AlternatingSection: React.FC<AlternatingSectionProps> = ({
  id,
  number,
  pretitle,
  title,
  subtitle,
  paragraphs,
  actionText,
  actionHref,
  image,
  imageAlt,
  reverse = false,
  onActionClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onActionClick) {
      onActionClick(actionHref);
    } else {
      const el = document.querySelector(actionHref);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id={id}
      className="py-20 sm:py-28 px-6 sm:px-8 border-b border-[#ECE6DD] bg-[#FAF8F5]"
      aria-label={title}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
            reverse ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Image Block */}
          <div
            className={`lg:col-span-6 relative group overflow-hidden rounded-2xl bg-[#EBE4DA] border border-[#E3DBD0] shadow-sm ${
              reverse ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Subtle decorative stamp */}
            <div className="absolute bottom-4 right-4 bg-[#0E0F12]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-[10px] font-mono tracking-widest text-[#E5DFD7] uppercase">
              ECOAPO • {number}
            </div>
          </div>

          {/* Copy Block */}
          <div
            className={`lg:col-span-6 space-y-6 ${
              reverse ? 'lg:order-1 lg:pr-6' : 'lg:order-2 lg:pl-6'
            }`}
          >
            {/* Number + Pretitle */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-[#9D7F63] tracking-widest">
                {number}
              </span>
              <span className="w-6 h-[1px] bg-[#9D7F63]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#757068]">
                {pretitle}
              </span>
            </div>

            {/* Serif Headline */}
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-[40px] font-light text-[#141518] leading-[1.2] tracking-tight">
              {title}
            </h2>

            {/* Subheadline */}
            <p className="text-sm sm:text-base font-medium text-[#757068] leading-relaxed">
              {subtitle}
            </p>

            {/* Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-[#4A4843] leading-relaxed font-light">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Signature JEM Animated Line Link */}
            <div className="pt-4">
              <button
                onClick={handleClick}
                className="jem-link text-[#141518] hover:text-[#9D7F63] group transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{actionText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
