import styled from "styled-components";

export const InfoParentDiv = styled.div`
  margin-top: clamp(2.5rem, -0.625rem + 13.3333333333vw, 12.75rem);
  width: 100%;
  padding: 0 0.9375rem;
`;

export const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5%;

  @media screen and (max-width: 1200px) {
    grid-gap: 2.7%;
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);

    div:nth-child(1) {
      transform: translateY(15%) !important;
    }

    div:nth-child(3) {
      transform: translateY(15%) !important;
    }
  }

  div:nth-child(2) {
    transform: translateY(16.8253968254%);

    :hover {
      transform: scale(1.04);
    }

    @media screen and (max-width: 992px) {
      transform: translateY(0);
    }
  }

  div:nth-child(3) {
    transform: translateY(16.8253968254%);

    :hover {
      transform: scale(1.04);
    }

    @media screen and (max-width: 992px) {
      transform: translateY(0);
    }
  }
`;
