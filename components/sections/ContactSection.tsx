
import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ContactSection: React.FC = () => {
  const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();
  return (
    <section id="contact" className="py-20 md:py-32 bg-[#111] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      <div ref={ref} className={`container mx-auto px-6 relative z-10 transition-all duration-700 ${animationClasses}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Get In Touch</h2>
          <p className="text-lg text-gray-400">Have a project in mind? We'd love to hear from you.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded"></div>
        </div>

        <div className="max-w-xl mx-auto p-8 bg-gray-900/50 rounded-lg border border-gray-800 backdrop-blur-sm">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"></textarea>
            </div>
            <button type="submit" className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Send Message
            </button>
          </form>
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">Or reach us directly</p>
            <div className="flex justify-center space-x-4">
                 <a href="mailto:contact@access.dev" className="flex items-center space-x-2 text-gray-300 hover:text-white transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>Email</span>
                </a>
                 <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.846 6.067l-1.29 4.723 4.793-1.261z"/></svg>
                    <span>WhatsApp</span>
                </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes blob {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-4000 { animation-delay: -4s; }
      `}</style>
    </section>
  );
};

export default ContactSection;
