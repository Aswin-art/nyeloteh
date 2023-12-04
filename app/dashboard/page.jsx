import React from "react";
import Private from "../components/Private";
import Content from "./components/Content";
import Container from "../components/Container";

const page = () => {
  return (
    <Private>
      <Container>
        <Content />
      </Container>
    </Private>
  );
};

export default page;
