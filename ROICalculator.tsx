
import React, { useState, useEffect } from 'react';
import { 
    ComposedChart, Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
    Area, ReferenceLine, Cell 
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Calculator, TrendingUp, Users, 
    CheckCircle2, 
    Headset, Briefcase, LineChart as ChartIcon, Server, 
    ChevronDown, ChevronUp, HelpCircle
} from 'lucide-react';

type Scenario = 'pessimistic' | 'realistic' | 'optimistic';
type Department = 'sales' | 'support' | 'admin';

const ROICalculator: React.FC = () => {
  // --- GLOBAL SETTINGS ---
  const [department, setDepartment] = useState<Department>('sales');
  const [scenario, setScenario] = useState<Scenario>('realistic');
  const [showAdvanced, setShowAdvanced] = useState(false);

  // --- OPERATIONAL INPUTS ---
  const [volume, setVolume] = useState(2000); // Monthly interactions
  const [aht, setAht] = useState(8); // Mins
  const [humanHourlyRate, setHumanHourlyRate] = useState(45); // €

  // --- AI ECONOMICS ---
  const [setupCost, setSetupCost] = useState(5000); // €
  const [monthlySaasFee, setMonthlySaasFee] = useState(499); // €
  const [aiCostPerMin, setAiCostPerMin] = useState(0.25); // €

  // --- DIRECT REVENUE LEVERS ---
  const [conversionRate, setConversionRate] = useState(2.5); // %
  const [dealValue, setDealValue] = useState(500); // €

  // --- INDIRECT / ADVANCED LEVERS ---
  const [missedCallRate, setMissedCallRate] = useState(15); // % of calls missed currently
  const [missedCallValue, setMissedCallValue] = useState(100); // Value of a missed opportunity
  const [employeeTurnover, setEmployeeTurnover] = useState(20); // % annual turnover
  const [hiringCost, setHiringCost] = useState(5000); // Cost to replace one employee

  // --- OUTPUT STATES ---
  const [chartData, setChartData] = useState<any[]>([]);
  const [kpis, setKpis] = useState({
      humanMonthlyCost: 0,
      aiMonthlyCost: 0,
      monthlySavings: 0,
      revenueUplift: 0,
      indirectBenefits: 0,
      netMonthlyBenefit: 0,
      breakEvenMonth: 0,
      yearOneRoi: 0,
      fiveYearBenefit: 0
  });

  // --- PRESETS ---
  const applyPreset = (dept: Department) => {
      setDepartment(dept);
      if (dept === 'sales') {
          setVolume(1500); setAht(12); setDealValue(800); setMissedCallRate(20); setMissedCallValue(200);
      } else if (dept === 'support') {
          setVolume(3000); setAht(6); setDealValue(0); setMissedCallRate(5); setMissedCallValue(0);
      } else { // Admin
          setVolume(1000); setAht(25); setDealValue(0); setMissedCallRate(0); setMissedCallValue(50);
      }
  };

  useEffect(() => {
    const mods = {
        pessimistic: { perf: 1.0, cost: 1.2, rev: 1.0, indirect: 0.5 }, 
        realistic: { perf: 1.0, cost: 1.0, rev: 1.2, indirect: 1.0 },   
        optimistic: { perf: 1.0, cost: 0.9, rev: 1.4, indirect: 1.2 }   
    };
    const mod = mods[scenario];

    // 1. DIRECT COSTS
    const humanHours = (volume * aht) / 60;
    const humanMonthlyCost = humanHours * humanHourlyRate;
    const humanRevenue = (volume * (conversionRate / 100)) * dealValue;

    // 2. AI COSTS
    const aiVariableCost = (volume * aht * aiCostPerMin) * mod.cost;
    const aiTotalMonthlyCost = monthlySaasFee + aiVariableCost;

    // 3. DIRECT BENEFITS
    const monthlySavings = humanMonthlyCost - aiTotalMonthlyCost;
    
    let revenueUplift = 0;
    if (dealValue > 0) {
        const newConversionRate = conversionRate * mod.rev; 
        const aiRevenue = (volume * (newConversionRate / 100)) * dealValue;
        revenueUplift = aiRevenue - humanRevenue;
    }

    // 4. INDIRECT BENEFITS (Advanced)
    // a) Recovered Missed Calls
    const missedVolume = volume * (missedCallRate / 100);
    // AI captures 100% of missed calls. Assume 10% conversion on those recovered calls? 
    // Or just use the "Value of missed opportunity" directly. Let's be conservative: 20% conversion on recovered.
    const recoveredRevenue = (missedVolume * 0.2) * missedCallValue * mod.indirect;

    // b) Hiring Savings
    // Approx FTEs needed for this volume
    const ftes = humanHours / 160; // 160h/month
    const annualHiringSavings = (ftes * (employeeTurnover/100) * hiringCost);
    const monthlyHiringSavings = annualHiringSavings / 12;

    const totalIndirect = recoveredRevenue + monthlyHiringSavings;

    // 5. TOTALS
    const netMonthlyBenefit = monthlySavings + revenueUplift + totalIndirect;

    const monthsToBreakEven = netMonthlyBenefit > 0 ? setupCost / netMonthlyBenefit : 999;
    const yearOneNet = (netMonthlyBenefit * 12) - setupCost;
    
    setKpis({
        humanMonthlyCost,
        aiMonthlyCost: aiTotalMonthlyCost,
        monthlySavings,
        revenueUplift,
        indirectBenefits: totalIndirect,
        netMonthlyBenefit,
        breakEvenMonth: Math.ceil(monthsToBreakEven),
        yearOneRoi: yearOneNet,
        fiveYearBenefit: (netMonthlyBenefit * 60) - setupCost
    });

    const data = [];
    let cumulativeCashflow = -setupCost;

    for (let m = 0; m <= 12; m++) {
        if (m > 0) cumulativeCashflow += netMonthlyBenefit;
        data.push({
            month: `M${m}`,
            cashflow: cumulativeCashflow,
            humanCost: humanMonthlyCost,
            aiCost: aiTotalMonthlyCost
        });
    }
    setChartData(data);

  }, [volume, aht, humanHourlyRate, setupCost, monthlySaasFee, aiCostPerMin, conversionRate, dealValue, scenario, department, missedCallRate, missedCallValue, employeeTurnover, hiringCost]);

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5" id="calculator">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000000,#050505)]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 text-xs font-bold tracking-widest mb-6">
                    <Calculator size={14} />
                    TOTAL ECONOMIC IMPACT
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    ROI <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Rechner Pro</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    Berechnen Sie direkte Kosteneinsparungen, Umsatzsteigerung durch Erreichbarkeit und indirekte Effizienzgewinne.
                </p>
            </div>

            {/* PRESETS */}
            <div className="flex justify-center gap-4 mb-12">
                {[
                    { id: 'sales', icon: ChartIcon, label: 'Sales Team' },
                    { id: 'support', icon: Headset, label: 'Support Center' },
                    { id: 'admin', icon: Briefcase, label: 'Admin / Office' }
                ].map((d) => (
                    <button
                        key={d.id}
                        onClick={() => applyPreset(d.id as Department)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all font-bold ${
                            department === d.id 
                            ? 'bg-cyan-950/50 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]' 
                            : 'bg-zinc-900 border-white/10 text-slate-500 hover:border-white/30 hover:text-slate-300'
                        }`}
                    >
                        <d.icon size={18} />
                        {d.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* INPUTS COLUMN */}
                <div className="lg:col-span-4 space-y-6">
                    
                    {/* SCENARIO */}
                    <div className="bg-zinc-900/80 border border-white/10 p-1 rounded-xl flex justify-between relative">
                        {(['pessimistic', 'realistic', 'optimistic'] as Scenario[]).map((s) => (
                            <button
                                key={s}
                                onClick={() => setScenario(s)}
                                className={`relative z-10 flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                                    scenario === s ? 'text-black' : 'text-slate-500 hover:text-slate-300'
                                }`}
                            >
                                {s === 'pessimistic' ? 'Konservativ' : s === 'realistic' ? 'Realistisch' : 'Optimistisch'}
                                {scenario === s && (
                                    <motion.div 
                                        layoutId="scenarioHighlight"
                                        className={`absolute inset-0 rounded-lg -z-10 ${
                                            s === 'pessimistic' ? 'bg-slate-400' : s === 'realistic' ? 'bg-cyan-500' : 'bg-emerald-400'
                                        }`}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* BASIC METRICS */}
                    <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-xl">
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Users size={14} /> Basis Metriken
                        </h4>
                        <div className="space-y-5">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm text-slate-300">Vorgänge / Monat</label>
                                    <span className="text-sm font-mono font-bold text-cyan-400">{volume.toLocaleString()}</span>
                                </div>
                                <input type="range" min="100" max="10000" step="100" value={volume} onChange={e => setVolume(Number(e.target.value))} className="w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-cyan-500" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm text-slate-300">Ø Bearbeitungszeit (Min)</label>
                                    <span className="text-sm font-mono font-bold text-cyan-400">{aht} min</span>
                                </div>
                                <input type="range" min="1" max="60" step="1" value={aht} onChange={e => setAht(Number(e.target.value))} className="w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-cyan-500" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm text-slate-300">Personalkosten / Std</label>
                                    <span className="text-sm font-mono font-bold text-cyan-400">{humanHourlyRate} €</span>
                                </div>
                                <input type="range" min="25" max="150" step="5" value={humanHourlyRate} onChange={e => setHumanHourlyRate(Number(e.target.value))} className="w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-cyan-500" />
                            </div>
                        </div>
                    </div>

                    {/* ADVANCED TOGGLE */}
                    <button 
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl text-sm text-slate-400 hover:text-white transition-colors"
                    >
                        <span className="flex items-center gap-2"><HelpCircle size={14} /> Erweiterte Faktoren (Indirekt)</span>
                        {showAdvanced ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    <AnimatePresence>
                        {showAdvanced && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-xl mt-2">
                                     <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-6">Indirekter Nutzen</h4>
                                     <div className="space-y-5">
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <label className="text-sm text-slate-300">Verpasste Anrufe</label>
                                                <span className="text-sm font-mono font-bold text-emerald-400">{missedCallRate}%</span>
                                            </div>
                                            <input type="range" min="0" max="50" step="1" value={missedCallRate} onChange={e => setMissedCallRate(Number(e.target.value))} className="w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-emerald-500" />
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <label className="text-sm text-slate-300">Wert pro Opportunity</label>
                                                <span className="text-sm font-mono font-bold text-emerald-400">{missedCallValue} €</span>
                                            </div>
                                            <input type="range" min="0" max="1000" step="10" value={missedCallValue} onChange={e => setMissedCallValue(Number(e.target.value))} className="w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-emerald-500" />
                                        </div>
                                        <div className="pt-4 border-t border-white/5">
                                            <div className="flex justify-between mb-2">
                                                <label className="text-sm text-slate-300">Mitarbeiter Fluktuation</label>
                                                <span className="text-sm font-mono font-bold text-slate-400">{employeeTurnover}% / Jahr</span>
                                            </div>
                                            <input type="range" min="0" max="50" step="5" value={employeeTurnover} onChange={e => setEmployeeTurnover(Number(e.target.value))} className="w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-slate-500" />
                                        </div>
                                     </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* OUTPUT COLUMN */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    
                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden hover:border-emerald-500/30 transition-colors">
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Gesamt-Vorteil / Mo</p>
                            <div className="text-3xl font-mono font-bold text-white">
                                {kpis.netMonthlyBenefit.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}
                            </div>
                            <div className="text-[10px] text-emerald-400 mt-1 font-medium">
                                Direkt + Indirekt
                            </div>
                        </div>
                        
                        <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden hover:border-cyan-500/30 transition-colors">
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Break-Even Point</p>
                            <div className="text-3xl font-mono font-bold text-white">
                                Monat {kpis.breakEvenMonth}
                            </div>
                            <div className="text-[10px] text-cyan-400 mt-1 font-medium">
                                ROI erreicht
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-950 to-emerald-950 border border-cyan-500/30 p-6 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3 opacity-20 text-cyan-400"><CheckCircle2 size={40} /></div>
                            <p className="text-xs text-cyan-300 uppercase font-bold tracking-wider mb-2">Benefit Jahr 1</p>
                            <div className="text-3xl font-mono font-bold text-white">
                                {kpis.yearOneRoi.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}
                            </div>
                            <div className="text-[10px] text-cyan-200 mt-1 font-medium">Netto nach Setup</div>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="flex-1 bg-zinc-900 border border-white/10 rounded-2xl p-6 md:p-8 h-[400px]">
                         <p className="text-xs text-center text-slate-500 mb-6 font-medium uppercase tracking-widest">Kumulierter Cashflow (J-Curve)</p>
                         <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorCashflow" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                <XAxis dataKey="month" stroke="#64748b" tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                                <YAxis stroke="#64748b" tick={{fontSize: 10}} tickFormatter={(val) => `${val/1000}k`} axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #334155' }} />
                                <ReferenceLine y={0} stroke="#64748b" strokeDasharray="3 3" />
                                <Area type="monotone" dataKey="cashflow" name="Cashflow" stroke="#10b981" strokeWidth={2} fill="url(#colorCashflow)" />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Breakdown Footer */}
                    <div className="grid grid-cols-3 gap-4 text-center text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                        <div>
                            <span className="block text-white mb-1">{kpis.monthlySavings.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}</span>
                            Direkte Einsparung
                        </div>
                        <div>
                             <span className="block text-emerald-400 mb-1">+{kpis.revenueUplift.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}</span>
                             Umsatz Boost
                        </div>
                        <div>
                             <span className="block text-cyan-400 mb-1">+{kpis.indirectBenefits.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}</span>
                             Indirekter Nutzen
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
};

export default ROICalculator;
