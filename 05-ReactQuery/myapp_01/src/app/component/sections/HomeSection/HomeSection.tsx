import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
function HomeSection() {
  const { isLoading, data, isError } = useQuery("id", () => {
    return axios.get("http://localhost:4000/posts");
  });
  console.log(data);
  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    return <h1>Oop! 404 page not found</h1>;
  }
  return (
    <div>
      <h1>this is home section</h1>
      {JSON.stringify(data)}
    </div>
  );
}

export default HomeSection;
