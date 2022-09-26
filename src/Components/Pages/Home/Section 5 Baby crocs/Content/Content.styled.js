import styled from "styled-components";

// ------------------images---------------
import img from "../Assets/Images/001.svg";

export const ContentParentDiv = styled.div`
  padding-top: 10rem;

  @media screen and (max-width: 995px) {
    width: 100%;
    padding-top: 5rem;
  }

  h2 {
    margin-bottom: clamp(1.875rem, 1.3605182927rem + 2.1951219512vw, 3.5625rem);
    font-size: clamp(3.125rem, 1.8673780488rem + 5.3658536585vw, 7.25rem);
    font-family: "VG5000", sans-serif;
    font-weight: 500;
    line-height: 100%;
    color: #080808;
  }
`;

export const HeadingDiv = styled.div`
  width: 100%;

  h2 {
    width: fit-content;
    margin-bottom: 2.2rem;
    text-transform: uppercase;
    font-size: clamp(0.9375rem, 0.7660060976rem + 0.7317073171vw, 1.5rem);
    letter-spacing: 0.13em;
    color: #080808;
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
      border-top: 0.0834375em solid #080808;
      border-bottom: 0.0834375em solid #080808;
      -webkit-filter: drop-shadow(0px 0px 26.667px #080808);
      filter: drop-shadow(0px 0px 26.667px #080808);
      border-right: 0.0834375em solid #080808;
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
      border-top: 0.0834375em solid #080808;
      border-bottom: 0.0834375em solid #080808;
      -webkit-filter: drop-shadow(0px 0px 26.667px #080808);
      filter: drop-shadow(0px 0px 26.667px #080808);
      border-left: 0.0834375em solid #080808;
    }
  }
`;

export const UnorderList = styled.ul`
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;

  @media screen and (max-width: 995px) {
    width: 99%;
  }

  li {
    font-weight: 400;
    line-height: 140%;
    color: #080808;
    font-size: clamp(1.0625rem, 1.0053353659rem + 0.243902439vw, 1.25rem);
    margin-bottom: 0.625rem;
    list-style: none;

    ::before {
      content: "";
      position: relative;
      width: 1.0625rem;
      margin-right: 3.375rem;
      top: 0.125em;
      height: 0.9375rem;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 1.0625rem;
      flex: 0 0 1.0625rem;
      display: inline-block;
      background: url(${img}) center/contain no-repeat;

      @media screen and (max-width: 995px) {
        margin-right: 2rem;
      }
    }
  }
`;
