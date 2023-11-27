import React from "react";
import Image from "next/image";

const SubscribtionSection = () => {
  return (
    <div
      className="bg-blue-50 border border-blue-50 rounded-md p-5"
      data-aos="fade-up"
    >
      <div className="flex flex-col lg:flex-row items-center gap-10 justify-center">
        <div className="lc">
          <Image
            src={"/connect.jpg"}
            alt="image"
            width={500}
            height={500}
            className="rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="rc max-w-md flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-secondary">
            Tetap terhubung dengan kami
          </h1>
          <div className="bg-primary w-[40%] h-1 mt-1 ms-1"></div>
          <p className="mt-10 text-gray-600">
            Jangan lupa untuk tetap berlangganan email kepada kami agar selalu
            mendapatkan update artikel terbaru
          </p>
          <form className="mt-10">
            <label
              htmlFor="default-search"
              className="text-sm font-medium text-secondary dark:text-white block mb-3 ms-1"
            >
              Email kamu
            </label>
            <div className="relative">
              <input
                type="email"
                id="default-search"
                className="block w-full p-4 text-sm text-gray-900 border-none shadow rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@gmail.com"
                required
              />
            </div>

            <button className="bg-secondary text-white px-4 py-3 rounded mt-10 transition-all hover:bg-primary">
              Berlangganan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribtionSection;
