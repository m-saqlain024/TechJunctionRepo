
import React from "react";
import  Link  from "next/link"

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");


  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <main>{data?.map((item:any , index:any)=>{
    return <li key={index}><Link href={`/blogs/${item.id}`}>{item.username}</Link></li>
  })}</main>;
}