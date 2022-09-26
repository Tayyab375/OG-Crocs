import React from "react";

// ----------------styling----------------
import { ImageDiv } from "./ImageCard.styled";

const ImageCard = (props) => {
  return (
    <ImageDiv>
      <img src={props.img} alt="" />
    </ImageDiv>
  );
};

export default ImageCard;
