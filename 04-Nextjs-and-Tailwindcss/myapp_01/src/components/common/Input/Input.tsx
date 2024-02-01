"use client";
import React, { useState } from "react";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (event: any) => {
    const value = event.target.value;
    setInputValue(value);
    if (/^-?\d+$/.test(value)) {
      const intValue = parseInt(value);

      if (intValue >= -99 && intValue <= 99) {
        setErrorMessage("");
      } else {
        setErrorMessage("Please enter a number between -99 and 99.");
      }
    } else {
      setErrorMessage("");
    }
  };
  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p style={{ color: "red" }}>{errorMessage}</p>
    </>
  );
}

export default Input;
