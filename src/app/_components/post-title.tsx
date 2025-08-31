import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:leading-none md:mb-8 md:text-left">
      {children}
    </h1>
  );
}
