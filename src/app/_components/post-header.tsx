import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import WindingPath from "./winding-path";
import TrailOverview, { Overview } from "./trail-overview";
import TableOfContents from "./table-of-contents";
import WrapContainer from "./wrap-container";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  overview?: Overview;
};

export function PostHeader({
  title,
  coverImage,
  date,
  excerpt,
  overview,
}: Props) {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
        <div className="md:max-w-96">
          <PostTitle>{title}</PostTitle>
          <div className="text-base md:text-lg mb-2 md:mb-4 mt-4 md:mt-10">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-base md:text-lg">{excerpt}</p>
        </div>
        <div className="w-full md:w-3/4 mb-4 md:mb-8">
          <CoverImage title={title} src={coverImage} />
        </div>
        <WindingPath />
      </section>
      {overview && (
        <section className="flex flex-wrap gap-4 md:gap-8 items-baseline ">
          <TrailOverview overview={overview} />
          <TableOfContents
            titles={[
              "Obecné informace",
              "Úseky",
              "Gearlist",
              "To do před odjezdem",
            ]}
          />
        </section>
      )}
    </>
  );
}
