import styled from "styled-components";

export const AboutParentDiv = styled.div`
  margin-top: clamp(2.5rem, -0.625rem + 13.3333333333vw, 12.75rem);
  width: 100%;
`;

export const HeadingDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  h2 {
    width: fit-content;
    margin-bottom: 3.375rem;
    text-transform: uppercase;
    font-size: clamp(0.9375rem, 0.6135670732rem + 1.3821138211vw, 2rem);
    letter-spacing: 0.13em;
    color: #a5fa00;
    font-family: "VG5000", sans-serif;
    padding: 0 0.79em;
    text-shadow: 0px 0px 13.3335px rgb(165 250 0 / 70%);
    position: relative;
    font-weight: 500;

    ::after {
      position: absolute;
      width: 0.40625em;
      top: 50%;
      right: 0;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      height: 100%;
      content: "";
      border-top: 0.0834375em solid #a5fa00;
      border-bottom: 0.0834375em solid #a5fa00;
      -webkit-filter: drop-shadow(0px 0px 26.667px #a5fa00);
      filter: drop-shadow(0px 0px 26.667px #a5fa00);
      border-right: 0.0834375em solid #a5fa00;
    }

    ::before {
      position: absolute;
      width: 0.40625em;
      top: 50%;
      left: 0;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      height: 100%;
      content: "";
      border-top: 0.0834375em solid #a5fa00;
      border-bottom: 0.0834375em solid #a5fa00;
      -webkit-filter: drop-shadow(0px 0px 26.667px #a5fa00);
      filter: drop-shadow(0px 0px 26.667px #a5fa00);
      border-left: 0.0834375em solid #a5fa00;
    }
  }
`;

export const ContentDiv = styled.div`
  padding: 0 3%;

  p {
    font-size: clamp(1.5rem, 0.5091463415rem + 4.2276422764vw, 4.75rem);
    color: white;
    font-family: "VG5000", sans-serif;
    text-align: center;

    @media screen and (max-width: 61.99875em) {
      text-align: left;
      text-indent: 1.25em;
    }
  }

  span {
    font-family: "VG5000", sans-serif;
    color: #a5fa00;
    text-shadow: 0px 0px 30px rgb(165 250 0 / 50%);
  }
`;
