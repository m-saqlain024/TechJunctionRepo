export function page() {
  const data = fetch("localhost:4000").then((res) => res.json());
  return data;
}
