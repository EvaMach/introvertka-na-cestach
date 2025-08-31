import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col md:flex-row w-full flex items-end md:justify-between mt-4 md:mt-8 border-b border-black pb-4 md:pb-8 mb-4">
      <Link href="/">
        <h1 className="text-5xl max-w-[30rem] md:text-7xl text-title font-extrabold tracking-[-0.15rem] md:tracking-[-0.3rem] leading-tight md:leading-[4rem] md:pr-8">
          Introvertka na cestách
        </h1>
      </Link>
      <h4 className="text-right text-stone-800 font-light md:text-right text-base md:text-lg mt-3 md:mt-5 md:pl-8">
        O tichém cestování bez příkras a s respektem k přírodě.
      </h4>
    </section>
  );
}
