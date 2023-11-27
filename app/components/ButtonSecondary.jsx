import React from "react";

const ButtonSecondary = ({ title, svg }) => {
  return (
    <button className="border-secondary inline-flex items-center gap-2 border text-secondary px-4 py-3 rounded ">
      {title}
      {svg}
    </button>
  );
};

export default ButtonSecondary;
