
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center md:justify-between">
            <div className="text-xl font-bold tracking-tighter text-white">
                titanspear<span className="text-cyan-500">.ai</span>
            </div>
            
            <nav className="hidden md:flex gap-8">
                <button onClick={() => document.getElementById('usecases')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-white text-sm font-medium transition-colors uppercase tracking-wide">Use Cases</button>
                <button onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-white text-sm font-medium transition-colors uppercase tracking-wide">ROI Rechner</button>
            </nav>
            
            {/* Login Button Removed */}
            <div className="hidden md:block w-20"></div> 
        </div>
    </header>
  );
};

export default Header;
