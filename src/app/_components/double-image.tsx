import Image from "next/image";
import MDXImage from "./mdx-image";

interface Props {
  leftImageSrc: string;
  rightImageSrc: string;
  caption: string;
  leftImageAlt: string;
  rightImageAlt: string;
}

export default function DoubleImage({
  leftImageSrc,
  rightImageSrc,
  leftImageAlt,
  rightImageAlt,
  caption,
}: Props) {
  return (
    <>
      <div className="xl:-mx-56 gap-4 flex flex-col justify-between xl:flex-row items-center">
        <Image
          alt={leftImageAlt}
          width={600}
          height={400}
          src={leftImageSrc}
          className="w-full rounded object-cover max-h-96 shadow-lg"
        />
        <Image
          width={600}
          height={400}
          alt={rightImageAlt}
          src={rightImageSrc}
          className="w-full rounded object-cover max-h-96 shadow-lg"
        />
      </div>
      <div className="mt-2 text-center text-sm text-gray-600 italic">
        {caption}
      </div>
    </>
  );
}
