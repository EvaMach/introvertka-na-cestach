import MDXImage from "./mdx-image";

interface Props {
  children: React.ReactNode;
  position?: "left" | "right";
  imageProps: any;
  className?: string;
}

export default function VerticalImageLayout({
  children,
  position = "right",
  imageProps,
  className,
}: Props) {
  return (
    <div
      className={`flex flex-col lg:flex-row lg:gap-28 items-center lg:-mx-24 mb-4 ${className}`}
    >
      <div className="flex-1 max-w-2xl">{children}</div>
      <div
        className={`flex-shrink-0 md:w-1/3 max-w-xs object-cover ${
          position === "left" ? "order-first" : ""
        }`}
      >
        <MDXImage type="vertical" {...imageProps} />
      </div>
    </div>
  );
}
