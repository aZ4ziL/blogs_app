import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tentang - Viper Code",
  description: "Tentang Viper Code",
};

export default function About() {
  return (
    <section className="pt-[150px]">
      <h1 className="text-4xl font-bold mb-10">Tentang</h1>

      <div className="border-t border-t-gray-300 dark:border-t-gray-600 pt-5">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-[400px] flex items-center flex-col justify-center">
            <Image
              src="/avatar.webp"
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
          <div className="text-sm font-light w-full">
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              possimus dolorem magni accusantium perspiciatis quidem quos
              tempora iusto debitis doloremque!
            </p>
            <p className="mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore totam sint delectus exercitationem, impedit est
              laboriosam doloremque porro quam at id aperiam fuga explicabo
              voluptas molestias omnis, consequatur quia cumque repudiandae!
              Commodi dolores, nulla facere cum laboriosam ratione quasi ipsa?
            </p>
            <p className="mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore totam sint delectus exercitationem, impedit est
              laboriosam doloremque porro quam at id aperiam fuga explicabo
              voluptas molestias omnis, consequatur quia cumque repudiandae!
              Commodi dolores, nulla facere cum laboriosam ratione quasi ipsa?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
