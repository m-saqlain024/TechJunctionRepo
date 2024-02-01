import React from "react";
import { HeroSection, PricingSections } from "@/containers/HomePage";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="bg-[#f4f4f5] mt-2">
        <PricingSections />
      </div>
    </main>
  );
}
