import Image from "next/image";
import { ReactNode } from "react";

interface MDXImageProps {
  type?: "horizontal" | "vertical";
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  children?: ReactNode;
}

export default function MDXImage({
  type = "horizontal",
  src,
  alt,
  width = 800,
  height = 600,
  className = "object-bottom",
  children,
}: MDXImageProps) {
  return (
    <div className={`mb-4`}>
      <div className="relative max-w-4xl -mx-8">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full rounded object-cover max-h-96 shadow-lg ${
            type === "horizontal" ? "max-h-96" : ""
          } ${className}`}
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
