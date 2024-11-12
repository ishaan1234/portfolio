"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { Cover } from "@/components/ui/cover";

export function Home() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg p-8">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-5xl text-4xl text-white relative z-20 font-semibold leading-tight")}>
        Ishaan Gupta
      </h1>
      <p className="text-center mt-6 text-neutral-300 relative z-20 max-w-4xl mx-auto text-lg leading-relaxed">
        Leveraging technology to solve real-world challenges with a strong foundation in AI, software development by building fast, reliable and efficient solutions
      </p>
    </div>
  );
}
