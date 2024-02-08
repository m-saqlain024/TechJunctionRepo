"use client"
import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Link from "next/link";

// Define the User type based on your provided structure
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const queryClient = new QueryClient();

export default function Trpc() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isFetching, isError, data, error } = useQuery<User[]>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
  });

  if (isFetching) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred: {error?.message}</div>;

  return (
    <div>
      <br />
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            {" "}
            <Link href={`/blogs/${item.id}`}>{item.name}</Link> 
          </li>
        ))}
      </ul>
    </div>
  );
}
