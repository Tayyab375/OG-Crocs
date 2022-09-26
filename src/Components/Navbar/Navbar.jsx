import React, { useState } from "react";

// -------------------import styling--------------------------

import {
  LogoDiv,
  LogosDiv,
  NavUnorderList,
  StyledNav,
} from "./Navbar.styled.js";

// ------------------components---------------------------
import Logo from "./Logo/Logo.jsx";
import Bar from "./Bar Icon/Bar.jsx";
import Cross from "./Cross Icon/Cross.jsx";
import RightLogo from "./RightLogo/RightLogo.jsx";

// --------------------main component function-----------------

function Navbar() {
  const black = "#080808";
  const green = "#a5fa00";
  const white = "#ffffff";

  const [click, setIcon] = useState(false);
  const navIconChange = () => {
    setIcon(!click);
  };

  return (
    <>
      {/* ---------------------logo--------------------------------------- */}
      <StyledNav>
        <LogoDiv>
          <Logo color1={click ? black : green} color2={click ? black : white} />
        </LogoDiv>

        {/* --------------------Links-------------------------------------- */}

        <NavUnorderList className={click ? "nav_active" : null}>
          <li className="first">
            <a href="#" onClick={navIconChange}>
              OG Crocs
            </a>
          </li>
          <li className="second">
            <a href="#" onClick={navIconChange}>
              LaunchPad
            </a>
          </li>
          <li className="third">
            <a href="#" onClick={navIconChange}>
              Members
            </a>
          </li>
          <li className="forth">
            <a href="#" onClick={navIconChange}>
              Secondary Marketplace
            </a>
          </li>
          <li className="fifth">
            <a href="#" onClick={navIconChange}>
              Roadmap
            </a>
          </li>
        </NavUnorderList>

        {/* -----------------Right side logos-------------------------- */}

        <LogosDiv>
          <RightLogo
            bgColor={click ? black : green}
            color={click ? green : black}
          />

          <div className="screen">
            <div
              onClick={navIconChange}
              className={click ? "visibility " : "show "}
            >
              <Bar />
            </div>
          </div>

          <div
            onClick={navIconChange}
            className={click ? "show " : "visibility"}
          >
            <Cross />
          </div>
        </LogosDiv>
      </StyledNav>
    </>
  );
}

export default Navbar;
