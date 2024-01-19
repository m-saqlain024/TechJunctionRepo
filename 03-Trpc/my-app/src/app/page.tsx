import { serverClient } from "./_trpc/serverClient";

export default async function Home() {
  const { userName } = await serverClient.getUserName();
  return (
    <>
      <h1>hello {userName}</h1>
    </>
  );
}