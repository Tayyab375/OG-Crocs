import styled from "styled-components";

export const WelcomeParentDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 14%;
  margin-top: 5%;
  padding: 0 2.1rem;
  overflow: hidden;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    padding-left: 1.2rem;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1500px) {
    gap: 5%;
    padding: 0 10%;
  }
`;
