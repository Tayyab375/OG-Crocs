import React from "react";

// ----------------Images------------------
import img from "../Assets/Images/01.webp";

// ---------styling-----------------------
import { CardDiv, ImgDiv } from "./Card.styled";

const Card = (props) => {
  return (
    <CardDiv className="first second">
      <ImgDiv>
        <img src={img} alt="" />
      </ImgDiv>

      <div>{props.info}</div>
    </CardDiv>
  );
};

export default Card;
