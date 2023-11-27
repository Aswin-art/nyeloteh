import React from "react";

const BottomBanner = () => {
  return (
    <div
      id="bottom-banner"
      tabIndex="-1"
      className="fixed bottom-0 start-0 z-50 flex justify-between w-full p-4 border-t border-blue-200 bg-blue-50 dark:bg-blue-700 dark:border-blue-600"
    >
      <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-primary">
          {/* Made with &hearts; by Aswin, Narendra & Zidan */}
          Mulailah dengan menuliskan hal-hal yang kau ketahui. Tulislah tentang
          pengalaman dan perasaanmu sendiri
        </p>
      </div>
      <div className="flex items-center">
        <button
          data-dismiss-target="#bottom-banner"
          type="button"
          className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-blue-400 hover:bg-blue-200 hover:text-primary rounded-lg text-sm p-1.5"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
};

export default BottomBanner;
