"use client";
import React from "react";
import db from "../data/db.json";
// import appRouter from "./server/index";

const data = db;
export default function Home() {
  const handleClick = () => {
    data.map((item, index) => {
      console.log(item.name);
    });
  };
  return (
    <div>
      <button onClick={handleClick}>button</button>
    </div>
  );
}
