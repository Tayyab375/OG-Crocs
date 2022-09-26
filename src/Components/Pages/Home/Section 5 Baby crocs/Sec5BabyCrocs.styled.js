import styled from "styled-components";

export const ParentDiv = styled.div`
  position: relative;
  margin-top: 14%;
  background-color: #ff44bf;
  width: 100%;
  overflow: hidden;
`;

export const FlexDiv = styled.div`
  background-color: #ff44bf;
  padding-left: 1%;
  width: 100%;
  display: flex;
  gap: clamp(1.875rem, -7.1256054898rem + 14.5317545748vw, 10.3125rem);
  justify-content: center;

  @media screen and (max-width: 995px) {
    flex-direction: column;
    padding-left: 3%;
  }
`;
