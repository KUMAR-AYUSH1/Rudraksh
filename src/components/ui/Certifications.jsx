import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["IOA", "BOA", "IAS", "ASAMI"];

  return (
    <div className="flex w-full items-center justify-center px-4 py-8">
      <div className="flex flex-wrap items-center justify-center gap-x-2 text-center text-2xl font-medium tracking-tight text-neutral-600 sm:text-3xl md:text-4xl dark:text-neutral-400">
        <span>Affiliated with</span>

        <FlipWords
          words={words}
          className="font-bold text-blue-600 dark:text-blue-400"
        />
      </div>
    </div>
  );
}