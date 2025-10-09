import React from "react";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
  size: "h2" | "h3";
  className?: string;
}

export function Title({ children, size, className }: Props) {
  const Heading = size === "h2" ? "h2" : "h3";
  return (
    <Heading
      className={`${playfairDisplay.className} text-stone-900 mb-2 ${className}`}
    >
      {children}
    </Heading>
  );
}
