import React from 'react';
import { TECH_SPECS, CLIENT_LOGOS } from '../constants';
import { motion } from 'framer-motion';
import { Zap, Layers, Globe, ShieldCheck, RefreshCcw, TrendingUp } from 'lucide-react';

const TechSpecs: React.FC = () => {
  const getIcon = (index: number) => {
    switch(index) {
        case 0: return Zap;
        case 1: return Layers;
        case 2: return Globe;
        case 3: return ShieldCheck;
        case 4: return RefreshCcw;
        case 5: return TrendingUp;
        default: return Zap;
    }
  };

  return (
    <section className="py-20 bg-black overflow-hidden">
      {/* Specs Grid */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {TECH_SPECS.map((spec, i) => {
                const Icon = getIcon(i);
                return (
                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:border-cyan-500/50 transition-colors group">
                        <div className="mb-4 text-slate-600 group-hover:text-cyan-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-all duration-300 origin-left">
                            <Icon size={32} strokeWidth={1.5} />
                        </div>
                        <p className="text-slate-500 text-sm group-hover:text-slate-400 transition-colors">{spec.label}</p>
                        <p className="text-2xl text-white font-mono group-hover:text-cyan-400 transition-colors">{spec.value}</p>
                    </div>
                );
            })}
        </div>
      </div>

      {/* Marquee */}
      <div className="relative w-full py-12 bg-gradient-to-r from-cyan-900/10 to-blue-900/10 border-y border-white/5">
        <div className="flex overflow-hidden group">
            <motion.div 
                className="flex space-x-20 whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
                {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
                    <span 
                        key={i} 
                        className="text-3xl font-bold text-white/20 uppercase tracking-widest 
                                   hover:text-cyan-400 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] 
                                   transition-all duration-300 cursor-default select-none"
                    >
                        {logo}
                    </span>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;