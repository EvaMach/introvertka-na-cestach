"use client";
import React, { useEffect, useState } from "react";

function FloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      className="fixed rounded-lg bottom-4 md:bottom-16 right-1 md:right-8 padding-12 w-8 h-8 bg-accentBg border-none shadow-sm cursor-pointer text-lg"
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

export default FloatingButton;
