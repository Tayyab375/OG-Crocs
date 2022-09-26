import styled from "styled-components";

export const CardDiv = styled.div`
  background: rgb(21, 25, 27);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10%;
  transition: 0.5s ease;

  :hover {
    transform: scale(1.04);
  }

  div {
    font-size: clamp(1.5rem, 1.118902439rem + 1.6260162602vw, 2.75rem);
    font-family: "VG5000", sans-serif;
    line-height: 100%;
    text-align: center;
    color: #a5fa00;

    @media screen and (max-width: 500px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 350px) {
      font-size: 1rem;
    }

    @media screen and (max-width: 250px) {
      font-size: 0.87rem;
    }
  }
`;

export const ImgDiv = styled.div`
  padding: 0% 20%;
  margin-bottom: 5%;

  @media screen and (max-width: 1200px) {
    padding: 0% 15%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
