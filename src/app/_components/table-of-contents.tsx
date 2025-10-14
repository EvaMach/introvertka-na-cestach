"use client";

import { generateId } from "@/lib/utils";

interface Props {
  titles: string[];
}

export default function TableOfContents({ titles }: Props) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    title: string
  ) => {
    e.preventDefault();
    const id = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState({}, "", `#${id}`);
    }
  };

  return (
    <nav className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-stone-900">Obsah</h3>
      <ul className="space-y-2">
        {titles.map((title) => {
          return (
            <li key={title}>
              <a
                href={`#${generateId(title)}`}
                onClick={(e) => handleClick(e, title)}
                className="text-stone-700 hover:text-accent hover:underline"
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
