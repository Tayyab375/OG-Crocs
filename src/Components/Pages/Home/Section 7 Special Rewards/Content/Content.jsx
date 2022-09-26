import React from "react";

// --------------styling--------------------------
import { ContentDiv, ContentParentDiv, HeadingDiv } from "./Content.styled";

const Content = () => {
  return (
    <ContentParentDiv>
      <HeadingDiv>
        <h2>SPECIAL REWARDS</h2>
      </HeadingDiv>

      <h2>$C4 Poker Platform V1</h2>
      <ContentDiv>
        <p>
          <span className="space" />A custom poker platform that uses $C4 as
          in-game currency. The first of its kind in NFTs! This version includes
          Nami wallet integration + $C4 token integration.
        </p>
      </ContentDiv>
    </ContentParentDiv>
  );
};

export default Content;
