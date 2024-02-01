"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdClear } from "react-icons/md";

const HeroSection = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    const changedValued = e.target.value;
    setValue(changedValued);
  };
  const handleClear = () => {
    setValue("");
  };
  return (
    <div className="bg-[#228be6] p-4 sm:p-10 md:p-32 ">
      <div className="text-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-bold md:leading-6 text-5xl py-2">
            Mantine Help Center
          </h1>
          <p className="text-gray-300 mt-2">
            22 frequently asked and general questions for Mantine 7.0+
          </p>
          <div className="relative mt-6 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <IoIosSearch className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              value={value}
              onChange={handleChange}
              className="block w-full rounded-md text-black border-0 py-4 pl-10 text-2xl placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none"
              placeholder="Search questions..."
            />
            {value.length > 0 ? (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <MdClear
                  onClick={handleClear}
                  className="h-6 w-6 text-gray-400"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
