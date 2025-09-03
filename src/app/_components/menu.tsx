"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/journal", label: "Příběhy" },
  // { href: "/guides", label: "Průvodci" },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      <div className="max-w-5xl flex gap-8 mb-6 md:mb-12">
        {links.map(({ href, label }) => {
          const isActive =
            pathname === href || (href === "/journal" && pathname === "/");
          return (
            <Link
              key={href}
              href={href}
              className={`transition-colors font-light text-base md:text-xl uppercase ${
                isActive
                  ? "text-accent font-normal hover:underline underline-offset-4"
                  : "text-stone-700 hover:text-stone-900 hover:underline hover:font-normal underline-offset-4"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
