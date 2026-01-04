
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RefreshCw, CheckCircle2, Calendar, TrendingUp, UserCheck, MessageSquare } from 'lucide-react';

const DEMO_SCRIPT = [
    { role: 'ai', text: "Guten Abend, Ristorante Roma, Julia am Apparat. Wie kann ich dir helfen?", audioDuration: 3000, status: "Anruf entgegennehmen" },
    { role: 'user', text: "Ja hallo, ich würde gerne einen Tisch für morgen Abend reservieren.", audioDuration: 3500, status: "Anliegen: Reservierung" },
    { role: 'ai', text: "Gerne. Für wie viele Personen darf ich reservieren?", audioDuration: 2500, status: "Datenabfrage: Personen" },
    { role: 'user', text: "Wir sind zu viert. Geht es so gegen 19 Uhr?", audioDuration: 3000, status: "Datenabfrage: Zeit" },
    { role: 'ai', text: "Einen Moment, ich schaue in den Kalender... Ja, um 19:00 Uhr habe ich noch einen schönen Tisch am Fenster frei. Soll ich den für dich eintragen?", audioDuration: 5000, status: "Live-Check: Verfügbarkeit" },
    { role: 'user', text: "Das klingt super. Habt ihr auch vegane Gerichte?", audioDuration: 3000, status: "Rückfrage: Speisekarte" },
    { role: 'ai', text: "Absolut. Wir haben eine separate vegane Karte mit hausgemachter Pasta und Trüffel. Möchtest du, dass ich dir das Menü vorab per WhatsApp sende?", audioDuration: 5500, status: "Upsell / Service" },
    { role: 'user', text: "Oh ja, gerne. Vielen Dank!", audioDuration: 2000, status: "Bestätigung erhalten" },
    { role: 'ai', text: "Alles klar, ist erledigt. Ich habe den Tisch für 4 Personen morgen um 19 Uhr notiert. Wir freuen uns auf euch! Ciao.", audioDuration: 5000, status: "Abschluss: Buchung fixiert" }
];

const InteractiveDemo: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

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

    const currentStatus = currentStep < DEMO_SCRIPT.length ? DEMO_SCRIPT[currentStep].status : "Buchung erfolgreich";
    const progress = (currentStep / DEMO_SCRIPT.length) * 100;

    return (
        <section className="py-24 bg-zinc-900 border-y border-white/5 relative overflow-hidden">
             {/* Background Elements */}
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none" />
             
            <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16">
                
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
                            Erlebe die <span className="text-cyan-400">Natürlichkeit</span> unserer KI.
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Vergiss robotische "Drücken Sie die Eins"-Systeme. Unsere Agenten verstehen Kontext, Nuancen und Emotionen. 
                            Sie führen Gespräche so flüssig, dass 90% deiner Kunden nicht merken, dass sie mit einer Software sprechen.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-5 rounded-xl bg-black border border-white/10 hover:border-cyan-500/30 transition-colors">
                            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                <MessageSquare size={18} className="text-cyan-500" />
                                <span className="text-sm uppercase tracking-wide">Full Duplex Audio</span>
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Die KI kann unterbrochen werden. Wenn der Kunde "Warte mal" sagt, stoppt sie sofort und hört zu – genau wie ein Mensch.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-black border border-white/10 hover:border-cyan-500/30 transition-colors">
                            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-emerald-500" />
                                <span className="text-sm uppercase tracking-wide">Real-Time Action</span>
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Während des Gesprächs prüft die KI Datenbanken und führt Buchungen in Millisekunden aus.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RESULT VISUALIZATION (No Phone) */}
                <div className="flex-1 w-full max-w-lg relative">
                    <div className="relative bg-black border border-white/10 rounded-2xl shadow-2xl p-8 overflow-hidden">
                        
                        {/* Status Bar */}
                        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                            <div className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-slate-700'}`} />
                                <span className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
                                    {isPlaying ? "KI Aktiv" : "KI Bereit"}
                                </span>
                            </div>
                            <div className="text-xs text-slate-500 font-mono">
                                Session ID: #8X92
                            </div>
                        </div>

                        {/* Central Result Visualization */}
                        <div className="h-64 flex flex-col items-center justify-center relative">
                            
                            {/* Animated Rings */}
                            {isPlaying && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <motion.div 
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }} 
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-40 h-40 rounded-full border border-cyan-500/30"
                                    />
                                    <motion.div 
                                        animate={{ scale: [1, 2, 1], opacity: [0.2, 0, 0.2] }} 
                                        transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                                        className="w-60 h-60 rounded-full border border-cyan-500/20"
                                    />
                                </div>
                            )}

                            {/* Main Card Transition */}
                            <AnimatePresence mode='wait'>
                                {currentStep < DEMO_SCRIPT.length ? (
                                    <motion.div 
                                        key="processing"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-center z-10"
                                    >
                                        <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-700">
                                            <RefreshCw className={`text-cyan-500 ${isPlaying ? 'animate-spin' : ''}`} size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Verarbeite Gespräch...</h3>
                                        <p className="text-cyan-400 font-mono text-sm">{currentStatus}</p>
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="w-full bg-zinc-900 border border-emerald-500/30 rounded-xl p-6 text-center z-10 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                                    >
                                        <div className="w-16 h-16 bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/50">
                                            <CheckCircle2 className="text-emerald-400" size={32} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-1">Erfolg!</h3>
                                        <p className="text-slate-400 text-sm mb-6">Das Ergebnis für dein Business:</p>
                                        
                                        <div className="grid grid-cols-2 gap-3 text-left">
                                            <div className="bg-black/50 p-3 rounded-lg border border-white/5">
                                                <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase font-bold mb-1">
                                                    <Calendar size={12} /> Tisch
                                                </div>
                                                <div className="text-white font-bold">4 Pers. / 19:00</div>
                                            </div>
                                            <div className="bg-black/50 p-3 rounded-lg border border-white/5">
                                                <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase font-bold mb-1">
                                                    <TrendingUp size={12} /> Umsatz
                                                </div>
                                                <div className="text-emerald-400 font-bold">+180,00 €</div>
                                            </div>
                                            <div className="col-span-2 bg-black/50 p-3 rounded-lg border border-white/5">
                                                <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase font-bold mb-1">
                                                    <UserCheck size={12} /> Kunde
                                                </div>
                                                <div className="text-slate-300 text-xs">Menü per WhatsApp gesendet. Kunde sehr zufrieden.</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Controls */}
                        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                             <div className="flex items-center gap-4">
                                <button 
                                    onClick={isPlaying ? () => setIsPlaying(false) : handleStart}
                                    className="w-12 h-12 rounded-full bg-white hover:bg-cyan-400 text-black flex items-center justify-center transition-all"
                                >
                                    {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" className="ml-1" />}
                                </button>
                                <button 
                                    onClick={handleReset}
                                    className="w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                                >
                                    <RefreshCw size={16} />
                                </button>
                             </div>

                             {/* Waveform */}
                             <div className="flex items-center gap-0.5 h-8">
                                {Array.from({ length: 15 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1 bg-cyan-500/50 rounded-full"
                                        animate={{ 
                                            height: isPlaying ? [5, Math.random() * 20 + 5, 5] : 4,
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
                        </div>

                        {/* Progress Bar */}
                        <div className="absolute bottom-0 left-0 h-1 bg-cyan-500 transition-all duration-300" style={{ width: `${progress}%` }} />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveDemo;
