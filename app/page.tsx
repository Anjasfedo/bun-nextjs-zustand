"use client";
import CountButton from "@/components/countButton";
import {
  TypographyH1,
  TypographyH2,
  TypographyH4,
} from "@/components/ui/typography";
import { useCountStore, useMeals } from "@/store/zustand";
import { useShallow } from "zustand/react/shallow";

export default function Home() {
  const name = useCountStore.use.nested().name;
  const number = useCountStore.use.nested().number;

  const stateValues = useMeals(useShallow((state) => Object.values(state)));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TypographyH1>{name}</TypographyH1>
      <TypographyH2>{number}</TypographyH2>
      <CountButton />
      {stateValues.map((value: string, index: number) => (
        <TypographyH4 key={index}>{value}</TypographyH4>
      ))}
    </main>
  );
}
