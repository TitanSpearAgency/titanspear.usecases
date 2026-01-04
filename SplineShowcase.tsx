
import React from 'react';
import { SplineScene } from "./ui/spline";
import { Card } from "./ui/card";
import { Spotlight } from "./ui/spotlight";
 
export function SplineShowcase() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
            <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-white/10 shadow-2xl">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="cyan"
            />
            
            <div className="flex flex-col md:flex-row h-full">
                {/* Left content */}
                <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
                    Digitale Intelligenz <br/> zum Anfassen.
                </h2>
                <p className="mt-4 text-neutral-300 max-w-lg text-lg leading-relaxed">
                    Wir machen komplexe KI-Logik greifbar. Unsere Systeme sind nicht nur Code – sie sind interaktive Entitäten, 
                    die Ihre Unternehmensprozesse lebendig machen und autonom steuern.
                </p>
                </div>

                {/* Right content */}
                <div className="flex-1 relative min-h-[300px] md:min-h-0">
                <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                />
                </div>
            </div>
            </Card>
        </div>
    </section>
  )
}
