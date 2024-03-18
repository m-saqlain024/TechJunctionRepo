import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function Mutations() {
  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.post("/posts", newTodo);
    },
  });

  return (
    <div>
      {mutation.isPending ? (
        "Adding todo..."
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          {/* <button
            onClick={() => {
              mutation.mutate({ id: 1, name: "Do Laundry" });
            }}
          >
            Create Todo
          </button> */}
        </>
      )}
    </div>
  );
}

export default Mutations;
