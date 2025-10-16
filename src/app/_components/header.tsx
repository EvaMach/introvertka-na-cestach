"use client";

import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <h2 className="text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-4 md:mb-4 mt-4 text-stone-700">
      <button onClick={() => router.back()} className="hover:text-accent">
        ↞
      </button>
    </h2>
  );
};

export default Header;
