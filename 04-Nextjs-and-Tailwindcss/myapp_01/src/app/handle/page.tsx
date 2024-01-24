import Link from "next/link";
import React from "react";

export default async function page() {
  const data = await fetch("localhost://3000/api", { cache: "no-cache" });
  const datae = await data.json();
  return (
    <div>
      {datae.map((item: any, index: number) => {
        return (
          <div key={index}>
            <Link href={``}>{item.username}</Link>
          </div>
        );
      })}
    </div>
  );
}
