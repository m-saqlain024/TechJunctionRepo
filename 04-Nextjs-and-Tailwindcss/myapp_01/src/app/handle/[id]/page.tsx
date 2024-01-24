async function Page({ params }: any) {
  const postData = await fetch(
    `http://localhost:3000/handle/${params.id}`
  ).then((res) => res.json());
  //   console.log(postData, "logs postData");
  return <div>My Post: {postData}</div>;
}

export default Page;
