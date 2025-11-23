
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play, ShieldCheck, Server, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505] pt-0">
      
      {/* 3D Cyber Grid Background */}
      <div className="absolute inset-0 perspective-1000 overflow-hidden">
        <motion.div 
            style={{ y: yBg }}
            className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d420_1px,transparent_1px),linear-gradient(to_bottom,#06b6d420_1px,transparent_1px)] bg-[size:60px_60px] [transform:rotateX(60deg)_scale(2)] origin-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl px-4 flex flex-col items-center">
        
        {/* Trust / Authority Badge */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8 text-xs font-bold tracking-widest text-slate-500 uppercase"
        >
            <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-cyan-500" /> DSGVO-Konform</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
            <span className="flex items-center gap-1"><Server size={12} className="text-cyan-500" /> Server in DE</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
            <span className="flex items-center gap-1"><Lock size={12} className="text-cyan-500" /> Enterprise Security</span>
        </motion.div>

        {/* Glitch Headline */}
        <div className="relative mb-8 group">
            <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight"
            >
                TITAN
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 relative">
                    SPEAR
                    <span className="absolute inset-0 bg-cyan-400/20 blur-lg"></span>
                </span>
                <span className="text-cyan-500">.AI</span>
            </motion.h1>
            <div className="absolute -inset-2 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen" />
        </div>

        {/* Subheadline - SEO Optimized for "Agentur Automatisierung" & "Voice Bot" */}
        <motion.p 
            style={{ opacity: opacityText }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl font-light leading-relaxed"
        >
            Ersetzen Sie Warteschleifen durch <span className="text-white font-medium">Intelligenz</span>. <br/>
            Wir implementieren autonome <span className="text-cyan-400">Voice- & n8n-Systeme</span>, die 
            Ihren Umsatz steigern und Personalengpässe dauerhaft lösen.
        </motion.p>

        {/* High-Tech Visualizer (Abstract) */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full max-w-lg h-16 flex items-center justify-center gap-1 mb-12 opacity-80"
        >
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="w-2 bg-cyan-500 shadow-[0_0_10px_cyan]"
                    animate={{ 
                        height: ["10%", "100%", "10%"],
                        backgroundColor: ["#06b6d4", "#ffffff", "#06b6d4"]
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.05,
                        ease: "easeInOut",
                        repeatType: "mirror"
                    }}
                />
            ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
        >
            <a 
                href="https://titanspear.agency/kontakt/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-none skew-x-[-10deg] hover:bg-cyan-400 transition-colors min-w-[200px]"
            >
                <div className="skew-x-[10deg] flex items-center justify-center gap-2">
                    <Play size={20} fill="black" />
                    BERATUNG BUCHEN
                </div>
                <div className="absolute inset-0 border border-white group-hover:border-cyan-400 skew-x-[0deg] scale-105 opacity-0 group-hover:opacity-100 transition-all" />
            </a>

            <button 
                onClick={() => document.getElementById('usecases')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-transparent text-white font-bold text-lg rounded-none skew-x-[-10deg] border border-slate-700 hover:border-cyan-500 transition-colors min-w-[200px]"
            >
                <div className="skew-x-[10deg]">
                    LÖSUNGEN ANSEHEN
                </div>
            </button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-500/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
