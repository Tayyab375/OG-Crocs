import styled from "styled-components";

export const CardRenderParentDiv = styled.div`
  width: 59%;
  display: flex;
  gap: 3%;

  @media screen and (max-width: 992px) {
    margin-top: 1.8rem;
    width: 100%;
  }
`;

export const FirstFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3%;
  margin-top: 7%;
`;

export const MiddleFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3%;
`;

export const LastFelxDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3%;
  margin-top: 7%;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
