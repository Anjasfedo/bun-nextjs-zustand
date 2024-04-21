import { createSelectors } from "@/lib/utils";
import { create } from "zustand";
import { persist, StateStorage, createJSONStorage } from "zustand/middleware";

interface CountState {
  nested: { number: number; name: string };
}

interface CountAction {
  increment: () => void;
  decrement: () => void;
  setName: (name: string) => void;
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
  setName: (name: string) =>
    set((state) => ({
      nested: {
        ...state.nested,
        name,
      },
    })),
}));

export const useCountStore = createSelectors(useCountStoreBase);

const hashStorage: StateStorage = {
  getItem: (key): string => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    const storedValue = searchParams.get(key) ?? "";
    return JSON.parse(storedValue);
  },
  setItem: (key, newValue): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    searchParams.set(key, JSON.stringify(newValue));
    location.hash = searchParams.toString();
  },
  removeItem: (key): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    searchParams.delete(key);
    location.hash = searchParams.toString();
  },
};

const useBoundStoreBase = create<{
  search: string;
  setSearch: (search: string) => void;
}>()(
  persist(
    (set, get) => ({
      search: "",
      setSearch: (search: string) =>
        set((state) => ({
          search,
        })),
    }),
    {
      name: "search", // unique name
      storage: createJSONStorage(() => hashStorage),
    }
  )
);

export const useBoundStore = createSelectors(useBoundStoreBase);


export const useMeals = create(() => ({
    papaBear: 'large porridge-pot',
    mamaBear: 'middle-size porridge pot',
    littleBear: 'A little, small, wee pot',
  }))
