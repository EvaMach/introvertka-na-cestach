"use client";

import Image from "next/image";
import { useImageModal } from "@/hooks/useImageModal";

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
  const { openModal, Modal } = useImageModal();

  return (
    <>
      <div className="xl:-mx-56 gap-4 flex flex-col justify-between xl:flex-row items-center">
        <Image
          alt={leftImageAlt}
          width={800}
          height={600}
          src={leftImageSrc}
          className="w-full rounded object-cover max-h-96 shadow-lg"
          onClick={() =>
            openModal(leftImageSrc, leftImageAlt, 600, 400, "horizontal")
          }
        />
        <Image
          width={600}
          height={400}
          alt={rightImageAlt}
          src={rightImageSrc}
          className="w-full rounded object-cover max-h-96 shadow-lg"
          onClick={() =>
            openModal(rightImageSrc, rightImageAlt, 600, 400, "horizontal")
          }
        />
      </div>
      <div className="mt-2 text-center text-sm text-gray-600 italic">
        {caption}
      </div>
      {Modal}
    </>
  );
}
