"use client";
import { usePersonStore } from "@/app/_store/store";
import React from "react";

function ZustandPerson() {
  const firstName = usePersonStore((state) => state.firstName);
  const handleChange = usePersonStore((state) => state.updateFirstName);
  return (
    <div className="block">
      <form>
        <label className="block" htmlFor="firstname">
          Enter your First Name :
        </label>
        <input
          className="border bottom-2 border-black rounded-sm p-2"
          placeholder="enter text here ..."
          type="text"
          value={firstName}
          onChange={(e) => handleChange(e.currentTarget.value)}
        />
        <p>
          Hello, <strong>{firstName}!</strong>
        </p>
      </form>
    </div>
  );
}

export default ZustandPerson;
