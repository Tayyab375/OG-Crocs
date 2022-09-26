import styled from "styled-components";

export const ImageDiv = styled.div`
  /* height: 182px; */
  /* width: 176px; */
  border-radius: 23px;
  overflow: hidden;
  /* margin-bottom: 3.5%; */

  /* @media screen and (max-width: 400px) {
    height: 100%;
    width: 200px;
  } */

  /* @media screen and (max-width: 992px) {
    height: 100%;
    width: 100%;
  } */

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
