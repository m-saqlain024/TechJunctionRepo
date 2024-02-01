import { redirect } from "next/navigation";

async function fetchTeam(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  console.log(res.json(), "logs res");
  if (!res.ok) return undefined;
  return res.json();
}

export default async function Profile({ params }: { params: { id: string } }) {
  const team = await fetchTeam(params.id);
  if (team == "undefined") {
    redirect("/");
  }
  //   console.log(team, "logs team");
  return (
    <>
      <div>
        {params.id}
        {/* {team.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))} */}
      </div>
    </>
  );
}
