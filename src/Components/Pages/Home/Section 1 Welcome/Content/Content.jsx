import React from "react";

import { ContentParentDiv } from "./Content.styled";

const Content = () => {
  return (
    <ContentParentDiv>
      <h1>
        WELCOME TO <br />
        <span className="backspace">
          {" "}
          THE <span className="headingGreen">SWAMP</span>
        </span>
      </h1>

      <p>
        <span className="space" />
        The web3 social swamp where your NFT doubles as your membership token to
        the Cardano Crocs Club.
      </p>

      <p>
        The CCC ecosystem is ever-expanding and new experiences are only
        available to CCC members. As the ecosystem grows, members will gain
        access to the Croc Arcade, gaming incubator, online poker game,
        exclusive merch drops, and Swamp-only digital {"&"} real-world
        experiences.
      </p>

      <p>
        <span className="block">$C4 policy ID:</span>
        a00fdf4fb9ab6c8c2bd1533a2f14855edf12aed5ecbf96d4b5f5b939
      </p>
    </ContentParentDiv>
  );
};

export default Content;
