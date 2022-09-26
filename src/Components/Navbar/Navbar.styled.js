import styled from "styled-components";

// ----------------------Parent Div-------------------

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #080808;
  padding: 20px 3.5% 3px;
  position: sticky;
  top: 0;
  z-index: 10;

  & .visibility {
    display: none;
    z-index: 20000;
  }

  & .show {
    display: block;
    z-index: 20000;
  }

  & .screen {
    display: none;

    @media screen and (max-width: 1030px) {
      display: block;
    }
  }
`;

// ------------------right Icons Divs------------------
export const LogosDiv = styled.div`
  display: flex;
  gap: 1rem;
  z-index: 20000;
`;

export const NavUnorderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2.6rem;
  font-size: 1.6rem;
  display: none;

  @media screen and (min-width: 1500px) {
    display: flex;
  }

  @media screen and (max-width: 1030px) {
    display: block;
    position: fixed;
    z-index: 10000;
    top: 0vh;
    right: 0;
    width: 100%;
    height: 100vh;
    background: #a5fa00;
    flex-direction: column;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    padding: 150px 0;
    font-size: 2rem;

    &.nav_active {
      transform: translateX(0%);
    }
  }

  li {
    list-style: none;
    position: relative;

    @media screen and (max-width: 1030px) {
      margin-left: 50px;
      margin-bottom: 5px;
    }

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: -20px;
      color: black;
      font-size: 1rem;
      font-family: "VG5000", sans-serif;
    }

    &.first::before {
      content: "01";
    }

    &.second::before {
      content: "02";
    }

    &.third::before {
      content: "03";
    }

    &.forth::before {
      content: "04";
    }

    &.fifth::before {
      content: "05";
    }
  }

  a {
    text-decoration: none;
    color: white;
    transition: 0.45s ease-in;
    text-transform: uppercase;
    font-weight: 500;

    @media screen and (max-width: 1030px) {
      color: #080808;
    }

    :hover {
      color: white;
    }
  }
`;

// ----------------------main logo div------------------

export const LogoDiv = styled.div`
  z-index: 20000;
`;
