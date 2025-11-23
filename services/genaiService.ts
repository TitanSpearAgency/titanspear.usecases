import { GoogleGenAI } from "@google/genai";

// Helper to safely get API Key from all possible sources
const getApiKey = (): string => {
    try {
        // 1. Check Vite standard env var (Recommended for Vercel/Frontend)
        // Fix: Cast import.meta to any to bypass missing type definition for env
        if ((import.meta as any).env && (import.meta as any).env.VITE_API_KEY) {
            return (import.meta as any).env.VITE_API_KEY;
        }
        
        // 2. Check Google IDX / Node standard
        // @ts-ignore
        if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
            // @ts-ignore
            return process.env.API_KEY;
        }
    } catch (e) {
        // ignore
    }
    return '';
};

const getClient = async (): Promise<GoogleGenAI | null> => {
    if (typeof window === 'undefined') return null;

    const win = window as any;
    const aistudio = win.aistudio;

    // Prioritize AI Studio Auth if available (e.g. in IDX)
    if (aistudio) {
        try {
            const hasKey = await aistudio.hasSelectedApiKey();
            if (!hasKey) {
                await aistudio.openSelectKey();
            }
        } catch (e) {
            console.error("Error checking API Key selection:", e);
        }
    }

    const apiKey = getApiKey();
    
    // Return client even if key is empty, will fail gracefully later if needed
    return new GoogleGenAI({ apiKey });
};

export const generateVeoVideo = async (
    prompt: string, 
    onProgress: (msg: string) => void
): Promise<string | null> => {
    try {
        const ai = await getClient();
        if (!ai) {
            onProgress("System Error: AI Client init failed.");
            return null;
        }

        onProgress("Initialisiere Veo-3.1...");
        
        let operation = await ai.models.generateVideos({
            model: 'veo-3.1-fast-generate-preview',
            prompt: prompt,
            config: {
                numberOfVideos: 1,
                resolution: '720p',
                aspectRatio: '16:9'
            }
        });

        onProgress("Rendering läuft...");

        while (!operation.done) {
            await new Promise(resolve => setTimeout(resolve, 5000));
            onProgress("Rendering läuft... Video wird generiert...");
            operation = await ai.operations.getVideosOperation({ operation: operation });
        }

        const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;

        if (!videoUri) {
            throw new Error("No video URI returned.");
        }

        onProgress("Video wird heruntergeladen...");

        const key = getApiKey();
        const response = await fetch(`${videoUri}&key=${key}`);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch video: ${response.statusText}`);
        }

        const blob = await response.blob();
        return URL.createObjectURL(blob);

    } catch (error: any) {
        console.error("Veo Error:", error);
        
        const errorMsg = error?.message || JSON.stringify(error);
        if (errorMsg.includes("Requested entity was not found") || errorMsg.includes("404")) {
             const win = window as any;
             if (win.aistudio) {
                 await win.aistudio.openSelectKey();
                 throw new Error("API Key invalid. Please select a paid project.");
             }
        }
        throw error;
    }
};