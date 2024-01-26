"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
function Navbar() {
  const pathname = usePathname();
  return (
    <div className="w-full">
      <ul className="flex justify-between list-none">
        <Link href={"/"} className={`link ${pathname === "/" ? "active" : ""}`}>
          Home
        </Link>
        <li>Services</li>
        <li>About us </li>
      </ul>
    </div>
  );
}

export default Navbar;
