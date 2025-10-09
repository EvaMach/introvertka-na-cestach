import { ReactNode } from "react";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  const processedChildren =
    typeof children === "string"
      ? children.replace(/(\d+\.)\s/g, "$1\u00A0")
      : children;

  return (
    <h1
      className={`text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:leading-none md:mb-8 md:text-left ${playfairDisplay.className}`}
    >
      {processedChildren}
    </h1>
  );
}
