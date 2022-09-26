import styled from "styled-components";

import icon from "../Assets/Images/icon2.svg";

export const ImageDiv = styled.div`
  max-width: 50%;
  position: relative;
  margin-top: 8rem;
  margin-bottom: 10%;

  @media screen and (max-width: 995px) {
    margin-top: 1.5rem;
    max-width: 90%;
    margin-left: 3.5%;
  }

  /* ------------top-left border------------------------ */

  & .first {
    position: absolute;
    border-top: 2.6667px solid rgb(8, 8, 8);
    border-left: 2.6667px solid rgb(8, 8, 8);
    top: 0;
    left: 0;
    height: clamp(2.5rem, 1.6959951456rem + 3.430420712vw, 5.8125rem);
    width: clamp(2.5rem, 1.6959951456rem + 3.430420712vw, 5.8125rem);

    ::after {
      content: "";
      position: absolute;
      background: url(${icon}) center/contain no-repeat;
      top: 50%;
      height: 100%;
      width: 34.4086021505%;
      -webkit-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }

  /* ------------top-right border------------------------ */

  & .second {
    position: absolute;
    border-top: 2.6667px solid rgb(8, 8, 8);
    border-right: 2.6667px solid rgb(8, 8, 8);
    top: 0;
    right: 0;
    height: clamp(2.5rem, 1.6959951456rem + 3.430420712vw, 5.8125rem);
    width: clamp(2.5rem, 1.6959951456rem + 3.430420712vw, 5.8125rem);

    ::after {
      content: "";
      position: absolute;
      background: url(${icon}) center/contain no-repeat;
      top: 50%;
      height: 100%;
      width: 34.4086021505%;
      -webkit-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }

  /* ------------bottom left border------------------------ */

  & .third {
    position: absolute;
    border-bottom: 2.6667px solid rgb(8, 8, 8);
    border-left: 2.6667px solid rgb(8, 8, 8);
    bottom: 0;
    left: 0;
    height: clamp(2.5rem, 1.6959951456rem + 3.430420712vw, 5.8125rem);
    width: clamp(2.5rem, 1.6959951456rem + 3.430420712vw, 5.8125rem);

    ::after {
      content: "";
      position: absolute;
      background: url(${icon}) center/contain no-repeat;
      top: 50%;
      height: 100%;
      width: 34.4086021505%;
      -webkit-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }

  /* ------------bottom right border------------------------ */

  & .forth {
    position: absolute;
    border-bottom: 2.6667px solid rgb(8, 8, 8);
    border-right: 2.6667px solid rgb(8, 8, 8);
    bottom: 0;
    right: 0;
    height: clamp(2.5rem, 1.6959951456rem + 3.430420712vw, 5.8125rem);
    width: clamp(2.5rem, 1.6959951456rem + 3.430420712vw, 5.8125rem);

    ::after {
      content: "";
      position: absolute;
      background: url(${icon}) center/contain no-repeat;
      top: 50%;
      height: 100%;
      width: 34.4086021505%;
      -webkit-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
