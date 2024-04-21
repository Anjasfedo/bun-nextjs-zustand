import { createSelectors } from "@/lib/utils";
import { create } from "zustand";

interface CountState {
  nested: { number: number, name: string };
}

interface CountAction {
  increment: () => void;
  decrement: () => void;
}

type CountStore = CountState & CountAction;

const useCountStoreBase = create<CountStore>((set) => ({
  nested: { number: 0, name: "hewroo" },
  increment: () =>
    set((state) => ({
      nested: {
        ...state.nested,
        number: state.nested.number + 1,
      },
    })),
  decrement: () =>
    set((state) => ({
      nested: {
        ...state.nested,
        number: state.nested.number - 1,
      },
    })),
}));

export const useCountStore = createSelectors(useCountStoreBase)
