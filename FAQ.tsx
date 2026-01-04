
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        q: "Ist das alles DSGVO-konform?",
        a: "Ja, absolut. Wir nutzen Server in Frankfurt (EU) und sichere Verschlüsselung. Deine Kundendaten sind sicher und wir schließen offizielle AV-Verträge nach deutschem Recht mit dir ab."
    },
    {
        q: "Klingt die Stimme wirklich echt?",
        a: "Ja. Unsere KI atmet, macht Pausen und versteht Emotionen. In 90% der Fälle merken deine Anrufer nicht, dass sie mit einer Software sprechen. Probier es einfach aus."
    },
    {
        q: "Wie schnell kann ich starten?",
        a: "Für Standard-Lösungen brauchen wir ca. 7-14 Tage. Wir arbeiten schnell, damit du sofort Ergebnisse siehst und Geld sparst."
    },
    {
        q: "Kann ich meine Nummer behalten?",
        a: "Klar. Wir richten einfach eine Weiterleitung ein. Deine Kunden rufen weiterhin die Nummer an, die sie kennen."
    },
    {
        q: "Was, wenn die KI keine Antwort weiß?",
        a: "Dann leitet sie den Anruf sofort an dich oder dein Team weiter ('Smart Handoff'). Du hast immer die Kontrolle."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-zinc-950 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Häufige Fragen</h2>
                    <p className="text-slate-400">Keine Geheimnisse. Hier sind die Antworten.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-lg bg-zinc-900/50 overflow-hidden">
                            <button 
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-medium text-white pr-8">{faq.q}</span>
                                <div className={`shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                                    {openIndex === i ? <Minus className="text-cyan-500" /> : <Plus className="text-slate-500" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-slate-400 leading-relaxed text-sm border-t border-white/5">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
