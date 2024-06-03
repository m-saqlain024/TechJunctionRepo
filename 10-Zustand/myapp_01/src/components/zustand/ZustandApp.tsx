"use client";
import React, { ReactNode } from "react";
import { create } from "zustand";

type State = {
  bears: number;
};

type Actions = {
  increasePopulation: (qty: number) => void;
  removeAllBears: (qty: number) => void;
  updateBears: (qty: number) => void;
};

const useStore = create<State & Actions>((set) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: any) => set({ bears: newBears }),
}));

function ZustandApp() {
  const bear = useStore((state: any) => state.bears);
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div>
        <span>{bear} :Number of bear</span>
        <Control />
      </div>
    </div>
  );
}

const Control = (): ReactNode => {
  const increasePopulation = useStore((state: any) => state.increasePopulation);
  return (
    <button
      onClick={increasePopulation}
      className="bg-blue-300 p-4 rounded-sm block"
    >
      Increase
    </button>
  );
};

export default ZustandApp;
