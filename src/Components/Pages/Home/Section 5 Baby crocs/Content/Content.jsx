import React from "react";

// --------------styling--------------------------
import { ContentParentDiv, HeadingDiv, UnorderList } from "./Content.styled";

const Content = () => {
  return (
    <ContentParentDiv>
      <HeadingDiv>
        <h2>COMING SOON</h2>
      </HeadingDiv>

      <h2>Baby crocs</h2>
      <UnorderList>
        <li> Breed your own Baby Croc NFT</li>
        <li>Different traits produce different offspring</li>
        <li>Watch the egg hatch and grow into your own creation</li>
        <li>Who will breed the rarest Croc?</li>
      </UnorderList>
    </ContentParentDiv>
  );
};

export default Content;
