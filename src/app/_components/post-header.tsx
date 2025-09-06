import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
};

export function PostHeader({ title, coverImage, date, excerpt }: Props) {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="md:max-w-60">
          <PostTitle>{title}</PostTitle>
          <div className="text-base md:text-lg mb-2 md:mb-4 mt-4 md:mt-10">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-base md:text-lg">{excerpt}</p>
        </div>
        <div className="w-full md:w-3/4 mb-4 md:mb-8">
          <CoverImage title={title} src={coverImage} />
        </div>
      </section>
    </>
  );
}
