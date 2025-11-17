
import React from 'react';
import { portfolioItems } from '../../constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const PortfolioCard: React.FC<{ item: typeof portfolioItems[0]; delay: number }> = ({ item, delay }) => {
  const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();
  return (
    <div ref={ref} className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 ${animationClasses}`} style={{ transitionDelay: `${delay}ms` }}>
      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500 flex flex-col justify-end p-6">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <p className="text-gray-300 text-sm">{item.category}</p>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#111]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Portfolio</h2>
          <p className="text-lg text-gray-400">A glimpse into our creative and technical work.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
