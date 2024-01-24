// export default function Page({params}:{params :{slug:string}}){
//     return <div>My post : {params.slug}</div>
// }

import React from "react";

async function page() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  console.log(posts, "logs post ");
  return (
    <>
      {posts?.map((post: any, index: any): any => {
        return <div key={index}>{post.username}</div>;
      })}
    </>
  );
}

export default page;
