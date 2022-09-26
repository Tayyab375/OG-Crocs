import React from "react";

// -----------------components-----------------
import Content from "./Content/Content";
import SideImage from "./Side Image/SideImage";

// -------------------styling-----------------------
import { TransformationParentDiv } from "./Sec6Transformation.styled";

const Sec6Transformation = () => {
  return (
    <TransformationParentDiv>
      <SideImage />
      <Content />
    </TransformationParentDiv>
  );
};

export default Sec6Transformation;
