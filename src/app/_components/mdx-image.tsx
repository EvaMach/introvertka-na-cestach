import Image from "next/image";
import { ReactNode } from "react";

interface MDXImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  children?: ReactNode;
}

export default function MDXImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  children,
}: MDXImageProps) {
  return (
    <div className={`my-8 ${className}`}>
      <div className="relative w-full max-w-4xl mx-auto">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-xl shadow-lg w-full h-auto"
          priority={false}
        />
        {children && (
          <div className="mt-2 text-center text-sm text-gray-600 italic">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
