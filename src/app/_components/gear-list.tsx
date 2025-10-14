"use client";

import { useState } from "react";
import Checklist from "./checklist";

interface GearListProps {
  packing?: string[];
  sleep?: string[];
  cooking?: string[];
  clothes?: string[];
  electronics?: string[];
  hygiene?: string[];
  medicine?: string[];
  other?: string[];
}

const categoryTitles: Record<keyof GearListProps, string> = {
  packing: "Balení & organizace",
  sleep: "Spaní",
  cooking: "Vaření",
  clothes: "Oblečení",
  electronics: "Elektronika",
  hygiene: "Hygiena",
  medicine: "Lékárnička",
  other: "Další",
};

export function GearList(props: GearListProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (itemKey: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  const categories = Object.keys(props).filter(
    (key) => props[key as keyof GearListProps]?.length
  ) as (keyof GearListProps)[];

  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="w-[95vw] lg:-mx-36 xl:-mx-56 overflow-x-scroll pb-4 mt-8">
      <div className="flex gap-6 min-w-min">
        {categories.map((category) => {
          const items = props[category] || [];
          return (
            <div
              key={category}
              className="flex-shrink-0 w-64 bg-accentBg/60 rounded-lg shadow p-4 max-h-60 overflow-y-auto"
            >
              <h3 className="text-lg font-semibold mb-4 text-stone-800 ">
                {categoryTitles[category]}
              </h3>
              <Checklist items={items} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
