export async function fetchAllTags() {
  const response = await fetch(process.env.SERVER_API + "/tags", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 0,
    },
  });

  return await response.json();
}
