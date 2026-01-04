
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, GraduationCap, Cpu, Code, Zap, FileCheck } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Certificate Visualization - Enhanced to look like the real document */}
          <div className="lg:col-span-6 relative group perspective-1000">
            <motion.div 
                initial={{ opacity: 0, rotateY: -10 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative bg-white text-black rounded-lg shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden aspect-[1/1.414] max-w-[450px] mx-auto flex flex-col p-12"
            >
                {/* Vertical Sidebar Text (Simulating the 'EVERLAST' repeat from screenshot) */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-950 flex flex-col items-center justify-around py-4 overflow-hidden select-none">
                    {Array.from({length: 12}).map((_, i) => (
                        <span key={i} className="text-[6px] text-zinc-700 font-bold uppercase tracking-widest whitespace-nowrap -rotate-90">
                            EVERLAST VERIFIED CERTIFICATE
                        </span>
                    ))}
                </div>

                <div className="pl-6 flex-1 flex flex-col">
                    {/* Header Logos */}
                    <div className="flex justify-between items-start mb-12">
                         <div className="w-10 h-10 bg-zinc-900 rounded-sm flex items-center justify-center text-white font-serif text-xl">E</div>
                         <div className="flex flex-col items-end gap-1 opacity-20">
                             <div className="w-12 h-1 bg-zinc-400 rounded-full" />
                             <div className="w-8 h-1 bg-zinc-400 rounded-full" />
                         </div>
                    </div>

                    <div className="text-center mb-10">
                        <h2 className="text-5xl font-bold tracking-tight mb-4">Zertifikat</h2>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-10">hiermit bestätigen wir, dass</p>
                        <p className="text-4xl font-black mb-10 italic">Flo Knies</p>
                        <p className="text-[10px] leading-relaxed text-zinc-600 max-w-[280px] mx-auto">
                            erfolgreich an der 12-wöchigen Fort- und Weiterbildung (170 UE) teilgenommen hat und sich durch nachhaltig erworbene theoretische und praktische Kompetenz qualifizieren konnte zum
                        </p>
                    </div>

                    <div className="text-center mb-10">
                        <p className="text-2xl font-black uppercase tracking-tight text-zinc-900 border-y border-zinc-200 py-4">
                            Zertifizierten AI Automations Manager
                        </p>
                    </div>

                    <div className="text-[9px] text-zinc-500 space-y-1 mb-12 text-center italic">
                        <p>Der Inhalt bestand aus den Themen:</p>
                        <p>Einführung in Künstliche Intelligenz und digitale Prozesse</p>
                        <p>Entwicklung von KI- und Digitalisierungsstrategien für Unternehmen</p>
                        <p>Advanced Prompt Engineering und Bedienung von KI-Modellen (LLMs)</p>
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-8 text-[9px] border-t border-zinc-100 pt-8">
                        <div className="text-center">
                            <div className="h-0.5 bg-zinc-300 w-full mb-2" />
                            <p className="font-bold">Leonard M. Schmedding</p>
                            <p className="text-zinc-400 uppercase">Everlast Consulting GmbH</p>
                        </div>
                        <div className="text-center">
                             <div className="h-0.5 bg-zinc-300 w-full mb-2" />
                            <p className="font-bold">Viktor Schöck</p>
                            <p className="text-zinc-400 uppercase">Everlast Consulting GmbH</p>
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-12 text-[8px] font-mono text-zinc-400">
                        Nr. 10119 | Neu-Ulm, 30. November 2025
                    </div>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-12 right-12">
                     <div className="w-16 h-16 rounded-full border-4 border-emerald-500/10 flex flex-col items-center justify-center p-2">
                        <div className="w-full h-full rounded-full bg-emerald-500 flex items-center justify-center text-white">
                            <FileCheck size={32} />
                        </div>
                     </div>
                </div>
            </motion.div>
          </div>

          {/* Right: Content & Modules */}
          <div className="lg:col-span-6">
            <div className="mb-12">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-6"
              >
                Geprüfte Kompetenz
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Strategische Exzellenz <br/>
                <span className="text-cyan-500">Akkreditiert & Geprüft</span>
              </h2>
              <p className="text-xl text-slate-400 font-light leading-relaxed max-w-xl">
                Keine Experimente. Unsere Beratung basiert auf dem Goldstandard der deutschen KI-Fortbildung. Flo Knies verbindet betriebswirtschaftliches Fachwissen mit technischer Implementierungsstärke.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Cpu, title: "KI-Strategie", desc: "Zertifizierte Blueprints für Enterprise-Automatisierung." },
                { icon: Zap, title: "Prompt Engineering", desc: "Präzise Steuerung komplexer Sprachmodelle (LLMs)." },
                { icon: Code, title: "AI-Programming", desc: "Python-basierte Agenten-Entwicklung für Workflows." },
                { icon: GraduationCap, title: "170 UE Studium", desc: "Tiefgehende theoretische & praktische Ausbildung." }
              ].map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all group hover:bg-white/[0.07]"
                >
                  <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-cyan-500 shrink-0 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
