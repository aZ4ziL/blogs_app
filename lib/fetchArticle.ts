export async function fetchAllArticle(
  status: string,
  offset: number,
  limit: number,
  token?: string,
  order?: "desc" | "asc"
) {
  if (typeof token === "undefined") {
    const response = await fetch(
      process.env.SERVER_API +
        `/articles?status=${status}&offset=${offset}&limit=${limit}&order=${order}`,
      {
        cache: "no-store",
      }
    );

    return await response.json();
  } else {
    const response = await fetch(
      process.env.SERVER_API +
        `/articles?status=${status}&offset=${offset}&limit=${limit}&token=${token}&order=${order}`,
      {
        cache: "no-store",
      }
    );

    return await response.json();
  }
}

export async function fetchArticle(id: string) {
  const response = await fetch(process.env.SERVER_API + "/articles?id=" + id, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  return await response.json();
}
