import React from "react";

// --------------styling import------------------------
import { AboutParentDiv, ContentDiv, HeadingDiv } from "./Sec2About.styled";

const Sec2About = () => {
  return (
    <AboutParentDiv>
      <HeadingDiv>
        <h2> ABOUT OG CROCS</h2>
      </HeadingDiv>

      <ContentDiv>
        <p>
          The Cardano Crocs Club is a collection of only <span>7,700 AI</span>{" "}
          generated NFTs (non-fungible tokens) that are made up of over{" "}
          <span>200 different </span>
          variables. The Crocs collection also includes 32 hand drawn, special
          edition crocs.
        </p>
      </ContentDiv>
    </AboutParentDiv>
  );
};

export default Sec2About;
