import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// ----------------image----------------
import img1 from "../Assets/Images/01.webp";
import img2 from "../Assets/Images/02.webp";
import img3 from "../Assets/Images/03.webp";
import img4 from "../Assets/Images/04.webp";
import img5 from "../Assets/Images/05.webp";
import img6 from "../Assets/Images/06.webp";
import img7 from "../Assets/Images/07.webp";
import img8 from "../Assets/Images/08.webp";
import img9 from "../Assets/Images/09.webp";
import img10 from "../Assets/Images/10.webp";
import img11 from "../Assets/Images/11.webp";
import img12 from "../Assets/Images/12.webp";
import img13 from "../Assets/Images/13.webp";
import img14 from "../Assets/Images/14.webp";
import img15 from "../Assets/Images/15.webp";
import img16 from "../Assets/Images/16.webp";

//-----------------components--------------------------
import Card from "../Card/Card";

// -----------------styling--------------------------
import {
  FirstGridSection,
  ForthGridSection,
  ParentDiv,
  SecondGridSection,
  ThirdGridSection,
} from "./MainScreen.styled";

const MainScreen = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ParentDiv>
      <FirstGridSection data-aos="fade-up">
        <div />
        <Card
          img={img1}
          heading={"SEAN"}
          info1={"Crypto Youtuber and"}
          info2={"F1 enthusiast"}
        />
        <Card
          img={img2}
          heading={"POKEBALL"}
          info1={"Co-Founder and"}
          info2={"pizza lover"}
        />
        <Card
          img={img3}
          heading={"CHRIS"}
          info1={"Artist and Surfer"}
          info2={""}
        />
        <div />
      </FirstGridSection>

      <SecondGridSection data-aos="fade-up">
        <Card img={img4} heading={"ALEX"} info1={"Web-Designer"} info2={""} />
        <Card img={img5} heading={"ROBERT"} info1={"Lead Dev"} info2={""} />
        <Card
          img={img6}
          heading={"MAX"}
          info1={"Blockchain Expert"}
          info2={""}
        />
        <Card
          img={img7}
          heading={"PROMIT"}
          info1={"Lead Poker Dev"}
          info2={""}
        />
      </SecondGridSection>

      <ThirdGridSection data-aos="fade-up">
        <Card
          img={img8}
          heading={"BOFKE"}
          info1={"Community Manager"}
          info2={""}
        />
        <Card img={img9} heading={"ASUNG"} info1={"Team Lead"} info2={""} />
        <Card img={img10} heading={"MICHOR"} info1={"Team Lead"} info2={""} />
        <Card
          img={img11}
          heading={"PROFBRIGGLES"}
          info1={"Community Manager"}
          info2={""}
        />
      </ThirdGridSection>

      <ForthGridSection data-aos="fade-up">
        <Card img={img12} heading={"C4DEMUS"} info1={"Mod"} info2={""} />
        <Card img={img13} heading={"DOM"} info1={"Mod"} info2={""} />
        <Card img={img14} heading={"OLIVER JAMES"} info1={"Mod"} info2={""} />
        <Card img={img15} heading={"DARKWING"} info1={"Mod"} info2={""} />
        <Card img={img16} heading={"TERTLFACE"} info1={"Mod"} info2={""} />
      </ForthGridSection>
    </ParentDiv>
  );
};

export default MainScreen;
