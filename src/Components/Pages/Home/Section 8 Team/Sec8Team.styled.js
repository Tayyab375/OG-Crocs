import styled from "styled-components";

export const TeamParentDiv = styled.div`
  margin-top: 16%;

  & .heading {
    margin-bottom: 4rem;
    font-size: clamp(3.125rem, 1.8673780488rem + 5.3658536585vw, 7.25rem);
    font-family: "VG5000", sans-serif;
    line-height: 100%;
    text-align: center;
    color: #a5fa00;
    font-weight: 500;
  }
`;

export const HeadingDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  h2 {
    width: fit-content;
    margin-bottom: 1.8rem;
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
