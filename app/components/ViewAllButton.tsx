"use client";

import React from "react";

interface ViewAllButtonProps {
  onClick?: () => void;
  className?: string;
  displayText?: string;
  bgColor?: string; // e.g., "bg-black"
  textColor?: string; // e.g., "text-white"
  borderColor?: string; // e.g., "border border-red-500"
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({
  onClick,
  className = "",
  displayText = "View All",
  bgColor = "bg-black",
  textColor = "text-white",
  borderColor = "border border-transparent", // default no visible border
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-block px-11 py-2.5 w-full ${bgColor} ${textColor} ${borderColor} font-medium skew-x-[-12deg] hover:opacity-90 transition ${className}`}
    >
      <span className="inline-block skew-x-[12deg]">{displayText}</span>
    </button>
  );
};

export default ViewAllButton;
