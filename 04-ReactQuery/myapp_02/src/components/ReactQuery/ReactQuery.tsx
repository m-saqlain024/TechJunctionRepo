"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { json } from "stream/consumers";

function ReactQuery() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["jsonplaceholder"],
    queryFn: () => {
      fetch("https://jsonplaceholder.typicode.com/posts").then(
        (res) => res.json
      );
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return <div>{JSON.stringify(data)}</div>;
}
export default ReactQuery;
