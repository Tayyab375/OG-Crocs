import React from "react";

// -----------------components-----------------
import Content from "./Content/Content";
import SideImage from "./Side Image/SideImage";

// -------------------styling-----------------------
import { RewardParentDiv } from "./Sec7SpecialRewards.styled";

const Sec7SpecialRewards = () => {
  return (
    <RewardParentDiv>
      <Content />
      <SideImage />
    </RewardParentDiv>
  );
};

export default Sec7SpecialRewards;
