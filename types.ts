
import { LucideIcon } from 'lucide-react';

export interface CalculatorConfig {
  inputLabel: string;
  inputMin: number;
  inputMax: number;
  inputStep: number;
  defaultValue: number;
  multiplier: number;
  outputLabel: string;
  isCurrency: boolean;
  unit?: string;
  description?: string;
}

export interface UseCase {
  id: string;
  title: string;
  pain: string;
  solution: string;
  detailedPain?: string;
  detailedSolution?: string;
  benefits?: string[];
  roiStats?: { label: string; value: string }[];
  veoPrompt: string;
  iconName: string; 
  simulationType: 'glitch' | 'pipeline' | 'scanning' | 'chat' | 'network' | 'audio' | 'workflow' | 'chart';
  highlight?: boolean;
  calculator?: CalculatorConfig;
}

export interface UseCaseCategory {
  id: string;
  name: string;
  iconName: string;
  cases: UseCase[];
}

export interface VeoState {
  isLoading: boolean;
  videoUrl: string | null;
  error: string | null;
  progressMessage: string;
}
