export default async function fetchUser(token: any) {
  const response = await fetch(process.env.SERVER_API + "/user/auth", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const result = await response.json();

  return result;
}
