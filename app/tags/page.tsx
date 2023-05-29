import { fetchAllTags } from "@/lib/fetchTags";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tag - Viper Code",
  description: "List tag Viper Code",
};

export default async function Tags() {
  const tags = await fetchAllTags();

  return (
    <div className="w-full h-[50vh]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] lg:w-[50%]">
        <div className="flex items-center flex-col justify-center gap-4">
          <h1 className="text-5xl font-extrabold">Tags</h1>
          <div className="w-[1px] h-10 bg-gray-300 dark:bg-gray-600 hidden md:block"></div>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {tags.map((value: any, index: number) => (
              <Link href="/" legacyBehavior key={index}>
                <a className="flex items-center gap-[1px] text-xs uppercase">
                  <span className="text-sky-600 whitespace-nowrap text-xs">
                    {value.title}
                  </span>
                  <span className="">({value.articles.length})</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
