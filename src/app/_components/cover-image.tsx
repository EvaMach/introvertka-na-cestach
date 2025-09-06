import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <div className="w-full h-[50vh] relative overflow-hidden rounded-md">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        fill
        className={cn("object-cover", {
          "hover:shadow-xl transition-shadow duration-200": slug,
        })}
        sizes="100vw"
      />
    </div>
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/journal/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
