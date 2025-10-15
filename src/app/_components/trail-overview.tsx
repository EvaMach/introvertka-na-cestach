import TableOfContents from "./table-of-contents";
import { renderDistance } from "./trail-section-details";

export interface Overview {
  length: string;
  duration: string;
  time: string;
  sleeping: string;
  terrain: string;
  safety: string;
  altitude: string;
  summary: string;
}

interface TrailInfoListProps {
  overview: Overview;
}

const localizationMap: { [key: string]: string } = {
  length: "Vzdálenost",
  duration: "Délka",
  time: "Roční doba",
  sleeping: "Spaní",
  terrain: "Terén",
  safety: "Bezpečnost",
  altitude: "Převýšení",
  summary: "Shrnutí",
};

export default function TrailOverview({ overview }: TrailInfoListProps) {
  return (
    <div className="bg-accentBg/70 rounded-sm p-6 shadow mb-8 w-full md:w-auto md:flex-1 md:min-w-[400px]">
      <div className="grid gap-4">
        {Object.entries(overview).map(([key, value], index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center gap-2"
          >
            <dt className="font-semibold text-stone-800 min-w-32 text-sm sm:text-base">
              {localizationMap[key]}:
            </dt>
            <dd className="text-stone-800 text-sm sm:text-base flex-1">
              {key === "length" ? renderDistance(value) : value}
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}
