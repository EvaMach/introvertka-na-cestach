import { MDXRemote } from "next-mdx-remote/rsc";
import MDXImage from "./mdx-image";
import FloatingButton from "./floating-button";
import MultipleImage from "./multiple-image";
import TrailOverview from "./trail-overview";
import TrailSectionDetails from "./trail-section-details";
import { GearList } from "./gear-list";
import Iframe from "./iframe";
import VerticalImageLayout from "./vertical-image-layout";

interface Props {
  content: string;
}

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-3xl mx-auto text-justify first-letter:text-3xl first-letter:font-semibold first-letter:text-accent">
      <MDXRemote
        source={content}
        components={{
          MDXImage: MDXImage,
          MultipleImage: MultipleImage,
          TrailOverview: TrailOverview,
          TrailSectionDetails: TrailSectionDetails,
          img: MDXImage,
          Iframe: Iframe,
          VerticalImageLayout: VerticalImageLayout,
          GearList: GearList,
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
            <li className="ml-4 text-base md:text-lg" {...props}>
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
