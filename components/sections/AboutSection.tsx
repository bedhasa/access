
import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();
    return (
      <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${animationClasses}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-400">{subtitle}</p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded"></div>
      </div>
    );
};

const AboutSection: React.FC = () => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="py-20 md:py-32 bg-[#111]">
      <div className="container mx-auto px-6">
        <SectionHeader title="About Us" subtitle="Unlocking Digital Possibilities" />
        <div ref={ref} className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${animationClasses}`}>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Who We Are</h3>
            <p className="text-gray-400 leading-relaxed">
              Access is a dynamic team of strategists, designers, developers, and marketers dedicated to building exceptional digital experiences. We thrive on innovation and are passionate about helping businesses navigate the complexities of the digital landscape.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our approach is collaborative and client-focused. We believe in building strong partnerships to truly understand your goals and deliver solutions that not only meet but exceed expectations.
            </p>
          </div>
          <div className="space-y-6 p-8 bg-gray-900/50 rounded-lg border border-gray-800">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Our Mission</h4>
              <p className="text-gray-400">To empower businesses with cutting-edge technology and creative strategies, transforming challenges into growth opportunities.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Our Values</h4>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li><span className="font-semibold text-gray-300">Innovation:</span> Continuously exploring new frontiers.</li>
                <li><span className="font-semibold text-gray-300">Integrity:</span> Building trust through transparent actions.</li>
                <li><span className="font-semibold text-gray-300">Excellence:</span> Delivering premium quality in everything we do.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
