export async function GET(userid: any) {
  const res: any = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userid}`
  ).then((res: any) => res.json());
  // const data = await res.json();
  console.log(userid, "logs user id ");

  return Response.json({ res });
}
