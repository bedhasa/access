
import React from 'react';

const FloatingShape: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`absolute rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 filter blur-3xl ${className}`}></div>
);

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <FloatingShape className="w-96 h-96 top-1/4 left-1/4 animate-[spin_20s_linear_infinite]" />
        <FloatingShape className="w-72 h-72 top-1/2 right-1/4 animate-[spin_25s_linear_infinite_reverse]" />
        <FloatingShape className="w-64 h-64 bottom-1/4 left-1/3 animate-[spin_18s_linear_infinite]" />
      </div>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight animate-fade-in-down">
          Empowering Your Digital Growth
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          We deliver creative, technical, and business solutions built for the future.
        </p>
        <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Get Started
          </a>
          <a href="#services" className="px-8 py-3 bg-gray-700/50 border border-gray-600 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700/80 transform hover:scale-105 transition-all duration-300">
            Explore Services
          </a>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default HeroSection;
