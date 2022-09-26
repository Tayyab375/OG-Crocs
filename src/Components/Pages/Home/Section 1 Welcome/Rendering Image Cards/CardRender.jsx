import React from "react";

// -------------import images---------------------
import img1 from "../Assets/Images/01.webp";
import img2 from "../Assets/Images/02.webp";
import img3 from "../Assets/Images/03.webp";
import img4 from "../Assets/Images/04.webp";
import img5 from "../Assets/Images/05.webp";
import img6 from "../Assets/Images/06.webp";
import img7 from "../Assets/Images/07.webp";
import img8 from "../Assets/Images/08.webp";
import img9 from "../Assets/Images/09.webp";

// -------------import styling---------------------
import {
  CardRenderParentDiv,
  FirstFlexDiv,
  LastFelxDiv,
  MiddleFlexDiv,
} from "./CardRender.styled";

// -------------import component-------------------
import ImageCard from "../Image Cards/ImageCard";

const CardRender = () => {
  return (
    <CardRenderParentDiv>
      <FirstFlexDiv>
        <ImageCard img={img1} />
        <ImageCard img={img4} />
        <ImageCard img={img7} />
      </FirstFlexDiv>

      <MiddleFlexDiv>
        <ImageCard img={img2} />
        <ImageCard img={img5} />
        <ImageCard img={img8} />
      </MiddleFlexDiv>

      <LastFelxDiv>
        <ImageCard img={img3} />
        <ImageCard img={img6} />
        <ImageCard img={img9} />
      </LastFelxDiv>
    </CardRenderParentDiv>
  );
};

export default CardRender;
