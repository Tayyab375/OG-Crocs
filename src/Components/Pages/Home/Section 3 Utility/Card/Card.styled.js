import styled from "styled-components";

export const CardDiv = styled.div`
  background: #161a1c;
  box-shadow: 0px 5.33341px 112.002px #000000;
  padding: 3rem 0.625rem 1.25rem 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: clamp(0.5rem, 0.0426829268rem + 1.9512195122vw, 2rem);
  min-height: clamp(16.5rem, 6.25e-8rem + 18.3333333333vw, 22rem);

  @media screen and (max-width: 650px) {
    padding: 1.25rem 0.625rem;
  }

  @media screen and (max-width: 400px) {
    padding: 0;
  }

  img {
    height: auto;
    max-width: 100%;
    display: block;
    margin-bottom: 8%;
  }
`;

export const ContentDiv = styled.div`
  text-align: center;
  font-weight: 400;
  line-height: 140%;
  color: white;

  br {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  span {
    font-size: 1.25rem;

    @media screen and (max-width: 1000px) {
      font-size: 1.1rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 14px;
    }
  }
`;
