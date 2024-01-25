export async function GET({params}:{params : {id : string}}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const data = await res.json();
  console.log(data);
  return Response.json(data);
}
