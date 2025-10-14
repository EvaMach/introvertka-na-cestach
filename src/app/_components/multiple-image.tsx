"use client";

import Image from "next/image";
import { useImageModal } from "@/hooks/useImageModal";

interface Props {
  imageSrcs: string[];
  caption: string;
  imageAlts: string[];
}

export default function MultipleImage({
  imageSrcs,
  imageAlts,
  caption,
}: Props) {
  const { openModal, Modal } = useImageModal();

  return (
    <>
      <div className="lg:-mx-36 xl:-mx-56 gap-4 flex flex-col justify-between lg:flex-row items-center">
        {imageSrcs.map((src, index) => (
          <Image
            key={index}
            alt={imageAlts[index]}
            width={800}
            height={600}
            src={src}
            loading="lazy"
            className={`w-full rounded object-cover max-h-96 shadow-lg ${
              imageSrcs.length > 2 ? "max-w-[400]" : "max-w-[600]"
            }`}
            onClick={() =>
              openModal(src, imageAlts[index], 600, 400, "horizontal")
            }
          />
        ))}
      </div>
      <div className="mt-2 mb-4 text-center text-sm text-gray-600 italic">
        {caption}
      </div>
      {Modal}
    </>
  );
}
