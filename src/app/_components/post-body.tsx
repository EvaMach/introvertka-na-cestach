import { MDXRemote } from "next-mdx-remote/rsc";
import MDXImage from "./mdx-image";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto pl-2 text-justify first-letter:text-3xl first-letter:font-semibold first-letter:text-accent">
      <MDXRemote
        source={content}
        components={{
          MDXImage: MDXImage,
          img: MDXImage,
        }}
      />
    </div>
  );
}
