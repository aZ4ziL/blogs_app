import LoadImage from "@/components/LoadImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang - Viper Code",
  description: "Tentang Viper Code",
};

export default function About() {
  return (
    <section className="pt-[150px]">
      <h1 className="text-4xl font-bold mb-10 text-center">Tentang</h1>

      <div className="border-t border-t-gray-300 dark:border-t-gray-600 pt-5">
        <div className="w-full flex items-center flex-col justify-center">
          <LoadImage
            image="/avatar.webp"
            alt="avatar"
            width={2200}
            height={880}
            className="w-[200px] h-[200px] rounded-full"
          />
          <h1 className="text-3xl font-bold mt-2 mb-3">Fajri Fath</h1>
          <p className="text-sm font-extralight text-center">
            Seorang yang hobi tentang dunia pemrograman
          </p>
        </div>
        <div className="text-sm font-light w-full text-gray-600 dark:text-gray-300"></div>
      </div>
    </section>
  );
}
