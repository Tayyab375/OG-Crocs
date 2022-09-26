import React from "react";

// ------------------styling---------------------
import { HeadingDiv } from "../Section 2 About/Sec2About.styled";
import { GridSection, InfoParentDiv } from "./Sec4Info.styled";

// ------------------components-----------------
import Card from "./Card/Card";

const Sec4Info = () => {
  return (
    <InfoParentDiv>
      <HeadingDiv>
        <h2>info</h2>
      </HeadingDiv>

      <GridSection>
        <Card info={"CNFT.io"} />
        <Card info={"JPEG.STORE"} />
        <Card info={"CNFT.tools"} />
        <Card info={"OpenCnft.io"} />
      </GridSection>
    </InfoParentDiv>
  );
};

export default Sec4Info;
