import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      this is a nested route in a next js app router
      <br />
      <button>
        <Link href={"/header"}>Go back to header </Link>
      </button>
    </div>
  );
}

export default page;
