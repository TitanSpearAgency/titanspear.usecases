
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Send, Play, Pause, RefreshCw, MessageSquare, Phone, UtensilsCrossed, CheckCircle2 } from 'lucide-react';

const DEMO_SCRIPT = [
    { role: 'ai', text: "Guten Abend, Ristorante Roma, Julia am Apparat. Wie kann ich Ihnen helfen?", audioDuration: 3000 },
    { role: 'user', text: "Ja hallo, ich würde gerne einen Tisch für morgen Abend reservieren.", audioDuration: 3500 },
    { role: 'ai', text: "Gerne. Für wie viele Personen darf ich reservieren?", audioDuration: 2500 },
    { role: 'user', text: "Wir sind zu viert. Geht es so gegen 19 Uhr?", audioDuration: 3000 },
    { role: 'ai', text: "Einen Moment, ich schaue in den Kalender... Ja, um 19:00 Uhr habe ich noch einen schönen Tisch am Fenster frei. Soll ich den für Sie eintragen?", audioDuration: 5000 },
    { role: 'user', text: "Das klingt super. Habt ihr auch vegane Gerichte?", audioDuration: 3000 },
    { role: 'ai', text: "Absolut. Wir haben eine separate vegane Karte mit hausgemachter Pasta und Trüffel. Möchten Sie, dass ich Ihnen das Menü vorab per WhatsApp sende?", audioDuration: 5500 },
    { role: 'user', text: "Oh ja, gerne. Vielen Dank!", audioDuration: 2000 },
    { role: 'ai', text: "Alles klar, ist erledigt. Ich habe den Tisch für 4 Personen morgen um 19 Uhr notiert. Wir freuen uns auf Sie! Ciao.", audioDuration: 5000 }
];

const InteractiveDemo: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll logic
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [currentStep]);

    // Simulation logic
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        if (isPlaying && currentStep < DEMO_SCRIPT.length) {
            const stepDuration = DEMO_SCRIPT[currentStep].audioDuration + 500; // Add pause
            timer = setTimeout(() => {
                setCurrentStep(prev => prev + 1);
            }, stepDuration);
        } else if (currentStep >= DEMO_SCRIPT.length) {
            setIsPlaying(false);
        }

        return () => clearTimeout(timer);
    }, [isPlaying, currentStep]);

    const handleReset = () => {
        setIsPlaying(false);
        setCurrentStep(0);
    };

    const handleStart = () => {
        if (currentStep >= DEMO_SCRIPT.length) {
            setCurrentStep(0);
        }
        setIsPlaying(true);
    };

    return (
        <section className="py-24 bg-zinc-900 border-y border-white/5 relative overflow-hidden">
             {/* Background Elements */}
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none" />
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16">
                
                {/* TEXT CONTENT SIDE */}
                <div className="flex-1 space-y-8">
                    <div>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Live Experience
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Erleben Sie die <span className="text-cyan-400">Natürlichkeit</span> unserer KI.
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Vergessen Sie robotische "Drücken Sie die Eins"-Systeme. Unsere Agenten verstehen Kontext, Nuancen, Unterbrechungen und Emotionen. 
                            Sie führen Gespräche so flüssig, dass 90% Ihrer Kunden nicht merken, dass sie mit einer Software sprechen.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-5 rounded-xl bg-black border border-white/10 hover:border-cyan-500/30 transition-colors">
                            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                <Phone size={18} className="text-cyan-500" />
                                <span className="text-sm uppercase tracking-wide">Full Duplex Audio</span>
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Unsere KI kann unterbrochen werden. Wenn der Kunde "Warte mal" sagt, stoppt sie sofort und hört zu – genau wie ein Mensch.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-black border border-white/10 hover:border-cyan-500/30 transition-colors">
                            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-emerald-500" />
                                <span className="text-sm uppercase tracking-wide">Real-Time Action</span>
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Während des Gesprächs prüft die KI Datenbanken (z.B. OpenTable) und führt Buchungen in Millisekunden aus.
                            </p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <p className="text-xs text-slate-500 font-mono mb-2">
                            LATENZ: &lt; 500ms | STIMME: "JULIA" (VAPI MODEL V2)
                        </p>
                        <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-cyan-500"
                                initial={{ width: "0%" }}
                                animate={{ width: isPlaying ? "100%" : "0%" }}
                                transition={{ duration: 30, ease: "linear" }}
                            />
                        </div>
                    </div>
                </div>

                {/* INTERACTIVE DEMO PHONE UI */}
                <div className="flex-1 w-full max-w-md relative">
                    {/* Phone Frame */}
                    <div className="relative z-10 bg-black border-[8px] border-slate-800 rounded-[3rem] shadow-2xl h-[650px] overflow-hidden flex flex-col">
                        {/* Dynamic Island / Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20 border-b border-x border-slate-800" />

                        {/* Screen Content */}
                        <div className="flex-1 bg-slate-950 flex flex-col relative">
                            {/* Header */}
                            <div className="h-24 bg-gradient-to-b from-slate-900 to-transparent p-6 pt-10 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-black shadow-[0_0_15px_cyan]">
                                    <UtensilsCrossed size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">Ristorante Roma</h3>
                                    <p className="text-cyan-500 text-xs font-mono animate-pulse">
                                        {isPlaying ? "● Verbunden (AI Agent)" : "○ Bereit"}
                                    </p>
                                </div>
                            </div>

                            {/* Chat / Transcript Area */}
                            <div 
                                ref={scrollRef}
                                className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide mask-image-gradient"
                            >
                                <AnimatePresence mode='popLayout'>
                                    {DEMO_SCRIPT.slice(0, currentStep + (isPlaying ? 1 : 0)).map((msg, index) => {
                                         // Don't show the "next" message fully until it's "spoken" (simulated by index check)
                                         if (index > currentStep) return null;
                                         
                                         return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                            >
                                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-lg ${
                                                    msg.role === 'user' 
                                                    ? 'bg-cyan-600 text-white rounded-br-none' 
                                                    : 'bg-slate-800 text-slate-200 rounded-bl-none border border-white/10'
                                                }`}>
                                                    {msg.text}
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                    {/* Typing Indicator for AI */}
                                    {isPlaying && currentStep < DEMO_SCRIPT.length && DEMO_SCRIPT[currentStep].role === 'ai' && (
                                         <motion.div 
                                            initial={{ opacity: 0 }} 
                                            animate={{ opacity: 1 }}
                                            className="flex justify-start"
                                         >
                                             <div className="bg-slate-800 p-3 rounded-2xl rounded-bl-none flex gap-1 items-center h-10 w-16 justify-center">
                                                 <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-0"/>
                                                 <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-150"/>
                                                 <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-300"/>
                                             </div>
                                         </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Controls Overlay */}
                            <div className="p-6 pb-8 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent">
                                {/* Waveform Visualizer */}
                                <div className="flex items-center justify-center gap-1 h-12 mb-6">
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-1 bg-cyan-500 rounded-full"
                                            animate={{ 
                                                height: isPlaying ? [10, Math.random() * 40 + 10, 10] : 4,
                                                opacity: isPlaying ? 1 : 0.3
                                            }}
                                            transition={{
                                                duration: 0.2,
                                                repeat: Infinity,
                                                repeatType: "mirror"
                                            }}
                                        />
                                    ))}
                                </div>

                                <div className="flex justify-center gap-4">
                                    <button 
                                        onClick={isPlaying ? () => setIsPlaying(false) : handleStart}
                                        className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                    >
                                        {isPlaying ? <Pause size={28} fill="black" /> : <Play size={28} fill="black" className="ml-1" />}
                                    </button>
                                    <button 
                                        onClick={handleReset}
                                        className="w-12 h-12 rounded-full bg-slate-800 text-slate-400 border border-slate-700 flex items-center justify-center hover:bg-slate-700 hover:text-white transition-colors"
                                    >
                                        <RefreshCw size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Decorative Elements around phone */}
                    <div className="absolute -z-10 top-20 -right-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />
                    <div className="absolute -z-10 bottom-20 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
                </div>
            </div>
        </section>
    );
};

export default InteractiveDemo;
