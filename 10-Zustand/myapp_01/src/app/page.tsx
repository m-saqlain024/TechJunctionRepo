import CounterStore from "@/components/zustand/CounterStore";
import ZustandApp from "@/components/zustand/ZustandApp";
import ZustandPerson from "@/components/zustand/ZustandPerson";
import React from "react";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col gap-5 items-center justify-center ">
      <ZustandApp />
      <ZustandPerson />
      <CounterStore />
    </main>
  );
}
