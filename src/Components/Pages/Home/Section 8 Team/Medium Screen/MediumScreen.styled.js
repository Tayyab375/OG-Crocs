import styled from "styled-components";

export const ParentDiv = styled.div`
  width: 100%;
  display: none;

  @media screen and (max-width: 992px) {
    display: block;
  }

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.125rem 1.25rem;
  margin: 0 1rem;

  div:nth-child(4) {
    img {
      display: none;
    }
  }

  div:nth-child(5) {
    img {
      display: none;
    }
  }
`;
