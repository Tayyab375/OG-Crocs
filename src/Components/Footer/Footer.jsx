import React from "react";
import styled from "styled-components";
import CopyRight from "./Copy Right/CopyRight";

// ------------components---------------------
import UpperPart from "./Upper Part/UpperPart";

// ------------styling------------------------
const ParentDiv = styled.div`
  padding: 0 2rem;
`;

const Footer = () => {
  return (
    <ParentDiv>
      <UpperPart />
      <CopyRight />
    </ParentDiv>
  );
};

export default Footer;
