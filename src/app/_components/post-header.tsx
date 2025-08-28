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
      <section className="flex gap-12">
        <div className="max-w-60">
          <PostTitle>{title}</PostTitle>
          <div className="mb-4 mt-10">
            <DateFormatter dateString={date} />
          </div>
          <p>{excerpt}</p>
        </div>
        <div className="w-3/4 mb-4 md:mb-8 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
      </section>
    </>
  );
}
