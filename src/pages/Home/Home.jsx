import React from "react";
import { Container, SubTitle, Title } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handlePlayNowClick = () => {
    navigate("/game-on");
  };

  return (
    <Container>
      <Title $isDarkMode={true}>TicTacToe</Title>
      <SubTitle $isDarkMode={true}>Play with your friends, higher score wins</SubTitle>
      <Button onClick={handlePlayNowClick}>Play Now</Button>
    </Container>
  );
};

export default Home;
