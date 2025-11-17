
import React from 'react';
import { AccessLogo, socialLinks } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-gray-800 py-12">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-4">
              <AccessLogo className="h-8 w-auto text-white" />
              <span className="text-2xl font-bold text-white">Access</span>
            </div>
          <p className="max-w-md mx-auto mb-6">
            Unlocking Digital Possibilities. We are your partners in innovation, dedicated to crafting the future of digital experiences.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Access. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
