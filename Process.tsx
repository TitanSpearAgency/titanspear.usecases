
import React from 'react';
import { Search, Zap, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: Search,
        title: "1. Deine Analyse",
        desc: "Wir schauen uns an, wo du die meiste Zeit und das meiste Geld verlierst. Kein Bla-Bla, sondern klarer Fokus auf deinen Gewinn.",
        color: "text-blue-400"
    },
    {
        icon: Zap,
        title: "2. Schnelle Integration",
        desc: "Wir docken unsere Lösung einfach an deine bestehenden Systeme an. Deine Kunden merken den Unterschied sofort, du hast weniger Stress.",
        color: "text-cyan-400"
    },
    {
        icon: Rocket,
        title: "3. Dein Wachstum",
        desc: "Ab Tag 1 bist du 24/7 erreichbar und produktiv. Du kümmerst dich um dein Business, unsere KI kümmert sich um den Rest.",
        color: "text-emerald-400"
    }
];

const Process: React.FC = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-cyan-500 font-mono text-xs uppercase tracking-widest mb-2 block">Dein Vorteil</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ergebnisse statt <span className="text-cyan-400">Experimente</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Wir liefern keine Baustellen, sondern fertige Lösungen. Unser Fokus liegt zu 100% auf deinem geschäftlichen Erfolg.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative bg-zinc-900/50 border border-white/10 p-8 rounded-2xl group hover:border-cyan-500/30 transition-all"
                        >
                            {/* Connector Line (Desktop) */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent z-20" />
                            )}

                            <div className={`w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform ${step.color}`}>
                                <step.icon size={32} />
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
