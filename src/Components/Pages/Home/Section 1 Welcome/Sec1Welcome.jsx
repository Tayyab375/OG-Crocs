import React from "react";

// -------------Styling-------------------------
import { WelcomeParentDiv } from "./Sec1Welcome.styled";

// ----------------Components-------------------
import Content from "./Content/Content";
import CardRender from "./Rendering Image Cards/CardRender";

const Sec1Welcome = () => {
  return (
    <WelcomeParentDiv>
      <Content />
      <CardRender />
    </WelcomeParentDiv>
  );
};

export default Sec1Welcome;
