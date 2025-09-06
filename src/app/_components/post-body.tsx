import { MDXRemote } from "next-mdx-remote/rsc";
import MDXImage from "./mdx-image";
import FloatingButton from "./floating-button";

interface Props {
  content: string;
}

interface VerticalImageLayoutProps {
  children: React.ReactNode;
  imageProps: any;
}

function VerticalImageLayout({
  children,
  imageProps,
}: VerticalImageLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-28 items-center lg:-mx-24 mb-4">
      <div className="flex-1 max-w-2xl">{children}</div>
      <div
        className={`flex-shrink-0 md:w-1/3 max-w-xs ${
          imageProps.position === "left" ? "order-first" : ""
        }`}
      >
        <MDXImage type="vertical" {...imageProps} />
      </div>
    </div>
  );
}

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto text-justify first-letter:text-3xl first-letter:font-semibold first-letter:text-accent">
      <MDXRemote
        source={content}
        components={{
          MDXImage: MDXImage,
          img: MDXImage,
          VerticalImageLayout,
          h1: ({ children, ...props }) => (
            <h1 className="text-3xl font-bold mb-6 mt-8" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2 className="text-2xl font-semibold mb-4 mt-6" {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3
              className="text-xl md:text2xl font-semibold mb-3 mt-5"
              {...props}
            >
              {children}
            </h3>
          ),
          p: ({ children, ...props }) => (
            <p className="text-base md:text-lg mb-4 leading-relaxed" {...props}>
              {children}
            </p>
          ),
          a: ({ children, href, ...props }) => (
            <a
              className="text-accent underline hover:text-accent-dark"
              href={href}
              {...props}
            >
              {" "}
              {children}
            </a>
          ),
          ul: ({ children, ...props }) => (
            <ul className="mb-4 list-disc list-inside space-y-1" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="mb-4 list-decimal list-inside space-y-1" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="ml-4" {...props}>
              {children}
            </li>
          ),
          blockquote: ({ children, ...props }) => (
            <blockquote
              className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-700"
              {...props}
            >
              {children}
            </blockquote>
          ),
        }}
      />
      <FloatingButton />
    </div>
  );
}
