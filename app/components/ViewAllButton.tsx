"use client";

import React from "react";

interface ViewAllButtonProps {
  onClick?: () => void;
  className?: string;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({}) => {
  return (
    <button className="relative inline-block px-11 py-2.5 bg-black text-white font-medium skew-x-[-12deg] hover:bg-gray-800 transition">
      <span className="inline-block skew-x-[12deg]">View All</span>
    </button>
  );
};

export default ViewAllButton;
