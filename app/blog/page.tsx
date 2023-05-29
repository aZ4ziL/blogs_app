import ArticleLists from "@/components/ArticleLists";
import { fetchAllArticle } from "@/lib/fetchArticle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Viper Code",
  description: "Blog Viper Code",
};

export default async function Blog() {
  const articles = await fetchAllArticle("PUBLISHED", 0, 4, "desc");

  return (
    <>
      <ArticleLists articles={articles} />
    </>
  );
}
