import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// ---------------styling----------------
import { CardDiv, ContentDiv, ImgDiv } from "./Card.styled";

const Card = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <CardDiv data-aos="fade-up">
      <ImgDiv>
        <img src={props.img} alt="" />
      </ImgDiv>

      <ContentDiv>
        <h3>{props.heading}</h3>

        <p>
          {props.info1} <br />
          {props.info2}
        </p>
      </ContentDiv>
    </CardDiv>
  );
};

export default Card;
