import styled from "styled-components";

export const ParentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12rem;

  @media screen and (min-width: 1300px) {
    margin-top: 12%;
  }
`;

export const LogoDiv = styled.div`
  @media screen and (max-width: 350px) {
    img {
      width: 100px;
    }
  }

  @media screen and (max-width: 250px) {
    img {
      width: 60px;
    }
  }
`;

export const UnoderList = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }

  li {
    list-style: none;
    color: white;
    font-size: 1.05rem;
    cursor: pointer;

    @media screen and (min-width: 1400px) {
      br {
        display: none;
      }
    }

    @media screen and (min-width: 1500px) {
      font-size: 1.3rem;
    }
  }
`;

export const TwoLogoDiv = styled.div`
  display: flex;
  gap: 0.5rem;

  @media screen and (max-width: 350px) {
    img {
      height: 40px;
      width: 40px;
    }
  }

  @media screen and (max-width: 250px) {
    img {
      height: 30px;
      width: 30px;
    }
  }
`;

export const Hr = styled.hr`
  margin: 1.4rem 0;
  background: #413f3f;
  height: 2px;
  width: 100%;
  border: 0;
`;

export const SmallScreenUl = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
  }

  li {
    color: white;
    font-size: 1.5rem;
    list-style: none;
    cursor: pointer;
    text-align: center;
    margin-left: 2rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 350px) {
      font-size: 1rem;
    }
  }
`;

export const HiddenHr = styled.hr`
  margin-bottom: 0.8rem;
  background: #413f3f;
  height: 2px;
  width: 100%;
  border: 0;
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;
