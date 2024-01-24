import Link from "next/link";
import React from "react";

const page = async () => {
  const data = await fetch("http://localhost:3000/api").then((res) =>
    res.json()
  );
  return (
    <div className="mt-10">
      {data?.map((post: any, index: any): any => {
        return (
          <div key={index}>
            <Link href={`/handle/${post.id}`}>{post.username}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default page;
