import styled from "styled-components";

export const ContentParentDiv = styled.div`
  padding-top: 10rem;
  max-width: 50%;

  @media screen and (max-width: 995px) {
    max-width: 100%;
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

export const ContentDiv = styled.div`
  p {
    font-size: 1.625rem;
    color: rgb(8, 8, 8);

    & .space {
      width: 6.5rem;
      display: inline-block;
    }
  }
  /* @media screen and (max-width: 995px) {
    width: 99%;
  } */
`;
