import React from "react";

// ---------------styling-----------------
import { FlexDiv } from "./CopyRight.styled";

const CopyRight = () => {
  return (
    <FlexDiv>
      <p>Cardano Crocs Club © 2022</p>
      <p>Privacy Policy</p>
      <p>
        <a
          href="https://cardanocrocsclub.com/terms.html"
          target="_blank"
          rel="noreferrer"
        >
          Terms &amp; Conditions
        </a>
      </p>
    </FlexDiv>
  );
};

export default CopyRight;
