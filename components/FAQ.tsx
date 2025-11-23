
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        q: "Ist die KI-Telefonie DSGVO-konform?",
        a: "Ja. Wir nutzen Serverstandorte in Frankfurt (EU) und Enterprise-Level Verschlüsselung. Wir bieten Optionen zur Anonymisierung von PII-Daten (Personally Identifiable Information) und schließen AV-Verträge (Auftragsverarbeitungsverträge) nach deutschem Recht ab."
    },
    {
        q: "Klingt die Stimme wirklich menschlich?",
        a: "Ja. Unsere Modelle (basierend auf VAPI & ElevenLabs Turbo v2.5) haben eine Latenz von unter 500ms. Sie verstehen Unterbrechungen ('Interruptibility'), atmen, machen Pausen und modulieren die Betonung. In 90% der Fälle merkt der Anrufer nicht sofort, dass er mit einer KI spricht."
    },
    {
        q: "Wie lange dauert die Implementierung?",
        a: "Für Standard-Use-Cases (z.B. Terminvereinbarung) benötigen wir ca. 7-14 Tage bis zum Go-Live. Komplexe Custom-Integrationen (tiefe SAP/Salesforce Anbindung) dauern ca. 3-4 Wochen. Wir arbeiten agil."
    },
    {
        q: "Kann ich meine bestehende Telefonnummer behalten?",
        a: "Absolut. Wir richten eine Rufweiterleitung ein oder portieren Ihre Nummer via SIP-Trunking (Twilio / Vonage). Die KI integriert sich nahtlos in Ihre bestehende Telefonanlage (TK-Anlage)."
    },
    {
        q: "Was passiert, wenn die KI keine Antwort weiß?",
        a: "Sicherheit geht vor. Wenn der Confidence-Score der KI unter einen Schwellenwert fällt oder der Kunde frustriert wirkt (Sentiment Analysis), leitet das System den Anruf sofort und nahtlos an einen menschlichen Mitarbeiter weiter ('Smart Handoff')."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-zinc-950 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Häufige Fragen</h2>
                    <p className="text-slate-400">Transparenz ist unser Fundament.</p>
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
