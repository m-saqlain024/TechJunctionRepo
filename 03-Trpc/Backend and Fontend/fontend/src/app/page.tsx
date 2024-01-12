"use client";
import Axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  console.log(data, "logs data");

  const getData = async () => {
    try {
      const response = await Axios.get("http://localhost:3000/getData");
      console.log("Axios Response:", response); // Log the entire response object
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>{data}</h1>
      <h2>this is a cII</h2>
    </>
  );
}
