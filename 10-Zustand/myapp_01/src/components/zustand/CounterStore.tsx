"use client";
import { useCountStore } from "@/app/_store/store";
import React from "react";

function CounterStore() {
  const counterstoreCount = useCountStore((state) => state.nested.count);
  const counterstoreStart = useCountStore((state) => state.nested.start);
  const handleClick = useCountStore((state) => state.Inc);
  return (
    <div>
      <span className="block  font-serif leading-6 text-red-400">
        Count(+1) :{counterstoreCount}
      </span>
      <span className="block  font-serif leading-6 text-red-400">
        Count(+10) :{counterstoreStart}
      </span>

      <button
        onClick={handleClick}
        className="px-2 py-4 bg-gray-500 text-black rounded-md hover:bg-slate-100 "
      >
        click me
      </button>
    </div>
  );
}

export default CounterStore;
