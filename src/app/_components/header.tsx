import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-4 md:mb-4 mt-4 text-stone-700">
      <Link href="/" className="hover:text-accent">
        ↞
      </Link>
    </h2>
  );
};

export default Header;
