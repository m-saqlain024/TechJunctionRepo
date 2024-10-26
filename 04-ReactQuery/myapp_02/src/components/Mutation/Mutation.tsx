import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const addressApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchAddress = async () => {
  const response = await addressApi.get(`/address`);
  return response.data;
};


export function useAddress() {
  return useQuery({
    queryKey: ["address"],
    queryFn: fetchAddress,
  });
}
function Mutations() {
 const { data: theAddress, error, isLoading } = useAddress();

 if (isLoading) {
   console.log("Loading...");
   return <p>Loading...</p>;
 }
 if (error) {
   return <p>Error</p>;
 }

 console.log("Address:", theAddress);
  return (
    <>
    <div>asdhfjakls</div></>
    // <div>
    //   {mutation.isPending ? (
    //     "Adding todo..."
    //   ) : (
    //     <>
    //       {mutation.isError ? (
    //         <div>An error occurred: {mutation.error.message}</div>
    //       ) : null}

    //       {mutation.isSuccess ? <div>Todo added!</div> : null}

    //       {/* <button
    //         onClick={() => {
    //           mutation.mutate({ id: 1, name: "Do Laundry" });
    //         }}
    //       >
    //         Create Todo
    //       </button> */}
    //     </>
    //   )}
    // </div>
  );
}

export default Mutations;
