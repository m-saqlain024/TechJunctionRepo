import React from "react";
export default function Home() {
  const data = fetch("/api");
  console.log(data);
  return (
    <>
      <div>hello</div>
    </>
  );
}
