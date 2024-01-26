import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const data = await fetch(`http://localhost:3000/api/${params.id}`).then(
    (res) => res.json()
  );
  return <div className="mt-10">hello {params.id}
  <h1>{data}</h1>
  </div>;
};
export default page;
