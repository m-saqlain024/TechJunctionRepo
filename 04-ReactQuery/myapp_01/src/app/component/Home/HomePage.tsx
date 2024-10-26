'use client'
import React from 'react'
import { QueryClient , QueryClientProvider } from 'react-query';
import { HomeSection } from '../sections';
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const query = new QueryClient();
function HomePage() {
  return (
    <QueryClientProvider client={query}>
      <HomeSection />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default HomePage;
