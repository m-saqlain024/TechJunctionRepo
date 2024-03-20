"use client";
import ReactQuery from "@/components/ReactQuery/ReactQuery";
import UseQuery from "@/components/UseQuery/UseQuery";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQuery />
      </QueryClientProvider>
    </>
  );
}
