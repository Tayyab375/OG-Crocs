import styled from "styled-components";

export const TransformationParentDiv = styled.div`
  padding-right: 1%;
  width: 100%;
  display: flex;
  gap: 4%;

  @media screen and (max-width: 995px) {
    flex-direction: column-reverse;
    padding-left: 3%;
  }
`;
