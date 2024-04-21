import { create } from "zustand";

interface CountState {
  number: number;
}

interface CountAction {
  increment: () => void;
  decrement: () => void;
}

type CountStore = CountState & CountAction;

export const useCountStore = create<CountStore>((set) => ({
  number: 0,
  increment: () => set((state) => ({ number: state.number + 1 })),
  decrement: () => set((state) => ({ number: state.number - 1 })),
}));
