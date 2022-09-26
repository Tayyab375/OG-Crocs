import React from "react";

// -------------------components-------------------------
import Sec1Welcome from "./Section 1 Welcome/Sec1Welcome";
import Sec2About from "./Section 2 About/Sec2About";
import Sec3Utility from "./Section 3 Utility/Sec3Utility";
import Sec4Info from "./Section 4 Info/Sec4Info";
import Sec5BabyCrocs from "./Section 5 Baby crocs/Sec5BabyCrocs";
import Sec6Transformation from "./Section 6 Transformation/Sec6Transformation";
import Sec7SpecialRewards from "./Section 7 Special Rewards/Sec7SpecialRewards";
import Sec8Team from "./Section 8 Team/Sec8Team";

const Home = () => {
  return (
    <>
      <Sec1Welcome />
      <Sec2About />
      <Sec3Utility />
      <Sec4Info />
      <Sec5BabyCrocs />
      <Sec6Transformation />
      <Sec7SpecialRewards />
      <Sec8Team />
    </>
  );
};

export default Home;
