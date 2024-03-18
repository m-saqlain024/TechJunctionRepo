"use client";
import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function ReactQuery() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["jsonplaceholder"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }
  console.log(error?.message);
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log(data, "logs data");
  return <ul>{JSON.stringify(data)}</ul>;
}
export default ReactQuery;
