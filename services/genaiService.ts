import { GoogleGenAI } from "@google/genai";

// Helper to safely get API Key without triggering build errors
const getApiKey = (): string => {
    try {
        // Access process safely via explicit cast to any to avoid TS build errors
        const proc = (typeof process !== 'undefined' ? process : { env: {} }) as any;
        if (proc && proc.env && proc.env.API_KEY) {
            return proc.env.API_KEY;
        }
    } catch (e) {
        // ignore errors
    }
    return '';
};

const getClient = async (): Promise<GoogleGenAI | null> => {
    // Safety check: ensure we are in a browser environment
    if (typeof window === 'undefined') return null;

    // Aggressive cast to any to bypass TS checks
    const win = window as any;
    const aistudio = win.aistudio;

    if (!aistudio) {
        console.warn("AI Studio (window.aistudio) not found. Interactive features may be limited.");
    } else {
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
    // Return client even if key is empty, error will be handled by the call
    return new GoogleGenAI({ apiKey });
};

export const generateVeoVideo = async (
    prompt: string, 
    onProgress: (msg: string) => void
): Promise<string | null> => {
    try {
        const ai = await getClient();
        if (!ai) {
            onProgress("System Error: AI Client could not be initialized.");
            return null;
        }

        onProgress("Initialisiere Veo-3.1-Fast Engine...");
        
        // Initial generation request
        let operation = await ai.models.generateVideos({
            model: 'veo-3.1-fast-generate-preview',
            prompt: prompt,
            config: {
                numberOfVideos: 1,
                resolution: '720p', // Preview default
                aspectRatio: '16:9'
            }
        });

        onProgress("Rendering läuft... (Dies kann 1-2 Minuten dauern)");

        // Polling loop
        while (!operation.done) {
            await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5 seconds
            onProgress("Rendering läuft... Video wird generiert...");
            operation = await ai.operations.getVideosOperation({ operation: operation });
        }

        const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;

        if (!videoUri) {
            throw new Error("No video URI returned from Veo.");
        }

        onProgress("Video wird heruntergeladen...");

        // Fetch the actual video bytes using the key
        const key = getApiKey();
        const response = await fetch(`${videoUri}&key=${key}`);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch video: ${response.statusText}`);
        }

        const blob = await response.blob();
        return URL.createObjectURL(blob);

    } catch (error: any) {
        console.error("Veo Generation Error:", error);
        
        // Check for "Requested entity was not found" (404) which implies invalid key/project access
        const errorMsg = error.message || JSON.stringify(error);
        if (errorMsg.includes("Requested entity was not found") || errorMsg.includes("404")) {
             const win = window as any;
             if (win.aistudio) {
                 console.log("404 detected, prompting for new key selection...");
                 await win.aistudio.openSelectKey();
                 throw new Error("API Key access denied (404). Please select a paid GCP project key.");
             }
        }
        throw error;
    }
};
