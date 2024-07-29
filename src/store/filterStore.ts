import { create } from 'zustand';

type FilterState = {
  field: string[];
  region: string[];
  people: string[];
  period: string;
  level: string[];
};

type FilterActions = {
  setField: (field: string[]) => void;
  setRegion: (region: string) => void;
  setPeople: (people: string[]) => void;
  setPeriod: (period: string) => void;
  setLevel: (level: string) => void;
  reset: () => void;
};

type FilterStore = FilterState & FilterActions;

export const useFilterStore = create<FilterStore>((set) => ({
  field: [],
  region: [],
  people: [],
  period: '',
  level: [],
  setField: (field) => set({ field }),
  setRegion: (region) =>
    set((state) => ({
      region: state.region.includes(region)
        ? state.region.filter((r) => r !== region)
        : [...state.region, region],
    })),
  setPeople: (people) => set({ people }),
  setPeriod: (period) => set({ period }),
  setLevel: (level) =>
    set((state) => ({
      level: state.level.includes(level)
        ? state.level.filter((l) => l !== level)
        : [...state.level, level],
    })),
  reset: () =>
    set({ field: [], region: [], people: [], period: '', level: [] }),
}));
