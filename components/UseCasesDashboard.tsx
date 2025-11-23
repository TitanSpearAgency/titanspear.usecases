
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { USE_CASES_DATA, ICON_MAP } from '../constants';
import { UseCase, CalculatorConfig } from '../types';
import { ArrowUpRight, Activity, GitBranch, LayoutDashboard, Calculator, X, ArrowRight, Star, Database } from 'lucide-react';
import { BarChart, Bar, Cell, ResponsiveContainer } from 'recharts';

// --- STATIC VISUAL HEADER (High-End & Simple) ---

const UseCaseVisual: React.FC<{ iconName: string, highlight?: boolean }> = ({ iconName, highlight }) => {
    const Icon = ICON_MAP[iconName] || Activity;
    
    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-black to-black relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            {/* Ambient Glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] rounded-full blur-[100px] opacity-20 pointer-events-none
                ${highlight ? 'bg-cyan-500/20' : 'bg-slate-500/10'}`} 
            />

            {/* Central Holographic Element */}
            <div className="relative z-10 flex items-center justify-center">
                <div className={`w-32 h-32 rounded-3xl flex items-center justify-center backdrop-blur-md border shadow-2xl
                    ${highlight 
                        ? 'bg-cyan-950/30 border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.3)]' 
                        : 'bg-slate-900/30 border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]'
                    }`}>
                    <Icon 
                        size={64} 
                        strokeWidth={1}
                        className={highlight ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" : "text-slate-300"} 
                    />
                </div>
                
                {/* Decorative Rings */}
                <div className={`absolute inset-0 rounded-3xl border border-dashed opacity-30 scale-125
                    ${highlight ? 'border-cyan-500' : 'border-slate-500'}`} />
            </div>
        </div>
    );
};

// --- CALCULATOR COMPONENTS ---

const MiniRoiChart: React.FC<{ stat: { label: string, value: string } }> = ({ stat }) => {
    const isNegative = stat.value.includes('-');
    const isPositive = stat.value.includes('+');
    const isZero = stat.value.startsWith('0') || stat.value.includes('0%');
    
    // Extract number
    const rawNum = parseInt(stat.value.replace(/[^0-9]/g, ''));
    const num = isNaN(rawNum) ? 50 : rawNum;
    
    let before = 100;
    let after = 100;

    if (isNegative) {
        after = Math.max(10, 100 - num);
    } else if (isPositive) {
        after = 100 + num;
    } else if (isZero) {
        after = 5;
    } else {
        return null;
    }

    const chartData = [
        { name: 'Vorher', value: before },
        { name: 'Nachher', value: after }
    ];

    const isReductionGood = isNegative || isZero; 

    return (
        <div className="h-20 w-full mt-4 border-t border-white/5 pt-3 group/chart">
             <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">{stat.label}</span>
                <span className={`text-xs font-mono font-bold ${isReductionGood ? 'text-emerald-400' : 'text-cyan-400'}`}>
                    {stat.value}
                </span>
             </div>
             <div className="h-12 w-full opacity-60 group-hover/chart:opacity-100 transition-opacity duration-500">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <Bar dataKey="value" radius={[2, 2, 0, 0]} animationDuration={1500}>
                            <Cell fill="#334155" />
                            <Cell fill={isReductionGood ? '#34d399' : '#06b6d4'} />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
             </div>
        </div>
    )
}

const UseCaseCalculator: React.FC<{ config: CalculatorConfig }> = ({ config }) => {
    const [inputValue, setInputValue] = useState(config.defaultValue);
    const [result, setResult] = useState(0);

    React.useEffect(() => {
        setResult(inputValue * config.multiplier);
    }, [inputValue, config]);

    return (
        <div className="bg-zinc-900 border border-slate-800 rounded-xl p-6 mt-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
                <Calculator size={20} className="text-cyan-400" />
                <h4 className="text-white font-bold text-lg">ROI Simulator</h4>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                    <div className="flex justify-between mb-2">
                        <label className="text-sm text-slate-400">{config.inputLabel}</label>
                        <span className="text-sm font-mono font-bold text-white">{inputValue}</span>
                    </div>
                    <input 
                        type="range" 
                        min={config.inputMin} 
                        max={config.inputMax} 
                        step={config.inputStep} 
                        value={inputValue} 
                        onChange={(e) => setInputValue(Number(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    />
                    <p className="text-[10px] text-slate-500 mt-3 italic leading-relaxed">
                        {config.description}
                    </p>
                </div>
                <div className="hidden md:block w-[1px] h-20 bg-slate-800" />
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="text-xs text-emerald-500 font-bold uppercase tracking-widest mb-1">
                        {config.outputLabel}
                    </div>
                    <div className="text-3xl md:text-4xl font-mono font-bold text-white">
                        {config.isCurrency 
                            ? result.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }) 
                            : `${result.toLocaleString('de-DE')} ${config.unit || ''}`}
                    </div>
                </div>
            </div>
        </div>
    );
};

const MiniCalculator: React.FC<{ config: CalculatorConfig }> = ({ config }) => {
    const [value, setValue] = useState(config.defaultValue);
    const result = value * config.multiplier;

    return (
        <div 
            className="mt-5 p-3 bg-black/40 rounded-lg border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-colors"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex justify-between items-center text-[9px] text-slate-500 mb-2 uppercase tracking-wider font-bold">
                <span>{config.inputLabel}</span>
                <span className="text-cyan-500/70 flex items-center gap-1"><Calculator size={8} /> ROI</span>
            </div>
            <div className="flex items-end gap-3">
                <div className="flex-1 pb-1">
                    <div className="flex justify-between mb-1">
                        <span className="text-[10px] text-slate-300 font-mono bg-slate-800 px-1.5 rounded">{value.toLocaleString()}</span>
                    </div>
                    <input 
                        type="range" 
                        min={config.inputMin} 
                        max={config.inputMax} 
                        step={config.inputStep} 
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        className="w-full h-1 bg-slate-800 rounded-full appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400"
                    />
                </div>
                <div className="text-right min-w-[70px]">
                    <div className="text-sm font-bold text-emerald-400 font-mono">
                        {config.isCurrency 
                            ? result.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }) 
                            : `${result.toLocaleString('de-DE')} ${config.unit || ''}`}
                    </div>
                    <div className="text-[8px] text-emerald-600 leading-none mt-0.5 font-bold uppercase tracking-tight">
                        Einsparung
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- DETAIL MODAL COMPONENT ---
const UseCaseModal: React.FC<{ data: UseCase; onClose: () => void }> = ({ data, onClose }) => {
    const Icon = ICON_MAP[data.iconName] || Activity;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer"
            />

            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-5xl bg-black border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[95vh]"
            >
                <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full hover:bg-white hover:text-black text-slate-400 transition-colors border border-white/10">
                    <X size={20} />
                </button>

                {/* Left Column: Visuals */}
                <div className="w-full md:w-1/3 bg-slate-950 relative flex flex-col border-r border-white/10">
                    <div className="h-48 md:h-1/2 w-full relative overflow-hidden bg-black">
                         <div className="absolute inset-0">
                             <UseCaseVisual iconName={data.iconName} highlight={data.highlight} />
                         </div>
                    </div>
                    
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center bg-zinc-950">
                        <h4 className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest mb-6">Key Metrics</h4>
                        {data.roiStats?.map((stat, idx) => (
                            <div key={idx} className="mb-6 last:mb-0">
                                <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
                                <div className="text-2xl font-mono font-bold text-white border-l-2 border-cyan-500 pl-3">{stat.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Details */}
                <div className="w-full md:w-2/3 p-8 md:p-10 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent bg-black">
                    <div className="flex items-center gap-4 mb-8">
                         <div className="w-14 h-14 rounded-xl bg-slate-900 text-slate-200 flex items-center justify-center border border-slate-700">
                             <Icon size={28} />
                         </div>
                         <div>
                             <div className="flex items-center gap-2 mb-1">
                                 <span className="text-xs text-cyan-500 font-bold tracking-widest uppercase">Use Case Deep Dive</span>
                                 {data.highlight && <span className="px-2 py-0.5 bg-cyan-900/40 text-cyan-300 text-[10px] font-bold rounded border border-cyan-500/30">RECOMMENDED</span>}
                             </div>
                             <h2 className="text-2xl md:text-3xl font-bold text-white">{data.title}</h2>
                         </div>
                    </div>

                    <div className="space-y-12">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-xs font-bold text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    Problem & Risiko
                                </h3>
                                <p className="text-slate-300 leading-relaxed text-sm text-justify">
                                    {data.detailedPain || data.pain}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    Lösung & Profit
                                </h3>
                                <p className="text-slate-300 leading-relaxed text-sm text-justify">
                                    {data.detailedSolution || data.solution}
                                </p>
                            </div>
                        </div>

                        {data.workflowSteps && (
                            <div className="bg-zinc-900/50 rounded-xl p-6 border border-slate-800">
                                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
                                    <GitBranch size={14} />
                                    Der Automatisierungs-Prozess
                                </h3>
                                <div className="space-y-4 relative">
                                    <div className="absolute left-[11px] top-3 bottom-3 w-[1px] bg-slate-800" />
                                    {data.workflowSteps.map((step, i) => (
                                        <div key={i} className="flex items-center gap-4 relative">
                                            <div className="w-6 h-6 rounded-full bg-black text-slate-400 flex items-center justify-center text-xs font-bold border border-slate-700 shrink-0 z-10">
                                                {i + 1}
                                            </div>
                                            <div className="p-3 bg-black border border-white/5 rounded-lg flex-1 text-sm text-slate-300 font-mono">
                                                {step}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {data.calculator && (
                            <UseCaseCalculator config={data.calculator} />
                        )}

                        <div className="pt-6">
                            <a 
                                href="https://titanspear.agency/kontakt/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-white hover:bg-cyan-400 text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2 text-lg"
                            >
                                Jetzt Implementieren
                                <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// --- CARD COMPONENT ---
const UseCaseCard: React.FC<{ data: UseCase; onClick: (data: UseCase) => void }> = ({ data, onClick }) => {
    const Icon = ICON_MAP[data.iconName] || Activity;
    const isHighlighted = data.highlight;
    const roiStat = data.roiStats?.[0];
    
    return (
        <motion.div 
            onClick={() => onClick(data)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer h-full bg-zinc-900 border
                ${isHighlighted 
                    ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]' 
                    : 'border-white/10 hover:border-cyan-500/30 hover:bg-zinc-800'
                }`}
        >
            {isHighlighted && (
                <div className="absolute top-0 right-0 bg-cyan-500 text-black text-[10px] font-bold px-4 py-1.5 rounded-bl-xl z-20 flex items-center gap-1">
                    <Star size={10} className="fill-black" />
                    EMPFOHLEN
                </div>
            )}

            <div className="p-6 flex-1 flex flex-col relative z-10">
                <div className="flex items-start gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 transition-colors duration-300
                        ${isHighlighted ? 'bg-cyan-500 text-black border-cyan-400' : 'bg-white/5 text-slate-400 border-white/10 group-hover:text-cyan-400 group-hover:border-cyan-500/50'}`}>
                        <Icon size={24} />
                    </div>
                    <div>
                        <h3 className={`text-lg font-bold leading-tight mb-1 ${isHighlighted ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>{data.title}</h3>
                        {data.calculator && (
                            <div className="flex items-center gap-1 text-[10px] text-emerald-500 font-mono">
                                <Calculator size={10} />
                                <span>Inkl. ROI Rechner</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-4 flex-1">
                    <div className="relative pl-3 border-l-2 border-red-500/30">
                        <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">{data.pain}</p>
                    </div>
                    
                    <div className={`relative pl-3 border-l-2 
                        ${isHighlighted ? 'border-emerald-400' : 'border-emerald-500/30'}`}>
                        <p className={`text-sm font-medium leading-relaxed line-clamp-3 ${isHighlighted ? 'text-white' : 'text-slate-300'}`}>{data.solution}</p>
                    </div>
                </div>

                 {roiStat && <MiniRoiChart stat={roiStat} />}

                 <div className="mt-auto pt-4">
                    {data.calculator && (
                        <MiniCalculator config={data.calculator} />
                    )}
                 </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="text-xs text-slate-500 font-mono flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                        <LayoutDashboard size={12} />
                        Details
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all
                        ${isHighlighted ? 'bg-cyan-500 text-black' : 'bg-white/5 text-slate-400 group-hover:bg-cyan-500 group-hover:text-black'}`}>
                        <ArrowUpRight size={16} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};


const UseCasesDashboard: React.FC = () => {
    const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>('all');
    
    const displayedCategories = activeCategory === 'all' 
        ? USE_CASES_DATA 
        : USE_CASES_DATA.filter(cat => cat.id === activeCategory);

    const totalCases = USE_CASES_DATA.reduce((acc, cat) => acc + cat.cases.length, 0);

    return (
        <section className="py-32 bg-black relative" id="usecases">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
            
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-bold tracking-widest mb-6">
                        <Database size={14} />
                        {totalCases}+ SZENARIEN LIVE
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Skalierbare <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Workflows</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light mb-8">
                        Wir bauen komplexe n8n-Automatisierungen, die echte Business-Probleme lösen. 
                        <span className="text-cyan-500 block mt-2 font-bold text-sm">Klicken Sie auf eine Karte für den Deep Dive.</span>
                    </p>

                    {/* Category Filter - Improved for handling many items */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        <button
                            onClick={() => setActiveCategory('all')}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                                activeCategory === 'all' 
                                ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                                : 'bg-black text-slate-400 border-slate-800 hover:border-slate-600'
                            }`}
                        >
                            Alle Anzeigen
                        </button>
                        {USE_CASES_DATA.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                                    activeCategory === cat.id
                                    ? 'bg-cyan-900/30 text-cyan-400 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                                    : 'bg-black text-slate-400 border-slate-800 hover:border-slate-600'
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-24 min-h-[600px]">
                    {displayedCategories.map((category) => (
                        <div key={category.id} className="relative">
                            <div className="flex items-center gap-6 mb-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                                    <div className="w-2 h-8 bg-cyan-500 rounded-full" />
                                    {category.name}
                                </h3>
                                <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-900/50 to-transparent" />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.cases.map((useCase) => (
                                    <UseCaseCard 
                                        key={useCase.id} 
                                        data={useCase} 
                                        onClick={setSelectedUseCase}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedUseCase && (
                    <UseCaseModal 
                        data={selectedUseCase} 
                        onClose={() => setSelectedUseCase(null)} 
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default UseCasesDashboard;
