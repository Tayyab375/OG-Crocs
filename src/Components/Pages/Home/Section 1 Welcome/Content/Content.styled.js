import styled from "styled-components";

export const ContentParentDiv = styled.div`
  color: white;
  max-width: 39%;

  @media screen and (max-width: 992px) {
    max-width: 100%;
  }

  h1 {
    font-size: clamp(5rem, 0.125rem + 5.4166666667vw, 6.625rem);
    font-weight: 400;
    line-height: 1;
    font-family: "VG5000", sans-serif;
    margin-bottom: 7.5%;
    margin-top: 12%;

    @media (max-width: 90em) {
      font-size: clamp(3.125rem, 2.5533536585rem + 2.4390243902vw, 5rem);
    }
  }

  & .backspace {
    font-family: "VG5000", sans-serif;

    @media screen and (max-width: 992px) {
      padding-left: 6.875rem;
    }

    @media screen and (max-width: 480px) {
      padding-left: 0;
    }
  }

  & .headingGreen {
    font-family: "VG5000", sans-serif;
    text-shadow: 0px 0px 30px rgb(165 250 0 / 50%);
    color: #a5fa00;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 7.5%;

    @media screen and (min-width: 1500px) {
      font-size: 1.4rem;
    }
  }

  & .block {
    display: block;
  }

  & .space {
    width: 8.75rem;
    display: inline-block;
  }
`;
