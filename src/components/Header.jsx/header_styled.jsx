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

export const NavBar = styled.section`
  position: fixed;
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
    width: 20vw;
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
