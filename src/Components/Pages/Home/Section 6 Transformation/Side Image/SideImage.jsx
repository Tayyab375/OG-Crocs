import React from "react";

// ------------------images------------------
import img from "../Assets/Images/01.webp";

// -------------------styling----------------
import { ImageDiv } from "./SideImage.styled";

const SideImage = () => {
  return (
    <ImageDiv>
      <span className="first"></span>
      <span className="second"></span>
      <span className="third"></span>
      <span className="forth"></span>
      <img src={img} alt="" />
    </ImageDiv>
  );
};

export default SideImage;
