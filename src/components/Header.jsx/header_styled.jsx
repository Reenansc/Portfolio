import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`;

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const responsiveh = css`
  @media (min-width: 201px) and (max-width: 500px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 15px;
    align-items: center;
    text-align: center;
    nav {
      width: 90vw;
    }
    a {
      font-size: 15px;
    }
  }
  @media (min-width: 501px) and (max-width: 900px) {
    font-size: 18px;
    width: 100%;
    nav {
      display: flex;
      justify-content: space-evenly;
      width: 40vw;
    }
  }
  @media (min-width: 901px) and (max-width: 1536px) {
    nav {
      width: 30vw;
    }
  }
`;

export const NavBar = styled.section`
  position: fixed;
  ${responsiveh}
  border-bottom: solid 2px green;
  width: 100%;
  background-color: black;
  height: 10vh;
  font-size: 24px;
  color: white;
  ${center}
  justify-content: space-around;
  nav {
    background-position: initial;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.7);
  }

  a {
    text-decoration: none;
    font-size: 22px;
    color: gray;
  }

  a:hover {
    color: wheat;
  }
`;
