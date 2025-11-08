import React from "react";
import styled from "styled-components";
import sushiImg from "../assets/hioki-sushi.png"; // imagem do card
import pastaImg from "../assets/la-dolce-vita.png"; // imagem repetida

const ListContainer = styled.section`
  width: 100%;
  max-width: 1024px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 40px auto;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 10px 15px;
  flex: 1;
`;

const CardTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CardRating = styled.span`
  font-size: 14px;
  color: #f5a623; /* cor do rating */
  margin-bottom: 5px;
  display: inline-block;
`;

const CardDescription = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
`;

const CardButton = styled.button`
  background: #E66767;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  align-self: flex-start;
`;

export default function Listagem() {
  const restaurants = [
    {
      title: "Hioki Sushi",
      rating: 4.9,
      image: sushiImg,
      description: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis exclusivos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
    },
    ...Array(5).fill({
      title: "La Dolce Vita Trattoria",
      rating: 4.6,
      image: pastaImg,
      description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
    })
  ];

  return (
    <ListContainer>
      {restaurants.map((res, idx) => (
        <Card key={idx}>
          <CardImage src={res.image} alt={res.title} />
          <CardContent>
            <CardTitle>{res.title}</CardTitle>
            <CardRating>⭐ {res.rating}</CardRating>
            <CardDescription>{res.description}</CardDescription>
            <CardButton>Saiba mais</CardButton>
          </CardContent>
        </Card>
      ))}
    </ListContainer>
  );
}
