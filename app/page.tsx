"use client";
import CountButton from "@/components/countButton";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import { useCountStore } from "@/store/zustand";

export default function Home() {
  const name = useCountStore.use.nested().name
  const number = useCountStore.use.nested().number
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TypographyH1>{name}</TypographyH1>
      <TypographyH2>{number}</TypographyH2>
      <CountButton />
    </main>
  );
}
