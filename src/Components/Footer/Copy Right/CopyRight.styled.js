import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-bottom: 1rem;

  p {
    font-size: 1.2rem;

    @media screen and (min-width: 1500px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 12px;
    }

    @media screen and (max-width: 300px) {
      font-size: 10px;
    }

    a {
      color: white;
      text-decoration: none;
    }
  }
`;
