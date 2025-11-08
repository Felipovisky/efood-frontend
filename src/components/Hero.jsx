import React from "react";
import styled from "styled-components";
import heroBg from "../assets/hero-bg.png";
import logo from "../assets/logo.png";

const HeroContainer = styled.section`
  width: 100%;
  max-width: 1366px;
  height: 384px;
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const HeroLogo = styled.img`
  width: 125px;
  height: 57.5px;
  position: absolute;
  top: 40px;
  left: calc(50% - 62.5px); /* centraliza horizontal */
`;

const HeroText = styled.h1`
  width: 539px;
  height: 84px;
  position: absolute;
  top: 236px;
  left: 414px; /* exatamente como no Figma */
  font-family: 'Roboto', sans-serif;
  font-weight: 900; /* Black */
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  color: #E66767;
`;

export default function Hero() {
  return (
    <HeroContainer>
      <HeroLogo src={logo} alt="Logo" />
      <HeroText>
        Viva experiências gastronômicas no conforto da sua casa
      </HeroText>
    </HeroContainer>
  );
}
