"use client";
import React from "react";
import Chart from "react-apexcharts";
import Link from "next/link";
import Image from "next/image";

const Content = () => {
  const state = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [
          "Senin",
          "Selasa",
          "Rabu",
          "Kamis",
          "Jum'at",
          "Sabtu",
          "Minggu",
        ],
      },
    },
    series: [
      {
        name: "pengunjung",
        data: [30, 40, 35, 50, 49, 60, 70],
      },
    ],
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <div className="p-4 mt-20">
      <div className="p-4">
        <div className="flex items-center justify-center">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width={1000}
          />
        </div>

        <div className="mt-20">
          <h1 className="text-3xl font-bold">Daftar Artikel</h1>
          <div className="mt-10">
            <Link href={"/dashboard"}>
              <div className="p-5 border border-1 border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-2">
                <Image
                  alt="image"
                  src={"/card_image.jpg"}
                  width={500}
                  height={500}
                  className="w-40 h-40 rounded-lg"
                />
                <div className="mt-5">
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-2 rounded dark:bg-blue-900 dark:text-blue-300">
                    Lingkungan
                  </span>
                  <h1 className="text-2xl mt-3 font-bold text-secondary hover:text-primary">
                    Mengapa Tumbuhan Mempunyai Perasaan
                  </h1>
                  <p className="mt-3 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur, qui quas amet cupiditate repudiandae esse iure
                    nihil debitis aperiam assumenda quaerat soluta inventore
                    tempore eaque possimus similique in laudantium iusto?
                    Quisquam dolores sequi molestiae nisi iusto, laboriosam
                    tempora aliquid doloremque eaque adipisci voluptates illo
                    maiores cumque, ipsa eveniet beatae neque! Voluptas a veniam
                    ex consectetur fugit aspernatur! Ab ipsa veritatis deleniti
                    maxime eum provident dicta perferendis, atque quidem beatae
                    facere, enim alias expedita consectetur! Laboriosam....
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-10">
            <Link href={"/dashboard"}>
              <div className="p-5 border border-1 border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-2">
                <Image
                  alt="image"
                  src={"/card_image.jpg"}
                  width={500}
                  height={500}
                  className="w-40 h-40 rounded-lg"
                />
                <div className="mt-5">
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-2 rounded dark:bg-blue-900 dark:text-blue-300">
                    Lingkungan
                  </span>
                  <h1 className="text-2xl font-bold text-secondary mt-3 hover:text-primary">
                    Mengapa Tumbuhan Mempunyai Perasaan
                  </h1>
                  <p className="mt-3 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur, qui quas amet cupiditate repudiandae esse iure
                    nihil debitis aperiam assumenda quaerat soluta inventore
                    tempore eaque possimus similique in laudantium iusto?
                    Quisquam dolores sequi molestiae nisi iusto, laboriosam
                    tempora aliquid doloremque eaque adipisci voluptates illo
                    maiores cumque, ipsa eveniet beatae neque! Voluptas a veniam
                    ex consectetur fugit aspernatur! Ab ipsa veritatis deleniti
                    maxime eum provident dicta perferendis, atque quidem beatae
                    facere, enim alias expedita consectetur! Laboriosam....
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
