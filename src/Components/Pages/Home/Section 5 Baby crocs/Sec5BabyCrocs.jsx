import React from "react";

// -----------------components-----------------
import Content from "./Content/Content";
import SideImage from "./Side Image/SideImage";

// -------------------styling-----------------------
import { FlexDiv, ParentDiv } from "./Sec5BabyCrocs.styled";

const Sec5BabyCrocs = () => {
  return (
    <ParentDiv>
      <FlexDiv>
        <Content />
        <SideImage />
      </FlexDiv>
    </ParentDiv>
  );
};

export default Sec5BabyCrocs;
