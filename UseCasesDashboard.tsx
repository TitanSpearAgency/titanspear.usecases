
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { USE_CASES_DATA, ICON_MAP } from '../constants';
import { UseCase } from '../types';
import { 
    ArrowUpRight, Activity, X, ArrowRight, Star, Database, 
    Loader2, Search, ChevronRight, CheckCircle2, AlertCircle, Zap, ShieldCheck
} from 'lucide-react';
import { generateUseCaseImage } from '../services/genaiService';

const UseCaseModal: React.FC<{ data: UseCase; onClose: () => void }> = ({ data, onClose }) => {
    const Icon = ICON_MAP[data.iconName] || Activity;
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isImageLoading, setIsImageLoading] = useState(false);

    useEffect(() => {
        const fetchImage = async () => {
            setIsImageLoading(true);
            const url = await generateUseCaseImage(data.veoPrompt);
            if (url) setImageUrl(url);
            setIsImageLoading(false);
        };
        fetchImage();
    }, [data.veoPrompt]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/98 backdrop-blur-2xl cursor-pointer" />
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-6xl bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[95vh]"
            >
                <button onClick={onClose} className="absolute top-6 right-6 z-20 p-2 bg-black/50 rounded-full hover:bg-white hover:text-black text-slate-400 border border-white/10 transition-all">
                    <X size={24} />
                </button>

                {/* Left: AI Visualizer */}
                <div className="w-full md:w-2/5 bg-black relative flex flex-col border-r border-white/10 overflow-hidden min-h-[350px]">
                    {isImageLoading ? (
                        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-zinc-900/50">
                            <Loader2 className="w-12 h-12 text-cyan-500 animate-spin mb-4" />
                            <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] animate-pulse">Konstruiere Visualisierung...</p>
                        </div>
                    ) : imageUrl && (
                        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={imageUrl} alt={data.title} className="w-full h-full object-cover opacity-60" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10">
                        <div className="flex items-center gap-3 mb-4">
                             <div className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/30 text-[8px] font-bold text-emerald-400 uppercase tracking-widest">Live Engine</div>
                             <div className="px-2 py-0.5 rounded bg-blue-500/20 border border-blue-500/30 text-[8px] font-bold text-blue-400 uppercase tracking-widest">B2B SaaS Style</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="p-4 bg-black/60 rounded-2xl border border-white/10 backdrop-blur-md">
                                <div className="text-[10px] text-slate-500 uppercase mb-1">Einsatz-Bereit</div>
                                <div className="text-xl font-bold text-white tracking-tight">7-14 Tage</div>
                            </div>
                            <div className="p-4 bg-black/60 rounded-2xl border border-white/10 backdrop-blur-md">
                                <div className="text-[10px] text-slate-500 uppercase mb-1">Automatisierung</div>
                                <div className="text-xl font-bold text-cyan-400">95% +</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Detailed Analysis */}
                <div className="w-full md:w-3/5 p-8 md:p-16 overflow-y-auto scrollbar-hide bg-zinc-950">
                    <div className="flex items-center gap-8 mb-14">
                         <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                             <Icon size={40} />
                         </div>
                         <div>
                             <span className="text-xs text-cyan-500 font-bold tracking-[0.2em] uppercase block mb-2">Technisches Whitepaper</span>
                             <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none">{data.title}</h2>
                         </div>
                    </div>

                    <div className="space-y-16">
                        <section className="relative">
                            <div className="absolute -left-10 top-1 w-1.5 h-10 bg-red-500/50 rounded-full blur-[2px]" />
                            <h3 className="text-xs font-bold text-red-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                                <AlertCircle size={16} /> Marktanalyse & Pain-Points
                            </h3>
                            <div className="space-y-6">
                                <p className="text-slate-200 leading-relaxed text-xl font-medium">{data.pain}</p>
                                <p className="text-slate-400 leading-relaxed text-lg font-light italic border-l border-white/10 pl-6">{data.detailedPain}</p>
                            </div>
                        </section>

                        <section className="relative">
                            <div className="absolute -left-10 top-1 w-1.5 h-10 bg-cyan-500/50 rounded-full blur-[2px]" />
                            <h3 className="text-xs font-bold text-cyan-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                                <Zap size={16} /> Technologische Lösung
                            </h3>
                            <div className="space-y-6">
                                <p className="text-slate-200 leading-relaxed text-xl font-medium">{data.solution}</p>
                                <p className="text-slate-400 leading-relaxed text-lg font-light">{data.detailedSolution}</p>
                            </div>
                        </section>

                        {data.benefits && (
                            <section>
                                <h3 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.3em] mb-8">Strategische Hebel (ROI)</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {data.benefits.map((b, i) => (
                                        <div key={i} className="flex items-center gap-5 p-5 bg-white/5 rounded-[1.5rem] border border-white/5 hover:border-white/10 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                                                <CheckCircle2 size={20} />
                                            </div>
                                            <span className="text-base text-slate-300 font-medium">{b}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        <div className="pt-14 border-t border-white/5">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <a href="https://titanspear.agency/kontakt/" target="_blank" className="w-full md:flex-1 py-6 bg-white hover:bg-cyan-400 text-black font-black rounded-[1.5rem] transition-all flex items-center justify-center gap-4 text-xl shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                                    Strategie-Audit buchen <ArrowRight size={28} />
                                </a>
                                <div className="flex items-center gap-3 px-6 py-4 rounded-[1.5rem] bg-zinc-900 border border-white/5 text-slate-500 text-xs font-mono">
                                    <ShieldCheck size={18} className="text-emerald-500" /> DSGVO / EU-Cloud
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const UseCaseCard: React.FC<{ data: UseCase; onClick: (data: UseCase) => void }> = ({ data, onClick }) => {
    const Icon = ICON_MAP[data.iconName] || Activity;
    return (
        <motion.div 
            onClick={() => onClick(data)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, borderColor: 'rgba(6,182,212,0.4)' }}
            className={`group relative p-8 bg-zinc-900/40 border border-white/10 rounded-[2rem] cursor-pointer transition-all overflow-hidden flex flex-col h-full ${data.highlight ? 'ring-2 ring-cyan-500/30 bg-cyan-500/5' : ''}`}
        >
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-[100px] pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 ${data.highlight ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'bg-black/60 text-slate-400 border-white/10 group-hover:text-cyan-400 group-hover:border-cyan-500/50'}`}>
                        <Icon size={26} />
                    </div>
                    {data.highlight && <div className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[9px] font-black text-cyan-400 uppercase tracking-[0.2em]">Strategisch</div>}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors">{data.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed line-clamp-3 mb-8 font-light italic opacity-70 group-hover:opacity-100 transition-opacity">{data.pain}</p>
                <div className="mt-auto flex justify-between items-center pt-6 border-t border-white/5">
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">Ready to deploy</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const UseCasesDashboard: React.FC = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(USE_CASES_DATA[0].id);
    const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const activeCategory = useMemo(() => USE_CASES_DATA.find(cat => cat.id === selectedCategoryId) || USE_CASES_DATA[0], [selectedCategoryId]);

    const filteredCases = useMemo(() => {
        const allCases = USE_CASES_DATA.flatMap(c => c.cases);
        if (!searchTerm.trim()) return activeCategory.cases;
        return allCases.filter(u => 
            u.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            u.pain.toLowerCase().includes(searchTerm.toLowerCase()) ||
            u.detailedPain?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, activeCategory]);

    return (
        <section className="py-32 bg-black relative" id="usecases">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-bold tracking-[0.2em] mb-8 uppercase"><Database size={16} /> Business Case Repository</div>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-4">Szenarien & <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Architekturen</span></h2>
                        <p className="text-slate-400 text-xl font-light">Wähle deine Branche und entdecke den unfairen Wettbewerbsvorteil.</p>
                    </div>
                    <div className="w-full md:w-[400px] relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={22} />
                        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Wonach suchst du?" className="w-full bg-zinc-900 border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-base text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all placeholder:text-slate-600 shadow-2xl" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-14 min-h-[800px]">
                    <div className="lg:w-80 flex-shrink-0">
                        <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-8 lg:pb-0 scrollbar-hide">
                            {USE_CASES_DATA.map((cat) => {
                                const Icon = ICON_MAP[cat.iconName] || Activity;
                                const isActive = selectedCategoryId === cat.id && !searchTerm;
                                return (
                                    <button key={cat.id} onClick={() => { setSelectedCategoryId(cat.id); setSearchTerm(''); }} className={`flex items-center gap-5 px-8 py-5 rounded-2xl transition-all whitespace-nowrap lg:w-full group border-2 ${isActive ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-[0_15px_35px_rgba(6,182,212,0.1)] scale-[1.02]' : 'bg-transparent border-transparent text-slate-500 hover:text-slate-200 hover:bg-white/5'}`}>
                                        <Icon size={22} className={isActive ? 'text-cyan-400' : 'group-hover:text-cyan-400 transition-colors'} />
                                        <span className="text-sm font-bold uppercase tracking-widest">{cat.name}</span>
                                        <ChevronRight size={18} className={`ml-auto hidden lg:block transition-all ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex-1 bg-zinc-900/10 border border-white/5 rounded-[3.5rem] p-10 md:p-14 backdrop-blur-3xl relative overflow-hidden ring-1 ring-white/5">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] pointer-events-none" />
                        <div className="mb-14 flex items-center justify-between border-b border-white/5 pb-8">
                            <h3 className="text-base font-bold text-slate-400 uppercase tracking-[0.3em] flex items-center gap-4"><span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />{searchTerm ? `Suchergebnisse` : activeCategory.name}</h3>
                            <div className="px-4 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-500 font-mono font-bold">{filteredCases.length} Szenarien verfügbar</div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                            <AnimatePresence mode='popLayout'>{filteredCases.map((useCase) => <UseCaseCard key={useCase.id} data={useCase} onClick={setSelectedUseCase} />)}</AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>{selectedUseCase && <UseCaseModal data={selectedUseCase} onClose={() => setSelectedUseCase(null)} />}</AnimatePresence>
        </section>
    );
};

export default UseCasesDashboard;
