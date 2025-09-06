import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function HeroPost({ title, coverImage, date, excerpt, slug }: Props) {
  return (
    <section className="w-full bg-accentBg pt-6 px-6 pb-8 rounded-sm md:w-4/5 mb-12 md:mb-16">
      <Link className="group" href={`/journal/${slug}`}>
        <div className="mb-8 md:mb-4">
          <CoverImage title={title} src={coverImage} />
        </div>
        <div className="flex justify-between">
          <h3 className="mb-2 text-xl text-stone-900 tracking-tight font-bold md:text-3xl group-hover:underline">
            {title}
          </h3>
          <div className="text text-right pt-2 text-stone-900 md:mb-2 text-base md:text-lg group-hover:underline">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <p className="text-base md:text-lg text-stone-800 leading-relaxed mb-4 group-hover:underline">
          {excerpt}
        </p>
      </Link>
    </section>
  );
}
