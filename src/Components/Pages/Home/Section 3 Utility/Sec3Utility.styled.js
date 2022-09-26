import styled from "styled-components";

export const UtilityParentDiv = styled.div`
  margin-top: clamp(2.5rem, -0.625rem + 13.3333333333vw, 12.75rem);
  width: 100%;

  @media screen and (max-width: 800px) {
    & .hidden {
      display: none;
    }
  }
`;

export const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 3.125rem;
  column-gap: 3.125rem;
  padding: 0 2.5em;
  width: 100%;

  @media screen and (max-width: 1200px) {
    padding-left: 2.5%;
  }

  @media (max-width: 61.99875em) {
    grid-template-columns: repeat(3, 1fr);

    & .second:nth-child(2) {
      transform: translateY(17%) !important;

      @media (max-width: 49.99875em) {
        transform: translateY(0) !important;
      }
    }

    & .second:nth-child(3n + 2) {
      transform: translateY(17%) !important;

      @media (max-width: 49.99875em) {
        transform: translateY(0) !important;
      }
    }
  }

  @media (max-width: 49.99875em) {
    grid-template-columns: repeat(2, 1fr);

    & .third:nth-child(3) {
      transform: translateY(2.5rem) !important;
    }

    & .third:nth-child(2n + 1) {
      transform: translateY(2.5rem) !important;
    }
  }

  @media screen and (max-width: 1200px) {
    row-gap: 1.6rem;
    column-gap: 1.6rem;
  }

  @media screen and (max-width: 490px) {
    row-gap: 0.65rem;
    column-gap: 0.65rem;
  }

  div:nth-child(4n + 2) {
    transform: translateY(17%) !important;

    @media (max-width: 61.99875em) {
      transform: translateY(0) !important;
    }
  }

  div:nth-child(4n + 3) {
    transform: translateY(17%) !important;

    @media (max-width: 61.99875em) {
      transform: translateY(0) !important;
    }
  }
`;
