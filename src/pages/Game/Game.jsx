import React, { useContext, useEffect, useRef, useState } from 'react';
import { Container } from '../../styles/General.styled';
import { GameBoardStyle } from './Game.styled';
import GameCell from '../../components/GameCell/GameCell';
import { GameContext } from '../../context/GameContext';
import backgroundMusic from '../../assets/music/background.mp3'; // Import the music file

const Game = () => {
  const { game } = useContext(GameContext);
  const audioRef = useRef(new Audio(backgroundMusic));
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.5;

    if (isPlaying) {
      audio.play().catch((err) => console.log("Autoplay blocked:", err));
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]);

  return (
    <Container>
      {/* 🎵 Music Toggle Button */}
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        style={{ marginBottom: '20px', padding: '10px', cursor: 'pointer' }}
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>

      {/* 🕹️ Game Board */}
      <GameBoardStyle>
        {game.board.map((item, index) => (
          <GameCell key={index} cellItem={item} index={index} />
        ))}
      </GameBoardStyle>
    </Container>
  );
};

export default Game;
