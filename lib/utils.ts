import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { StoreApi, UseBoundStore } from 'zustand'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  let store = _store as WithSelectors<typeof _store>
  store.use = {}
  for (let k of Object.keys(store.getState())) {
    ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
  }

  return store
}