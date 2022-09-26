import styled from "styled-components";

export const RewardParentDiv = styled.div`
  margin-top: 14%;
  background-color: #93de01;
  padding-left: 1%;
  width: 100%;
  display: flex;
  gap: clamp(1.875rem, -7.1256054898rem + 14.5317545748vw, 10.3125rem);

  @media screen and (max-width: 995px) {
    flex-direction: column;
    padding-left: 3%;
  }
`;
