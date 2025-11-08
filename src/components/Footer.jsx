import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import redes from "../assets/redes.png";

const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1366px;
  background: #FFEBD9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

const FooterLogo = styled.img`
  width: 125px;
  height: 57.5px;
`;

const FooterText = styled.p`
  width: 600px;
  text-align: center;
  font-size: 10px;
  margin-top: 20px;
`;

const SocialIcons = styled.img`
  width: 88px;
  height: 24px;
  margin-top: 20px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={logo} alt="Logo" />
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
      </FooterText>
      <SocialIcons src={redes} alt="Redes Sociais" />
    </FooterContainer>
  );
}
