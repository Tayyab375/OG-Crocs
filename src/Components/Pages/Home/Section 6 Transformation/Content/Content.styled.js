import styled from "styled-components";

export const ContentParentDiv = styled.div`
  padding-top: 8rem;
  max-width: 50%;

  @media screen and (max-width: 995px) {
    max-width: 100%;
  }

  h2 {
    margin-bottom: clamp(1.875rem, 1.3605182927rem + 2.1951219512vw, 3.5625rem);
    font-size: clamp(3.125rem, 1.8673780488rem + 5.3658536585vw, 7.25rem);
    font-family: "VG5000", sans-serif;
    font-weight: 500;
    line-height: 100%;
    color: rgb(165, 250, 0);
  }
`;

export const HeadingDiv = styled.div`
  width: 100%;

  h2 {
    width: fit-content;
    margin-bottom: clamp(1.25rem, 0.8117378049rem + 1.8699186992vw, 2.6875rem);
    text-transform: uppercase;
    font-size: clamp(0.9375rem, 0.7660060976rem + 0.7317073171vw, 1.5rem);
    letter-spacing: 0.13em;
    color: rgb(165, 250, 0);
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
      border-top: 0.0834375em solid rgb(165, 250, 0);
      border-bottom: 0.0834375em solid rgb(165, 250, 0);
      -webkit-filter: drop-shadow(0px 0px 26.667px rgb(165, 250, 0));
      filter: drop-shadow(0px 0px 26.667px rgb(165, 250, 0));
      border-right: 0.0834375em solid rgb(165, 250, 0);
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
      border-top: 0.0834375em solid rgb(165, 250, 0);
      border-bottom: 0.0834375em solid rgb(165, 250, 0);
      -webkit-filter: drop-shadow(0px 0px 26.667px rgb(165, 250, 0));
      filter: drop-shadow(0px 0px 26.667px rgb(165, 250, 0));
      border-left: 0.0834375em solid rgb(165, 250, 0);
    }
  }
`;

export const ContentDiv = styled.div`
  color: white;

  p {
    line-height: 1.3846153846;
    font-size: 1.625rem;

    @media screen and (max-width: 995px) {
      font-size: 1.3rem;
    }
  }

  & .firstpara {
    margin-bottom: 2.5rem;
  }

  & .space {
    width: 6.5rem;
    display: inline-block;
  }
`;
