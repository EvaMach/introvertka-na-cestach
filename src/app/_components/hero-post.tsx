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
    <section className="w-full md:w-3/4 mb-8 md:mb-16">
      <Link className="group" href={`/journal/${slug}`}>
        <div className="flex items-baseline justify-between">
          <div>
            <h3 className="mb-2 text-xl font-bold md:text-3xl group-hover:underline">
              {title}
            </h3>
            <p className="text-sm md:text-lg text-stone-700 leading-relaxed mb-4 group-hover:underline">
              {excerpt}
            </p>
          </div>
          <div className=" text-sm md:text-lg group-hover:underline">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div className="mb-8 md:mb-4">
          <CoverImage title={title} src={coverImage} />
        </div>
      </Link>
    </section>
  );
}
