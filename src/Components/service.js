export default async function fetchData() {
  const response = await fetch("/healthtracker");
  const user = await response.json();
  console.log("from services", user);
  return user;
}
