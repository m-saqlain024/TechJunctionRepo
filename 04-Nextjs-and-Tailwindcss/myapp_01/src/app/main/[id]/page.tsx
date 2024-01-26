import React from "react";

export default function page({ params }: { params: { id: string } }) {
  return <div>this is a id {params.id}</div>;
}
