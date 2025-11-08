import React from "react";
import Hero from "../components/Hero";
import Listagem from "../components/Listagem";
import Footer from "../components/Footer";
import { PageContainer } from "../styles/GlobalStyles";

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <Listagem />
      <Footer />
    </PageContainer>
  );
}
