"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useState } from "react";
import { NavItem } from "./ui/NavItem";

export const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const isAnyOpen = activeIndex !== null;
  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const close = () => setActiveIndex(null);
        const isOpen = i === activeIndex;
        return (
          <NavItem
            key={category.value}
            category={category}
            close={close}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};
