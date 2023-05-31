import Overview from "@/components/DashboardComponents/Overview";
import { fetchAllArticleByAuthorId } from "@/lib/fetchArticle";
import fetchUser from "@/lib/fetchUser";
import { cookies } from "next/headers";

export default async function Dashboard() {
  const token = cookies().get("token");

  const user = await fetchUser(token?.value);

  const articles = await fetchAllArticleByAuthorId(user.id, token?.value);

  return (
    <>
      <Overview user={user} articles={articles} />
    </>
  );
}
