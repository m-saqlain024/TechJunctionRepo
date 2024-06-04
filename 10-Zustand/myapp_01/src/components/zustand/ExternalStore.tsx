"use client";
import {
  ExternalDisplay,
  setText,
  useExternalAction,
  useExternalStore,
} from "@/app/_store/store";
import React, { ReactNode } from "react";

function ExternalStore(): ReactNode {
  const count = useExternalStore((state) => state.count);
  const display = useExternalStore((state) => state.display);
  const text = useExternalStore((state) => state.text);

  return (
    <div className="border-2 border-black rounded-sm p-10">
      <span className="block leading-6 capitalize transition-all ease-linear duration-1000">
        count: {count}
      </span>
      {display && (
        <span className="block leading-6 capitalize transition-all ease-linear duration-1000">
          text: {text}
        </span>
      )}
      <br />
      <div className="flex justify-between ">
        <button
          onClick={ExternalDisplay}
          className="border-2 shadow-xl bg-blue-300 p-3 rounded-lg"
        >
          display
        </button>
        <button
          onClick={useExternalAction}
          className="border-2 shadow-xl bg-blue-300 p-3 rounded-lg"
        >
          {" "}
          click me
        </button>
      </div>
    </div>
  );
}

export default ExternalStore;
