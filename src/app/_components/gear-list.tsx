"use client";

import { useState } from "react";

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
    <div className="w-full overflow-x-auto pb-4 mt-8">
      <div className="flex gap-6 min-w-min">
        {categories.map((category) => {
          const items = props[category] || [];
          return (
            <div
              key={category}
              className="flex-shrink-0 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                {categoryTitles[category]}
              </h3>
              <ul className="space-y-2">
                {items.map((item, index) => {
                  const itemKey = `${category}-${index}`;
                  return (
                    <li key={itemKey} className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id={itemKey}
                        checked={!!checkedItems[itemKey]}
                        onChange={() => toggleItem(itemKey)}
                        className={`mt-1 w-4 h-4 cursor-pointer ${
                          checkedItems[itemKey] ? "accent-accent" : ""
                        }`}
                      />
                      <label
                        htmlFor={itemKey}
                        className={`flex-1 text-sm cursor-pointer select-none ${
                          checkedItems[itemKey]
                            ? "line-through text-gray-500 dark:text-gray-500"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {item}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
