"use client";
import React, { useEffect } from "react";
import { initFlowbite } from "flowbite";
import AOS from "aos";
import "aos/dist/aos.css";

const Container = ({ children, background }) => {
  useEffect(() => {
    initFlowbite();
    AOS.init();
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
