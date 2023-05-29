import LoadImage from "@/components/LoadImage";
import Markdown from "@/components/Markdown";
import { fetchArticle } from "@/lib/fetchArticle";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

interface BlogSlugProps {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: BlogSlugProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const article = await fetchArticle(slug);

  if (!article) {
    notFound();
  }

  return {
    title: `${article.title} - Viper Code`,
  };
}

export default async function BlogSlug({ params }: BlogSlugProps) {
  const article = await fetchArticle(params.slug);

  return (
    <>
      <section className="pt-[150px]">
        <h1 className="text-5xl font-extrabold">{article.title}</h1>
        <div className="flex flex-col items-start my-3">
          <div className="flex items-center gap-1">
            <h6 className="font-bold text-lg">Tags:</h6>
            {article?.tags?.map((value: any, index: number) => (
              <span
                key={index}
                className="text-sm uppercase bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-3 py-1 rounded"
              >
                {value.title}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <h6 className="font-bold text-lg">Views:</h6>
            <span>{article.views}</span>
          </div>
        </div>
        {article.logo !== "" && (
          <div className="flex items-center justify-center my-5">
            <LoadImage
              image={process.env.SERVER_API + article.logo}
              alt={article.title}
              width={2200}
              height={880}
              className="w-auto h-[300px]"
            />
          </div>
        )}
        <div className="pt-[50px] border-t border-t-gray-300 dark:border-t-gray-600">
          <Markdown content={article.content} />
        </div>
      </section>
    </>
  );
}
