
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UseCasesDashboard from './components/UseCasesDashboard';
import InteractiveDemo from './components/InteractiveDemo';
import Process from './components/Process';
import ROICalculator from './components/ROICalculator';
import TechSpecs from './components/TechSpecs';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="bg-black min-h-screen text-slate-200 font-sans selection:bg-cyan-500 selection:text-black">
      <Header />
      <main>
        <Hero />
        <UseCasesDashboard />
        <InteractiveDemo />
        <Process />
        <ROICalculator />
        <TechSpecs />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
