import { useQuery } from "@tanstack/react-query";
import React from "react";

function UseQuery() {
  const { data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () => {
      const data = fetch("http://localhost:3000/posts").then((res) =>
        res.json()
      );
      return data;
    },
  });

  console.log(data, "logs nothing");
  return (
    <div>
      <div>{JSON.stringify(data)}</div>
      this is a pratices file
    </div>
  );
}

export default UseQuery;
