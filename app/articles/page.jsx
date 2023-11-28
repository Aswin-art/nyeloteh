"use client";
import React from "react";
import Container from "../components/Container";
import CardArticle from "../components/CardArticle";
import Typewriter from "typewriter-effect";

const page = () => {
  return (
    <>
      <Container background={"bg-blue-50"}>
        <div className="mt-40 mb-14">
          <h1 className="text-5xl font-bold">Artikel Kami</h1>
          <h3 className="mt-3 text-lg max-w-md">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(40)
                  .typeString(
                    "Jelajahi dan temukan berbagai <strong>ide</strong>"
                  )
                  .pauseFor(1000)
                  .deleteChars(3)
                  .typeString("<strong>inovasi</strong>")
                  .pauseFor(1000)
                  .deleteChars(7)
                  .typeString("<strong>inspirasi</strong>")
                  .pauseFor(1000)
                  .deleteChars(9)
                  .typeString(
                    "<strong>ide, inovasi, inspirasi</strong> dari artikel kami."
                  )
                  .start();
              }}
            />
          </h3>
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20 mt-10">
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
        </div>
      </Container>
    </>
  );
};

export default page;
