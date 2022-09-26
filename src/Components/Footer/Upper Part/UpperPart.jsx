import React from "react";

// ------------img-------------------------
import logo from "../Assets/Image/crocoFace.svg";
import logo1 from "../Assets/Image/twitter.svg";
import logo2 from "../Assets/Image/discord.svg";
// -------------styling--------------------
import {
  HiddenHr,
  Hr,
  LogoDiv,
  ParentDiv,
  SmallScreenUl,
  TwoLogoDiv,
  UnoderList,
} from "./UpperPart.styled";

const UpperPart = () => {
  return (
    <>
      <ParentDiv>
        <LogoDiv>
          <img src={logo} alt="" />
        </LogoDiv>

        <UnoderList>
          <li>OG CROCS</li>
          <li>LAUNCHPAD</li>
          <li>MEMBERS</li>
          <li>
            SECONDARY <br /> MARKETPLACE
          </li>
          <li>ROADMAP</li>
        </UnoderList>
        <TwoLogoDiv>
          <a href="https://twitter.com/" target={"_blank"} rel="noreferrer">
            <img src={logo1} alt="" />
          </a>
          <a href="https://discord.com/" target={"_blank"} rel="noreferrer">
            <img src={logo2} alt="" />
          </a>
        </TwoLogoDiv>
      </ParentDiv>
      <Hr />

      <SmallScreenUl>
        <li>OG CROCS</li>
        <li>LAUNCHPAD</li>
        <li>MEMBERS</li>
        <li>
          SECONDARY <br /> MARKETPLACE
        </li>
        <li>ROADMAP</li>
      </SmallScreenUl>

      <HiddenHr />
    </>
  );
};

export default UpperPart;
