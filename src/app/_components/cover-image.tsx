import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  path?: string;
};

const CoverImage = ({ title, src, path }: Props) => {
  const image = (
    <div className="w-full h-[50vh] relative overflow-hidden rounded-md">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        title={title}
        fill
        loading="lazy"
        className={cn("object-cover", {
          "hover:shadow-xl transition-shadow duration-200": path,
        })}
        sizes="100vw"
      />
    </div>
  );

  return (
    <div className="sm:mx-0">
      {path ? (
        <Link href={path} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
