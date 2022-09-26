import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// ---------------styling----------------------
import { CardDiv, ContentDiv } from "./Card.styled";

const Card = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <CardDiv data-aos="fade-up" className="second third">
        <img src={props.img} alt="" />

        <ContentDiv>
          <span>{props.span1}</span> <br />
          <span> {props.span2}</span>
        </ContentDiv>
      </CardDiv>
    </>
  );
};

export default Card;
