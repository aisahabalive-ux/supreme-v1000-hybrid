// File Name: types.ts
export interface HybridSystemData {
  status: string;
  engine: string;
  version: string;
  lastSync: string;
}

export interface NexusState {
  isActive: boolean;
  loadFactor: number;
  efficiency: string;
}
