"use client";
import React, { useEffect } from "react";
import { initFlowbite } from "flowbite";

const Container = ({ children, background }) => {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div className={background ? background : ""}>
      <div className="max-w-screen-xl items-center justify-between mx-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default Container;
