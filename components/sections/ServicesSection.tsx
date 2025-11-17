
import React from 'react';
import { services } from '../../constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ServiceCard: React.FC<{ service: typeof services[0]; delay: number }> = ({ service, delay }) => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();
    return (
        <div ref={ref} className={`p-8 bg-gray-900/50 rounded-xl border border-gray-800 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 group ${animationClasses}`} style={{ transitionDelay: `${delay}ms` }}>
            <div className="mb-6">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br ${service.gradient} transition-all duration-300 group-hover:scale-110`}>
                    <service.icon className="w-8 h-8 text-white"/>
                </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400 mb-4 h-24">{service.description}</p>
            <ul className="text-gray-400 space-y-2">
                {service.points.map((point, index) => (
                    <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
};


const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Services</h2>
            <p className="text-lg text-gray-400">Solutions tailored for your success.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} delay={index * 100} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
