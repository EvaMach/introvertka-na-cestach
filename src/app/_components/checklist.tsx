"use client";
import React, { useState } from "react";

interface Props {
  items: string[];
}

function Checklist({ items }: Props) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (itemKey: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  return (
    <ul className="space-y-2">
      {items.map((item, index) => {
        const itemKey = `${item}-${index}`;
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
                  ? "line-through text-stone-500 "
                  : "text-stone-700 "
              }`}
            >
              {item}
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default Checklist;
