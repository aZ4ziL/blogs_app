export async function fetchAllArticle(
  status: "PUBLISHED" | "DRAFTED",
  offset: number,
  limit: number,
  order: "desc" | "asc"
) {
  const response = await fetch(
    process.env.SERVER_API +
      `/articles?offset=${offset}&limit=${limit}&order=${order}&status=${status}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  return await response.json();
}

export async function fetchArticle(slug: string) {
  const response = await fetch(
    process.env.SERVER_API + "/articles?slug=" + slug,
    {
      next: {
        revalidate: 10,
      },
    }
  );

  if (response.status === 404) {
    return null;
  }

  return await response.json();
}
