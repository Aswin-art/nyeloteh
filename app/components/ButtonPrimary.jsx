import React from "react";

const ButtonPrimary = ({ title }) => {
  return (
    <button className="bg-secondary text-white px-4 py-3 rounded ">
      {title}
    </button>
  );
};

export default ButtonPrimary;
