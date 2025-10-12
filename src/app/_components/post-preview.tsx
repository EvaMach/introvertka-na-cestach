import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { Title } from "./title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  path: string;
};

export function PostPreview({ title, coverImage, date, excerpt, path }: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage path={path} title={title} src={coverImage} />
      </div>
      <div className="flex justify-between items-center">
        <Title size="h3">
          <Link
            href={path}
            className="hover:underline decoration-accent underline-offset-4"
          >
            {title}
          </Link>
        </Title>
        <div className="text-base md:text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <p className="text-base md:text-lg leading-snug mb-4 text-stone-600">
        {excerpt}
      </p>
    </div>
  );
}
