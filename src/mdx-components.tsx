import type { MDXComponents } from "mdx/types";
import MDXImage from "./app/_components/mdx-image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: ({ src, alt, ...props }) => {
      if (src) {
        return <MDXImage src={src} alt={alt || ""} {...props} />;
      }
      return null;
    },
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
      <h3 className="text-xl font-semibold mb-3 mt-5" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="mb-4 leading-relaxed" {...props}>
        {children}
      </p>
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
    ...components,
  };
}
