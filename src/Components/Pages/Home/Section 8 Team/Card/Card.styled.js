import styled from "styled-components";

export const CardDiv = styled.div``;

export const ImgDiv = styled.div`
  border-radius: 23px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContentDiv = styled.div`
  padding-top: 1.5625rem;
  text-align: center;
  color: white;

  h3 {
    margin-bottom: 0.5625rem;
    font-size: clamp(1.125rem, 0.9344512195rem + 0.8130081301vw, 1.75rem);
    font-family: "VG5000", sans-serif;
    line-height: 1.1785714286;
    text-transform: uppercase;
    font-weight: 500;
  }

  p {
    font-size: 1.2rem;
  }
`;
