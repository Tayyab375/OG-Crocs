import React from "react";

// -----------styling-----------------------
import { HeadingDiv, TeamParentDiv } from "./Sec8Team.styled";

// ---------------components--------------------
import MainScreen from "./Main Screen/MainScreen";
import MediumScreen from "./Medium Screen/MediumScreen";
import SmallScreen from "./Small Screen/SmallScreen";

const Sec8Team = () => {
  return (
    <TeamParentDiv>
      <HeadingDiv>
        <h2>OG CROCS CREW</h2>
      </HeadingDiv>

      <h2 className="heading">The Team</h2>

      <MainScreen />
      <MediumScreen />
      <SmallScreen />
    </TeamParentDiv>
  );
};

export default Sec8Team;
