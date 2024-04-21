import { create } from "zustand";

type CountStore = {
  number: number;
  increment: () => void;
  decrement: () => void;
};

export const useCountStore = create<CountStore>((set) => ({
  number: 0,
  increment: () => set((state) => ({ number: state.number + 1 })),
  decrement: () => set((state) => ({ number: state.number + 1 })),
}));
