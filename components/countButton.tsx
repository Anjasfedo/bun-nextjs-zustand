"use client";
import { useCountStore } from "@/store/zustand";
import { Button } from "@shadcn/button";
import { Input } from "./ui/input";

const CountButton = () => {
    const increment = useCountStore.use.increment()
    const decrement = useCountStore.use.decrement()
    const setName = useCountStore.use.setName()

  return (
    <div>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <Input type="text" placeholder="Change name" onChange={(e) => setName(e.target.value)}></Input>
    </div>
  );
};

export default CountButton;
