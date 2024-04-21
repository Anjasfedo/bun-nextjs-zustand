"use client";
import CountButton from "@/components/countButton";
import { useCountStore } from "@/store/zustand";

export default function Home() {
  const { number } = useCountStore();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {number}
      <CountButton />
    </main>
  );
}
