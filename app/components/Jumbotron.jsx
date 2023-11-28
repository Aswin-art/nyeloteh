"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Sutradara", "Penulis", "Jagoan", "Pemimpin"];

const Jumbotron = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="mt-72">
      {/* <div className="grid grid-cols-2 items-center">
        <div className="rc">
          <h1 className="font-bold text-4xl">
            Dunia diciptakan oleh kata-kata,
          </h1>
          <h2 className="font-bold text-4xl mt-2">
            Jadilah{" "}
            <span className="text-secondary">
              <TextTransition springConfig={presets.gentle} inline={true}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </span>{" "}
            dari ceritamu.
          </h2>
          <p className="mt-5 text-gray-700 ">
            Jangan malu untuk menulis, karena setiap kata yang ditorehkan
            membentuk lukisan keindahan dalam karya tak terbatas yang
            mengagumkan.
          </p>

          <div className="btn-wrapper mt-10 flex gap-5">
            <button className="bg-secondary text-white px-4 py-3 rounded text-sm transition-all hover:bg-primary">
              Mulai Menulis
            </button>
            <button className="border-secondary inline-flex items-center gap-2 border text-secondary px-4 py-3 rounded text-sm transition-all hover:border-primary hover:text-primary">
              Baca Artikel
              <svg
                className="w-3 h-3 text-secondary-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="lc">
          <Image
            src={"/jumbotron_image.png"}
            alt="image"
            width={700}
            height={500}
          />
        </div>
      </div> */}
      <div className="flex flex-col w-full">
        <h1 className="font-bold text-6xl md:text-6xl lg:text-7xl 2xl:text-8xl max-w-4xl">
          Dunia diciptakan oleh kata-kata,
        </h1>
        <h2 className="font-bold text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl mt-5 xl:mt-10">
          Jadilah{" "}
          <span className="text-secondary">
            <TextTransition springConfig={presets.gentle} inline={true}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </span>{" "}
          dari ceritamu.
        </h2>
        <p className="lg:mt-10 mt-5 text-gray-700 text-sm md:text-lg w-[70%] ms-2">
          Jangan malu untuk menulis, karena setiap kata yang ditorehkan
          membentuk lukisan keindahan dalam karya tak terbatas yang mengagumkan.
        </p>

        <div className="btn-wrapper mt-10 flex gap-5 ms-2">
          <button className="bg-secondary text-white px-4 py-3 rounded text-sm md:text-md transition-all hover:bg-primary">
            Mulai Menulis
          </button>
          <button className="border-secondary inline-flex items-center gap-2 border text-secondary px-4 py-3 rounded text-sm md:text-md transition-all hover:border-primary hover:text-primary">
            <Link href={"#articles"}>Baca Artikel</Link>
            <svg
              className="w-3 h-3 text-secondary-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
