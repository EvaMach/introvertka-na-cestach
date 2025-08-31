import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-4 md:mb-16 mt-4 md:mt-8">
      <Link href="/" className="hover:underline">
        ↞
      </Link>
    </h2>
  );
};

export default Header;
