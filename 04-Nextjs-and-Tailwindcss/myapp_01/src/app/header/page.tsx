"use client";
import React from "react";
import { useRouter } from "next/router";
function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/")}>go back to home </button>
    </div>
  );
}

export default page;
