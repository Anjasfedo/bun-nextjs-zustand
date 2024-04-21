"use client";
import { useBearStore, useBoundStore, useCountStore } from "@/store/zustand";
import { Button } from "@shadcn/button";
import { Input } from "./ui/input";
import { TypographyH1, TypographyH3 } from "./ui/typography";
import { useEffect } from "react";
import { useStore } from "@/lib/utils";

const CountButton = () => {
  const increment = useCountStore.use.increment();
  const decrement = useCountStore.use.decrement();
  const setName = useCountStore.use.setName();

  // useEffect(() => {
  //   useBoundStore.persist.rehydrate();
  // }, [])

  const setSearch = useBoundStore.use.setSearch();
  const search = useBoundStore.use.search();

  const bears = useStore(useBearStore, (state) => state.bears)
  const addBear = useBearStore((state) => state.addABear)
  
  return (
    <div>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <Input
        type="text"
        placeholder="Change name"
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <TypographyH3>{search}</TypographyH3>
      <Input
        type="text"
        placeholder="Change search"
        onChange={(e) => setSearch(e.target.value)}
      ></Input>
      <Button onClick={() => useBoundStore.persist.clearStorage()}>Reset Storage</Button>
      <TypographyH1>{bears}</TypographyH1>
      <Button onClick={addBear}>Add Bears</Button>
    </div>
  );
};

export default CountButton;
