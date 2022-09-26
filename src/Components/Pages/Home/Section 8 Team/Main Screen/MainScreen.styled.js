import styled from "styled-components";

export const ParentDiv = styled.div`
  width: 100%;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const FirstGridSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2.125rem;
  margin-bottom: 7.5rem;

  div:nth-child(3) {
    transform: translateY(16%) !important;
  }
`;

export const SecondGridSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.125rem;
  margin-bottom: 7.5rem;
  padding: 0 5rem;

  div:nth-child(2) {
    transform: translateY(16%) !important;
  }

  div:nth-child(3) {
    transform: translateY(16%) !important;
  }
`;

export const ThirdGridSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.125rem;
  padding: 0 5rem;
  margin-bottom: 7.5rem;

  div:nth-child(2) {
    transform: translateY(16%) !important;
  }

  div:nth-child(3) {
    transform: translateY(16%) !important;
  }
`;

export const ForthGridSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2.125rem;
  padding: 0 1rem;
  margin-bottom: 7.5rem;

  div:nth-child(2) {
    transform: translateY(15%) !important;
  }

  div:nth-child(4) {
    transform: translateY(15%) !important;
  }

  div:nth-child(3) {
    transform: translateY(30%) !important;
  }
`;
