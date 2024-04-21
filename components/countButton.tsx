"use client";
import { useCountStore } from "@/store/zustand";
import { Button } from "@shadcn/button";

const CountButton = () => {
  const { increment, decrement } = useCountStore();
  return (
    <div>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default CountButton;
