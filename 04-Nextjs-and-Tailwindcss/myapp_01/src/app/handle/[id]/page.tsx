async function Page({ params }: any) {
  const postData = await fetch(
    `http://localhost:3000/api/handle/${params.id}`
  ).then((res) => res.json());
  return <div>My Post: {postData}</div>;
}

export default Page;
