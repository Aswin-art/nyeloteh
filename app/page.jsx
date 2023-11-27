import React from "react";
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";
import ArticleSection from "./components/ArticleSection";
import BottomBanner from "./components/BottomBanner";
import SubscribtionSection from "./components/SubscribtionSection";

export default function Home() {
  return (
    <>
      <Container background={"bg-blue-50"}>
        <div className="jumbotron mb-40">
          <Jumbotron />
        </div>
      </Container>
      <Container>
        <div className="main mt-32">
          <ArticleSection />
        </div>
      </Container>
      <Container>
        <div className="my-40 w-full">
          <SubscribtionSection />
        </div>
      </Container>
      {/* <div className="banner">
        <BottomBanner />
      </div> */}
    </>
  );
}
