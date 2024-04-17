import * as S from "./header_styled";

export default function Header() {
  return (
    <>
      <S.NavBar>
        <h1>Renan Santos</h1>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </S.NavBar>
    </>
  );
}
