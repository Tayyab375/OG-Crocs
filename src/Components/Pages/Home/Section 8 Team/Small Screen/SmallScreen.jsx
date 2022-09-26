import React from "react";

// ----------data---------------------
import { CardData } from "./Card Data";

// ----------components----------------
import Card from "../Card/Card";

// ------------------styling---------
import { GridSection, ParentDiv } from "./SmallScreen.styled";

const SmallScreen = () => {
  return (
    <ParentDiv>
      <GridSection>
        {CardData.map((value) => {
          return (
            <Card
              key={value.id}
              img={value.img}
              heading={value.heading}
              info1={value.info1}
              info2={value.info2}
            />
          );
        })}
      </GridSection>
    </ParentDiv>
  );
};

export default SmallScreen;
