import React, { useEffect } from "react";



const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
};

const Pratices = () => {
  useEffect(() => {
    const fetchDataAsync = async () => {
      console.log(await fetchData());
    };

    fetchDataAsync();
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return <div>hello</div>;
};

export default Pratices;
