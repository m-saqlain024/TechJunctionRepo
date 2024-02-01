

async function fetchTeam(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const data = res.json()
  return data;
}

export default async function Page({ params }: { params: { id: string } }) {
  const team = await fetchTeam(params.id);
  
  return (
    <>
      <div>{JSON.stringify(team)}</div>
    </>
  );
}
