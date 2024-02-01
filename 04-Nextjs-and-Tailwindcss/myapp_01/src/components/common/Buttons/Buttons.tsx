"use client";
import { usePathname } from "next/navigation";
import React from "react";

function Buttons() {
  const pathname = usePathname();
  const swtichLocale = (locale: string) => {
    const newPathname = `${locale}/${pathname}`;
    window.history.replaceState(null, "", newPathname);
  };
  return (
    <div>
      <button onClick={() => swtichLocale("fr")}>English</button>
      <button onClick={() => swtichLocale("fr")}>French</button>
    </div>
  );
}

export default Buttons;
