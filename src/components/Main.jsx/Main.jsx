import * as S from "./main_styled";
import eu from "../../assets/eu.jpeg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import tailwind from "../../assets/tailwind.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import react from "../../assets/react.png";
import js from "../../assets/js.png";
import styled from "../../assets/styled.png";
import hort from "../../assets/hortfruit.png";
import Carousel from "react-elastic-carousel";
import mac from "../../assets/mac.png"
import desenvolvimento from "../../assets/desenvolvimento.png"

export default function Main() {
  return (
    <>
      <S.BoxOne id="inicio">
        <div>
          <h2>Olá,</h2>
          <h2>Meu nome é Renan </h2>
          <h2>
            Sou Desenvolvedor <span>Front-End</span>
          </h2>
          <h3>
            "O sucesso é a soma de pequenos esforços repetidos dia após dia."
          </h3>
          <h3>Seja bem vindo(a) ao meu potifólio.</h3>
        </div>
        <figure>
          <img src={eu} alt="Minha Foto" />
        </figure>
      </S.BoxOne>
      <S.BoxTwo id="sobre">
        <S.Habilidades>
          <h2>Minhas Habilidades</h2>
          <figure>
            <img src={html} alt="Icone HTMl" />
            <img src={css} alt="Icone CSS " />
            <img src={js} alt="Icone JavaScript" />
            <img src={tailwind} alt="Icone Tailwind" />
            <img src={react} alt="Icone React" />
            <img src={styled} alt="Icone Styled-Components" />
          </figure>
        </S.Habilidades>
        <S.Sobre>
          <h2>Sobre Mim</h2>
          <p>
            Sou um entusiasta da tecnologia que ingressou no mundo da
            programação em 2023. Atualmente, estou focado em aprimorar minhas
            habilidades como estudante de Front-End, buscando constantemente
            novos desafios e oportunidades para expandir meu conhecimento e
            experiência. Desde que comecei minha jornada nesta área fascinante,
            tenho sido apaixonado por criar experiências digitais cativantes e
            funcionais. Minhas habilidades incluem HTML, CSS e JavaScript, e
            estou sempre em busca de aprender novas tecnologias e ferramentas
            para aprimorar minhas habilidades e criar projetos cada vez mais
            impressionantes. Acredito firmemente na importância da aprendizagem
            contínua e da colaboração com outros profissionais da área. Estou
            sempre aberto a novas ideias, feedback construtivo e oportunidades
            de colaboração que me permitam expandir minha visão e aprimorar
            minhas habilidades. Este portfólio é uma amostra do meu trabalho até
            o momento, e estou ansioso para compartilhar meus projetos e
            progressos com você. Se você está em busca de um desenvolvedor
            Front-End dedicado e em constante evolução, estou pronto para
            contribuir com minha paixão e habilidades para o sucesso do seu
            próximo projeto. Obrigado por visitar meu portfólio e espero ter a
            oportunidade de trabalhar juntos em breve!
          </p>
          <figure>
            <a href="https://github.com/Reenansc" target="_blank">
              <img src={github} alt="logo do github" />
            </a>
            <a
              href="https://www.linkedin.com/in/renansantoscosta/"
              target="_blank"
            >
              <img src={linkedin} alt="logo do linkedin" />
            </a>
          </figure>
        </S.Sobre>
      </S.BoxTwo>
      <S.BoxThree id="projetos">
        <h2>Projetos</h2>
        <Carousel
          itemsToShow={1}
          easing="cubic-bezier(1,.15,.55,1.54)"
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          transitionMs={1000}
        >
          <S.Card>
            <img src={hort} alt="" />
            <h3>Tecnologias</h3>
            <h4>HTML | CSS | React.js | Styled-Components</h4>
            <S.CardF>
              <a href="https://github.com/Reenansc/hortfruit" target="_blank">
                {" "}
                <img src={github} alt="" />
              </a>
            </S.CardF>
          </S.Card>
          <S.Card>
            <img src={mac} alt="" />
            <h3>Tecnologias</h3>
            <h4>HTML | CSS | React.js | Styled-Components</h4>
            <S.CardF>
              <a href="https://github.com/Reenansc/mac-t3" target="_blank">
                {" "}
                <img src={github} alt="" />
              </a>
            </S.CardF>
          </S.Card>
          <S.Card>
            <img src={desenvolvimento} alt="" />
            <h3>Tecnologias</h3>
            <h4>HTML | CSS | React.js | Styled-Components | Tailwindcss</h4>
            <S.CardF>
              <a href="https://github.com/Reenansc/TUTORS-FRONT" target="_blank">
                {" "}
                <img src={github} alt="" />
              </a>
            </S.CardF>
          </S.Card>
        </Carousel>
      </S.BoxThree>
    </>
  );
}
