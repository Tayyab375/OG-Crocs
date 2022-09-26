import React from "react";

// ---------------------styling components----------------------
import { HeadingDiv } from "../Section 2 About/Sec2About.styled";
import { GridSection, UtilityParentDiv } from "./Sec3Utility.styled";

// ---------------------components----------------------------
import Card from "./Card/Card";
import { UtilityData } from "./UtilityData";

const Sec3Utility = () => {
  return (
    <UtilityParentDiv>
      <HeadingDiv className="hidden">
        <h2>UTILITY</h2>
      </HeadingDiv>

      <GridSection>
        {UtilityData.map((exp) => {
          return (
            <Card
              key={exp.id}
              img={exp.img}
              span1={exp.span1}
              span2={exp.span2}
            />
          );
        })}
      </GridSection>
    </UtilityParentDiv>
  );
};

export default Sec3Utility;
