// "use client";
import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
export default function Home() {
  // const router = useRouter();
  // const myfun = () => {
  //   router.push("/handle#saqi");
  // };
  return (
    <main>
      <Link href={"/handle#saqi"} scroll={true}>
        go handle
      </Link>

      {/* <button onClick={myfun}> aslo go to handle page</button> */}
    </main>
  );
}
