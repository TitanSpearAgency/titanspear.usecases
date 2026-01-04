
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play, ShieldCheck, Server, Award, CheckCircle, ShieldAlert } from 'lucide-react';
import { SplineScene } from "./ui/spline";
import { Spotlight } from "./ui/spotlight";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-black pt-20 md:pt-0 overflow-visible">
      
      {/* 3D Cyber Grid Background */}
      <div className="absolute inset-0 perspective-1000 pointer-events-none">
        <motion.div 
            style={{ y: yBg }}
            className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d420_1px,transparent_1px),linear-gradient(to_bottom,#06b6d420_1px,transparent_1px)] bg-[size:60px_60px] [transform:rotateX(60deg)_scale(2)] origin-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* Left Column: Text (Takes up half) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left pt-10 lg:pt-0 relative z-30">
            {/* Authority Badge */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center gap-3 mb-8"
            >
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                    <Award size={12} /> Staatlich Akkreditiert
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                    <CheckCircle size={12} /> BAFA-förderfähig
                </div>
            </motion.div>

            {/* Headline */}
            <div className="relative mb-6 group">
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]"
                >
                    VOICE <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 relative">
                        AUTONOMIE
                    </span>
                </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p 
                style={{ opacity: opacityText }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-slate-400 mb-6 max-w-xl font-light leading-relaxed"
            >
                Titanspear.ai ist Ihr <span className="text-white font-medium italic">staatlich akkreditiertes Beratungsunternehmen</span> für skalierbare KI-Automatisierung. Wir transformieren Telefonie und Workflows in messbares Wachstum.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-2 mb-10 text-[11px] text-slate-500 font-mono uppercase tracking-wider"
            >
                <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-cyan-500" /> DSGVO Enterprise-Infrastruktur (EU-Server)
                </div>
                <div className="flex items-center gap-2">
                    <ShieldAlert size={14} className="text-cyan-500" /> VSH-versichert bis 5 Mio. EUR Projektwert
                </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
                <motion.a 
                    href="https://titanspear.agency/kontakt/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                    <Play size={20} fill="black" />
                    STRATEGIE-AUDIT
                </motion.a>

                <button 
                    onClick={() => document.getElementById('usecases')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-transparent text-white font-bold text-lg rounded-xl border border-slate-700 hover:border-cyan-500 transition-colors"
                >
                    100 USE-CASES
                </button>
            </motion.div>
        </div>

        {/* The Robot - Optimized scale for a more elegant look */}
        <div className="lg:col-span-6 relative h-[500px] lg:h-screen pointer-events-none flex items-center justify-center">
             <div className="absolute w-[180%] h-[180%] pointer-events-auto flex items-center justify-center overflow-visible">
                 <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full scale-[0.45] lg:scale-[0.55] transition-transform duration-1000"
                />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-500/50 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
