import React from 'react';
import { Button } from '@react-monorepo/ui';

interface arr {
  name: string;
  age: number;
  education: string;
  skill: string;
}

let arr: arr[] = [
  {
    name: 'saqlain',
    age: 24,
    education: 'bs Software engineering',
    skill: 'frontend developer',
  },
  {
    name: 'Abbas',
    age: 22,
    education: 'IT',
    skill: 'Backend  developer',
  },
  {
    name: 'Kiyan',
    age: 24,
    education: 'computer scinence',
    skill: 'frontend developer',
  },
];
export function Products() {
  return (
    <>
      <div className="max-w-[1400px] mx-auto flex justify-center p-4">
        {arr.map((item, key) => {
          return (
            <div
              key={key}
              className="flex flex-col gap-5  justify-between  py-5 px-4 shadow-md rounded-md hover:scale-110 hover:bg-gray-100"
            >
              <h1 className="font-medium text-lg capitalize text-center">
                {item.name}
              </h1>
              <p className="text-lg font-light">
                I am a {item.name} {item.age}, i have exprience in {item.skill},
                and my education is {item.skill}
              </p>
              <Button />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
