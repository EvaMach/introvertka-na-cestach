import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({ title, coverImage, date, excerpt, slug }: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold mb-3 leading-snug tracking-tighter">
          <Link href={`/journal/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className="text-base">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <p className="text-base leading-snug mb-4 text-stone-600">{excerpt}</p>
    </div>
  );
}
