"use client"
import React from "react";

async function blogs() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  console.log(data, "logs data");
  return (
    <div>
      {data.map((data: any, index: any) => {
        <div key={index}>{data.id}</div>;
      })}
      hello world
    </div>
  );
}

export default blogs;
