"use client";

import { useState } from "react";
import Image from "next/image";

export function useImageModal() {
  const [modal, setModal] = useState<{
    src: string;
    alt: string;
    width: number;
    height: number;
    type: "horizontal" | "vertical";
  } | null>(null);

  const openModal = (
    src: string,
    alt: string,
    width: number,
    height: number,
    type: "horizontal" | "vertical"
  ) => setModal({ src, alt, width, height, type });

  const closeModal = () => setModal(null);

  const Modal = modal ? (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <Image
        src={modal.src}
        alt={modal.alt}
        width={modal.width * 1.2}
        height={modal.height * 1.2}
        className={`rounded-md shadow-2xl ${
          modal.type === "vertical" ? "max-h-[90vh] w-auto" : "w-auto h-auto"
        }`}
        priority={false}
      />
    </div>
  ) : null;

  return { openModal, closeModal, Modal };
}
