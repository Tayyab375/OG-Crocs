import React from "react";

import { NavUnorderList } from "./Link.styled";

const Link = () => {
  return (
    <>
      <NavUnorderList className={click ? "nav_active" : null}>
        <li>
          <a href="#" onClick={navIconChange}>
            OG Crocs
          </a>
        </li>
        <li>
          <a onClick={navIconChange}>LaunchPad</a>
        </li>
        <li>
          <a onClick={navIconChange}>Members</a>
        </li>
        <li>
          <a onClick={nvIconChange}>Secondary Marketplace</a>
        </li>
        <li>
          <a onClick={nvIconChange}>Roadmap</a>
        </li>
      </NavUnorderList>
    </>
  );
};

export default Link;
