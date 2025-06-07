import React from "react";

const SectionHeading = ({ title = "Default Title" }) => {
  return (
    <div className="flex justify-center items-center my-10">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
        {title}
      </h1>
    </div>
  );
};

export default SectionHeading;
