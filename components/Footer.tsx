import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-slate-900 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">titanspear.ai</h3>
                <p className="text-slate-500 text-sm">Die Zukunft der Agentur-Telefonie.</p>
            </div>

            <div className="flex gap-8 text-sm text-slate-400">
                <a href="https://titanspear.agency/impressum/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Impressum</a>
                <a href="https://titanspear.agency/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Datenschutz</a>
            </div>

            <a 
                href="https://titanspear.agency/kontakt/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-cyan-400 transition-all"
            >
                Gespräch buchen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
        
        <div className="mt-12 text-center text-slate-800 text-xs">
            © {new Date().getFullYear()} titanspear.ai. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;