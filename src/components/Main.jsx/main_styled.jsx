import styled, { css } from "styled-components";

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const arrow = css`
  .rec .rec-arrow-left {
    background-color: green;
  }

  .rec .rec-arrow-right {
    background-color: green;
  }

  .rec.rec-pagination {
    display: none;
  }
`;

export const BoxOne = styled.section`
  background-color: black;
  padding-top: 10vh;
  height: 100vh;
  color: white;
  ${center}
  justify-content: space-evenly;
  img {
    width: 28vw;
    border-radius: 220px;
  }
  h2 {
    margin-left: 15vw;
    text-align: center;
    width: 25vw;
    font-size: 40px;
  }
  h3 {
    font-size: 24px;
    padding-top: 3vh;
    width: 55vw;
    text-align: center;
  }

  span {
    color: green;
  }
`;

export const BoxTwo = styled.section`
  background-color: #424e51;
  ${center}
  justify-content: space-around;
  height: 103vh;
`;

export const Sobre = styled.div`
  padding-top: 5vh;
  width: 45vw;
  height: 92vh;
  font-size: 22px;
  ${center}
  flex-direction: column;
  justify-content: flex-start;
  h2 {
    font-size: 32px;
    padding-bottom: 2vh;
  }

  figure {
    padding-top: 2vh;
    width: 30vw;
    display: flex;
    justify-content: space-evenly;
  }

  img {
    width: 3vw;
  }
`;

export const Habilidades = styled.div`
  ${center}
  flex-direction: column;
  width: 40vw;
  height: 70vh;
  font-size: 25px;

  figure {
    padding-top: 5vh;
    width: 32vw;
    display: flex;
    justify-content: space-evenly;
  }
  img {
    width: 4vw;
  }

  img:hover {
    transform: scale(1.3);
  }
`;

export const BoxThree = styled.section`
  ${center}
  ${arrow}
background-color: black;
  color: white;
  height: 90vh;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  h2 {
    font-size: 34px;
  }
  img {
    width: 18vw;
    height: 20vh;
    border-radius: 7px;
  }
`;

export const Card = styled.div`
  padding-top: 1vh;
  border-radius: 10px;
  background-color: #424e51;
  color: white;
  border: solid 3px green;
  width: 19vw;
  height: 50vh;

  h4 {
    padding-top: 4vh;
  }
  h3 {
    padding-top: 2vh;
  }
  p {
    padding-top: 2vh;
    font-size: 14px;
  }
`;
export const CardF = styled.div`
  img {
    padding-top: 2vh;
    width: 4vw;
    height: 10vh;
  }
`;
