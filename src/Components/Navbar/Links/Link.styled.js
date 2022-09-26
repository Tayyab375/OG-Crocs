import styled from "styled-components";

export const NavUnorderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2.6rem;
  display: none;

  @media screen and (max-width: 1030px) {
    display: flex;
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
  }

  a {
    text-decoration: none;
    color: white;
    transition: 0.45s ease-in;
    text-transform: uppercase;
    font-weight: 500;

    :hover {
      color: red;
    }
  }
`;
