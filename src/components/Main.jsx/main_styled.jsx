import styled, { css } from "styled-components";

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const responsivebx1 = css`
  @media (min-width: 201px) and (max-width: 500px) {
    display: flex;
    width: 100%;
    height: 103vh;
    flex-direction: column;
    div {
      padding-top: 50px;
    }
    h2 {
      font-size: 19px;
      text-align: center;
    }
    h3 {
      padding-top: 20px;
      font-size: 20px;
      width: 100vw;
      text-align: center;
    }
  }
  @media (min-width: 501px) and (max-width: 900px) {
    display: flex;
    width: 102.1%;
    flex-direction: column;
    div {
      padding-top: 25px;
    }

    h2 {
      font-size: 30px;
      text-align: center;
    }
    h3 {
      margin: 10px;
      font-size: 22px;
      width: 100vw;
      text-align: center;
    }
  }
  @media (min-width: 901px) and (max-width: 1536px) {
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
  }
`;

const responsivebx2 = css`
  @media (min-width: 201px) and (max-width: 500px) {
    display: flex;
    width: 100%;
    height: 150vh;
    flex-direction: column;
    text-align: center;

    p {
      width: 98vw;
      font-size: 14px;
    }

    h2 {
      font-size: 18px;
    }
    figure {
      gap: 5px;
    }

    img {
      width: 10vw;
    }
  }
  @media (min-width: 501px) and (max-width: 900px) {
    display: flex;
    width: 102.1%;
    height: 100vh;
    flex-direction: column;

    h2 {
      font-size: 20px;
    }
    p {
      width: 80vw;
    }
    figure {
      gap: 10px;
    }
    img {
      width: 10vw;
    }
  }

  @media (min-width: 901px) and (max-width: 1536px) {
    display: flex;
    height: 140vh;
    align-items: center;
    p {
      font-size: 18px;
      line-height: 40px;
    }
    h2 {
      font-size: 23px;
      padding-bottom: 2vh;
    }

    figure {
      padding-top: 2vh;
      width: 30vw;
      display: flex;
      justify-content: space-evenly;
    }

    img {
      width: 5vw;
    }
  }
`;
const responsivebx3 = css`
  @media (max-width: 500px) {
    border: solid 1px red;
    width: 90vw;
    border-radius: 10px;
    background-color: #424e51;
    color: white;
    border: solid 3px green;
    img {
      width: 50vw;
    }
  }
  @media (min-width: 501px) and (max-width: 900px) {
    background-color: black;
    width: 30vw;
    border-radius: 10px;
    background-color: #424e51;
    color: white;
    border: solid 3px green;
    img {
      width: 28vw;
    }
  }

`;


const arrow = css`
  .rec .rec-arrow-left {
    background-color: green;
    margin-left: 10%;
  }

  .rec .rec-arrow-right {
    background-color: green;
    margin-right: 10%;
  }

  .rec.rec-pagination {
    display: none;
  }
`;

export const BoxOne = styled.section`
  background-color: black;
  padding-top: 10vh;
  height: 103vh;
  width: 100%;
  color: white;
  ${center}
  ${responsivebx1}
  justify-content: space-evenly;
  img {
    width: 28vw;
    border-radius: 220px;
  }

  span {
    color: green;
  }
`;

export const BoxTwo = styled.section`
  background-color: #424e51;
  ${center}
  ${responsivebx2}
  justify-content: space-around;
  height: 100vh;
  width: 100%;
`;

export const Sobre = styled.div`
  padding-top: 5vh;
  width: 45vw;
  height: 110vh;
  font-size: 15px;
  line-height: 30px;
  ${center}
  flex-direction: column;
  justify-content: flex-start;
  h2 {
    font-size: 24px;
    padding-bottom: 2vh;
  }

  figure {
    padding-top: 8vh;
    width: 30vw;
    display: flex;
    justify-content: space-evenly;
  }

  img {
    width: 5vw;
  }
`;

export const Habilidades = styled.div`
  ${center}
  padding-top: 4vh;
  flex-direction: column;
  height: 50vh;
  font-size: 10px;

  figure {
    padding-top: 3vh;
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
${responsivebx3}
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
