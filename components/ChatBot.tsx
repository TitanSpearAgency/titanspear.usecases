import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { USE_CASES_DATA } from '../constants';
import { X, Send, Bot, Loader2, Sparkles, ChevronUp, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const SYSTEM_INSTRUCTION = `
Du bist der Senior Automation Consultant von "titanspear.ai". 
Deine Aufgabe ist es, Website-Besucher zu beraten und ihnen die passenden Automatisierungs-Lösungen aus unserem Portfolio zu verkaufen.

HIER IST DEIN WISSEN (UNSERE USE CASES):
${JSON.stringify(USE_CASES_DATA, null, 2)}

VERHALTENSREGELN:
1. Analysiere das Problem des Nutzers.
2. Suche im "Wissen" nach dem passenden Use Case (nutze die ID oder den Titel).
3. Erkläre die Lösung kurz und prägnant. Fokussiere dich IMMER auf den ROI (Zahlen, Geld, Zeitersparnis aus den Daten).
4. Sei professionell, "Cyber-Corporate", und selbstbewusst.
5. Wenn du einen Use Case empfiehlst, nenne konkrete Zahlen aus den Daten (z.B. "Spart 15h/Woche").
6. Sprich Deutsch.
7. Halte Antworten unter 100 Wörtern, wenn möglich. Sei knackig.

Beispiel User: "Wir haben zu viele Retouren."
Beispiel Antwort: "Das ist ein klassischer Profit-Killer. Ich empfehle unsere 'Retouren-Prävention'. Unsere KI ruft Kunden proaktiv an und klärt Bedienfehler. Das senkt Retouren um 35% und rettet ca. 15€ pro Paket. Soll ich mehr dazu sagen?"
`;

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: 'Willkommen bei titanspear.ai. Ich bin Ihr AI-Consultant. Welchen Prozess möchten Sie automatisieren?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const getClient = async () => {
        // Access window.aistudio safely with casting
        if (typeof window !== 'undefined') {
            const win = window as any;
            if (win.aistudio) {
                const hasKey = await win.aistudio.hasSelectedApiKey();
                if (!hasKey) {
                    await win.aistudio.openSelectKey();
                }
            }
        }
        
        let apiKey = '';
        try {
            // Strict safe access for deployment build
            const proc = (typeof process !== 'undefined' ? process : { env: {} }) as any;
            if (proc && proc.env) {
                apiKey = proc.env.API_KEY || '';
            }
        } catch (e) {}

        return new GoogleGenAI({ apiKey });
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInput('');
        setIsLoading(true);

        try {
            const ai = await getClient();
            
            const chat = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: SYSTEM_INSTRUCTION,
                    temperature: 0.7,
                },
                history: messages.map(m => ({
                    role: m.role,
                    parts: [{ text: m.text }]
                }))
            });

            const result = await chat.sendMessage({ message: userMsg });
            const responseText = result.text;

            setMessages(prev => [...prev, { role: 'model', text: responseText || "Entschuldigung, ich konnte keine Antwort generieren." }]);

        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, { role: 'model', text: "Verbindungsfehler. Bitte stellen Sie sicher, dass ein API Key gewählt ist." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* New "Pill" Style Trigger Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pl-4 pr-5 py-3 bg-gradient-to-r from-cyan-900 to-black border border-cyan-500/50 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] group hover:scale-105 transition-all"
                        onClick={() => setIsOpen(true)}
                    >
                        {/* Icon Container with Pulse */}
                        <div className="relative w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-black">
                             <Sparkles size={16} className="animate-pulse" />
                             <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-30" />
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col items-start text-left">
                            <span className="text-[10px] text-cyan-400 uppercase font-bold tracking-wider leading-none mb-0.5">
                                AI Consultant
                            </span>
                            <span className="text-sm text-white font-bold leading-none">
                                Beratung Starten
                            </span>
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Close Button (Only visible when open) */}
            {isOpen && (
                 <motion.button
                    className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-black/80 border border-slate-700 text-slate-400 hover:text-white hover:border-white rounded-full flex items-center justify-center transition-all shadow-xl"
                    onClick={() => setIsOpen(false)}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                 >
                     <ChevronUp size={24} className="rotate-180" />
                 </motion.button>
            )}

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-24 right-4 md:right-6 z-50 w-[90vw] md:w-[400px] h-[500px] md:h-[600px] bg-black/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/5"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-cyan-950/80 to-slate-900/80 border-b border-white/10 flex items-center gap-3 justify-between backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center relative shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                                    <Bot size={20} className="text-cyan-400" />
                                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-black" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm tracking-tight">titanspear.ai Consultant</h3>
                                    <p className="text-cyan-500 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1 opacity-80">
                                        <Sparkles size={8} /> Powered by Gemini 2.5
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                            {messages.map((msg, idx) => (
                                <motion.div 
                                    key={idx} 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} group`}
                                >
                                    {msg.role === 'model' && (
                                        <div className="w-6 h-6 rounded-full bg-cyan-900/50 border border-cyan-500/20 flex items-center justify-center mr-2 mt-1 shrink-0">
                                            <Bot size={12} className="text-cyan-400" />
                                        </div>
                                    )}
                                    
                                    <div 
                                        className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-lg backdrop-blur-md border transition-all duration-300 ${
                                            msg.role === 'user' 
                                            ? 'bg-cyan-600/90 text-white rounded-2xl rounded-br-sm border-cyan-500/50 hover:scale-[1.02] origin-bottom-right' 
                                            : 'bg-slate-800/60 text-slate-200 rounded-2xl rounded-bl-sm border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:bg-slate-800/80 hover:text-white'
                                        }`}
                                    >
                                        {msg.text}
                                    </div>

                                    {msg.role === 'user' && (
                                        <div className="w-6 h-6 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center ml-2 mt-1 shrink-0">
                                            <User size={12} className="text-slate-400" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start pl-8">
                                    <div className="bg-slate-800/40 border border-white/5 p-3 rounded-2xl rounded-bl-none flex items-center gap-3 shadow-sm">
                                        <Loader2 size={16} className="animate-spin text-cyan-500" />
                                        <span className="text-xs text-slate-500 animate-pulse">Analysiere Daten...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-black/60 backdrop-blur-md">
                            <div className="relative flex items-center group">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Beschreiben Sie Ihr Problem..."
                                    className="w-full bg-slate-900/80 border border-slate-700 text-white rounded-full py-3.5 pl-5 pr-14 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500 group-hover:border-slate-600"
                                />
                                <button 
                                    onClick={handleSend}
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 p-2 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-600 rounded-full text-white transition-all hover:scale-105 active:scale-95 shadow-lg"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                            <div className="text-[10px] text-center text-slate-600 mt-2 font-medium">
                                titanspear.ai Bot kann Fehler machen. Überprüfen Sie wichtige Infos.
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;
