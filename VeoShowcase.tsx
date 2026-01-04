import React, { useState } from 'react';
import { generateVeoVideo } from '../services/genaiService';
import { Film, Loader2, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const VeoShowcase: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [progressMsg, setProgressMsg] = useState('');

  const brandPrompt = "Cinematic trailer for 'titanspear.ai'. Dark, moody atmosphere, futuristic laboratory. A glowing neon cyan spear floating in a void. Textures of carbon fiber and glass. High tech interface overlays. 8k resolution, photorealistic, cinematic lighting.";

  const handleGenerate = async () => {
    setLoading(true);
    setVideoUrl(null);
    try {
      const url = await generateVeoVideo(brandPrompt, setProgressMsg);
      if (url) setVideoUrl(url);
    } catch (e) {
      console.error(e);
      alert("Fehler bei der Generierung.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-black border-y border-white/5 relative">
        <div className="absolute inset-0 bg-blue-900/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-10">
                <span className="inline-block px-3 py-1 bg-cyan-900/30 text-cyan-400 text-xs font-mono rounded-full mb-4 border border-cyan-500/20">
                    EXPERIMENTAL FEATURE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">titanspear.ai Cinematic Brand Trailer</h2>
                <p className="text-slate-400">Erstellen Sie einen einzigartigen Marken-Trailer in Echtzeit mit Google Veo.</p>
            </div>

            <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-2xl mx-auto max-w-3xl group">
                {videoUrl ? (
                    <video src={videoUrl} controls autoPlay className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        {loading ? (
                            <div className="flex flex-col items-center">
                                <Loader2 className="w-12 h-12 text-cyan-500 animate-spin mb-4" />
                                <p className="text-cyan-400 font-mono text-sm">{progressMsg}</p>
                            </div>
                        ) : (
                            <div className="text-center p-8">
                                <Film className="w-16 h-16 text-slate-700 mx-auto mb-4 group-hover:text-cyan-500 transition-colors" />
                                <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto italic">"{brandPrompt}"</p>
                                <button 
                                    onClick={handleGenerate}
                                    className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-all flex items-center gap-2 mx-auto"
                                >
                                    <PlayCircle size={20} />
                                    Trailer Generieren
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    </section>
  );
};

export default VeoShowcase;