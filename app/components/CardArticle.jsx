import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardArticle = () => {
  return (
    <div className="max-w-sm">
      <div className="img">
        <Link href="#">
          <Image
            width={500}
            height={500}
            className="rounded-lg"
            src="/card_image.jpg"
            alt="image"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="card-content mt-5">
        <Link href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-secondary dark:text-white transition-all hover:text-primary">
            Noteworthy technology acquisitions 2021
          </h5>
        </Link>
        <p className="mb-3 font-normal  text-gray-600">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Nostrum tempore error sunt veritatis
          ipsam, laborum ipsum nam voluptatum atque eos...
        </p>
        <p className="mt-5 text-gray-500">November 26, 2023</p>
      </div>
    </div>
  );
};

export default CardArticle;
