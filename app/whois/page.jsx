"use client";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import TextTransition, { presets } from "react-text-transition";
import Image from "next/image";

const TEXTS = ["Penulis", "Pemimpi", "Perancang", "Pengarang"];

const page = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <Container background={"bg-blue-50"}>
        <div className="mt-40 mb-14">
          <h1 className="text-5xl font-bold">Tentang Nyèloteh</h1>
          <h2 className="mt-3 max-w-md">
            Kami hadir untuk mewadahi para{" "}
            <span className="text-secondary font-bold">
              <TextTransition springConfig={presets.gentle} inline={true}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </span>{" "}
            untuk mempublikasikan{" "}
            <span className="text-primary">karya mereka.</span>
          </h2>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col items-center lg:flex-row gap-12 mt-20">
          <div className="lc">
            <Image
              src={"/card_image.jpg"}
              alt="image"
              width={500}
              height={500}
              loading="lazy"
              className="rounded"
            />
          </div>
          <div className="rc">
            <h1 className="font-bold text-3xl">Misi Kami</h1>
            <p className="mt-10 text-gray-700 max-w-md">
              Misi utama dari website Nyèloteh adalah untuk mendorong minat
              dalam membaca dan menulis di setiap individu. Kami berkomitmen
              untuk menjadi sumber inspirasi yang memberikan suatu solusi,
              cerita, pengalaman, ataupun ide untuk menjelajahi dunia kata-kata
              dan cerita penuh semangat.
            </p>
            <p className="mt-5 text-gray-700 max-w-md">
              Dengan misi kami, kami bertujuan untuk menjadi mitra yang setia
              dalam perjalanan membaca dan menulis setiap individu. Kami
              berharap dapat mendorong lebih banyak orang untuk mengeksplorasi
              potensi mereka melalui keajaiban dunia literasi.
            </p>
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col justify-center items-center my-40">
          <q className="italic text-4xl text-center max-w-xl text-gray-500">
            Mulailah dengan menuliskan hal-hal yang kau ketahui. Tulislah
            tentang pengalaman dan perasaanmu sendiri
          </q>
          <p className="mt-5 text-gray-500 text-left">- nyèloteh teams</p>
        </div>
      </Container>
    </>
  );
};

export default page;
