
import React from 'react';
import { ArrowRight, CalendarCheck } from 'lucide-react';

const CTASection: React.FC = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-cyan-950">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />
            </div>

            <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                    Bereit für das <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-500">nächste Level?</span>
                </h2>
                <p className="text-xl text-slate-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                    Hören Sie auf, Leads zu verbrennen und Mitarbeiter mit Routineaufgaben zu frustrieren. 
                    Lassen Sie uns Ihr Business in 30 Minuten auditieren.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a 
                        href="https://titanspear.agency/kontakt/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-10 py-5 bg-white text-black font-bold text-xl rounded-full hover:scale-105 hover:bg-cyan-400 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center gap-3"
                    >
                        <CalendarCheck size={24} />
                        Kostenloses Audit Buchen
                    </a>
                    <p className="text-sm text-slate-500 font-mono mt-4 sm:mt-0">
                        Kein Pitch. Nur Strategie.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
