import React from "react";

function Card({
  title = "saqi",
  caption = "this is a pakistan ",
  pricing = "10",
  features = "dfjas",
  label = "try for free",
}) {
  return (
    <div className="bg-white p-5 rounded-md">
      <h2 className="text-lg capitalize font-bold m">{title}</h2>
      <p>{caption}</p>
      <h1>${pricing} / month</h1>
      <ul>{features}</ul>
    </div>
  );
}

export default Card;
