"use client";
import React, { useState } from "react";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({
    name: "John",
    age: 30,
    city: "New York",
  });

  const updateName = () => {
    setValue({
      ...value,
      name: "saqlain",
    });
  };

  const handleChange = (e: any) => {
    setData(e.target.value);
  };

  const showModel = () => {
    setShow(true);
  };
  return (
    <div>
      <button
        className="p-4 m-4 rounded-md bg-gray-500 text-white "
        onClick={() => setCount(count + 1)}
      >
        +
      </button>{" "}
      {count}
      <button
        className="p-4 m-4 bg-gray-500 text-white "
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <div>
        <p>Name: {value.name}</p>
        <p>Age: {value.age}</p>
        <p>City: {value.city}</p>

        <button
          className="p-4 m-4 rounded-md bg-gray-500 text-white "
          onClick={updateName}
        >
          Change Name
        </button>
      </div>
      {show ? (
        <div className="fixed ">
          <h1>{data}</h1>
        </div>
      ) : (
        ""
      )}
      <input
        className="border-black border-2 placeholder:text-gray-300 "
        type="text "
        onChange={handleChange}
        value={data}
      />
      <button onClick={showModel}> show model </button>
    </div>
  );
}

export default page;
