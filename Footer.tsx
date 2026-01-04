
import React from 'react';
import { ArrowRight, Award, ShieldCheck, Globe, Landmark } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-slate-900 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
            
            {/* OFFICIAL FUNDING BANNER - High Fidelity Integration */}
            <div className="mb-24 relative">
                <div className="bg-white rounded-xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center gap-12 text-zinc-900 border border-zinc-200">
                    {/* Left Part: General Text */}
                    <div className="flex-1">
                        <p className="text-sm md:text-base leading-relaxed font-medium mb-8">
                            Die <span className="font-black">Europäische Union</span> fördert zusammen mit dem <span className="font-black">Bundesministerium für Wirtschaft und Energie</span> über den Europäischen Sozialfonds Plus (ESF Plus) das Programm „Förderung von Unternehmensberatungen für KMU“ in Deutschland. 
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-10">
                            {/* BMWK Logo Representation */}
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col gap-0.5">
                                    <div className="w-10 h-1.5 bg-black" />
                                    <div className="w-10 h-1.5 bg-red-600" />
                                    <div className="w-10 h-1.5 bg-yellow-500" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold leading-tight uppercase max-w-[140px]">Bundesministerium für Wirtschaft und Energie</span>
                                </div>
                            </div>

                            {/* EU Flag Representation */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-9 bg-[#003399] rounded-sm relative flex items-center justify-center overflow-hidden shadow-sm">
                                    {/* Simulated Stars */}
                                    <div className="w-6 h-6 border-2 border-yellow-400 rounded-full border-dotted opacity-60" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="grid grid-cols-4 gap-1">
                                            {Array.from({length: 8}).map((_, i) => <div key={i} className="w-0.5 h-0.5 bg-yellow-400 rounded-full" />)}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-bold text-zinc-600 uppercase">Kofinanziert von der</span>
                                    <span className="text-[11px] font-black uppercase text-[#003399]">Europäischen Union</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Part: BAFA Agency */}
                    <div className="lg:w-1/3 border-t lg:border-t-0 lg:border-l border-zinc-100 pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-center">
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-6">Durchführung beauftragt:</p>
                        <div className="flex items-center gap-4">
                            <Landmark size={32} className="text-zinc-800 shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-xs font-bold leading-tight">Bundesamt für Wirtschaft und Ausfuhrkontrolle</span>
                                <span className="text-[10px] font-medium text-zinc-500">BAFA akkreditiertes Unternehmen</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Standard Footer Links & Brand */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                <div className="md:col-span-2 space-y-8">
                    <h3 className="text-4xl font-black text-white tracking-tighter">titanspear<span className="text-cyan-500">.ai</span></h3>
                    <p className="text-slate-500 text-lg max-w-sm font-light leading-relaxed">
                        Die führende Allianz für Voice-Autonomie und KI-getriebene Unternehmensprozesse. Staatlich akkreditiert. Enterprise-Ready.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] text-slate-300 uppercase font-black tracking-widest">
                            <Award size={14} className="text-cyan-500" /> BAFA Akkreditiert
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] text-slate-300 uppercase font-black tracking-widest">
                            <ShieldCheck size={14} className="text-emerald-500" /> DSGVO Certified
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.3em]">Compliance</h4>
                    <ul className="space-y-4 text-sm text-slate-500 font-medium">
                        <li><a href="https://titanspear.agency/impressum/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">Impressum <ArrowRight size={12} /></a></li>
                        <li><a href="https://titanspear.agency/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">Datenschutz <ArrowRight size={12} /></a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2">AGB <ArrowRight size={12} /></a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2">Verfahrensverzeichnis <ArrowRight size={12} /></a></li>
                    </ul>
                </div>

                <div className="flex flex-col justify-end items-start md:items-end">
                    <a 
                        href="https://titanspear.agency/kontakt/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 px-8 py-5 bg-white text-black font-black rounded-2xl hover:bg-cyan-400 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                    >
                        JETZT PRÜFEN LASSEN
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
            
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-600 text-[10px] font-mono uppercase tracking-[0.4em]">
                <div className="flex items-center gap-4">
                    <span className="text-white font-bold italic">High-End Automation</span>
                    <span className="w-1 h-1 bg-slate-800 rounded-full" />
                    <span>Based in Germany</span>
                </div>
                <span>© {new Date().getFullYear()} titanspear.ai • All Rights Reserved</span>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
