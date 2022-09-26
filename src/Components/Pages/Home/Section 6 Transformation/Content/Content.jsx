import React from "react";

// --------------styling--------------------------
import { ContentDiv, ContentParentDiv, HeadingDiv } from "./Content.styled";

const Content = () => {
  return (
    <ContentParentDiv>
      <HeadingDiv>
        <h2>TRANSFORMATION</h2>
      </HeadingDiv>

      <h2>The Burn</h2>
      <ContentDiv>
        <p className="firstpara">
          <span className="space" />
          Cardano Crocs Club started as a collection of 10,000 NFTs. But then
          something interesting happened: The Burn.
        </p>

        <p className="secondpara">
          The Burn is known as the largest NFT burn in Cardano history. Over
          5,000+ Crocs were sent to be burned, disappearing forever from the
          blockchain. This occurred in phase 2 of our roadmap, where owners were
          given the choice to burn 2 Crocs in exchange for 1 new Croc. The odds
          were 50/50 chance you got a rare Croc or common Croc. To make things
          even more interesting, you also had the chance to pull a Special
          Edition Croc. The burn introduced new Croc traits to the original
          collection and reduced total croc supply in circulation. The burning
          phase is over and rarity rankings are now final. All 7,700 Crocs are
          part of the OG Crocs Collection.
        </p>
      </ContentDiv>
    </ContentParentDiv>
  );
};

export default Content;
