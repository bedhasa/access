
import React from 'react';
import { whyChooseUsItems } from '../../constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const BenefitItem: React.FC<{ item: typeof whyChooseUsItems[0]; delay: number }> = ({ item, delay }) => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();
    return (
        <div ref={ref} className={`flex items-start space-x-4 transition-all duration-700 ${animationClasses}`} style={{ transitionDelay: `${delay}ms` }}>
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border-2 border-blue-400/50">
                <item.icon className="w-6 h-6 text-blue-300" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-400 mt-1">{item.description}</p>
            </div>
        </div>
    );
};

const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Why Choose Access</h2>
          <p className="text-lg text-gray-400">Your trusted partner in digital innovation.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 max-w-4xl mx-auto">
          {whyChooseUsItems.map((item, index) => (
            <BenefitItem key={item.title} item={item} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
