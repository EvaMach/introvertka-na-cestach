import cn from "classnames";
import { Montserrat } from "next/font/google";

const monteserrat = Montserrat({ subsets: ["latin"] });

export function Intro() {
  return (
    <section className="flex-col md:flex-row w-full flex items-end md:justify-between mt-8 mb-16 md:mb-12 border-b border-black pb-8">
      <h1
        className={cn(
          monteserrat.className,
          "text-5xl max-w-[30rem] md:text-7xl text-title font-extrabold tracking-[-0.3rem] leading-[4rem] md:pr-8"
        )}
      >
        Introvertka na cestách
      </h1>
      <h4 className="text-right text-gray-800 font-light md:text-right text-lg mt-5 md:pl-8">
        O tichém cestování bez příkras a s respektem k přírodě.
      </h4>
    </section>
  );
}
