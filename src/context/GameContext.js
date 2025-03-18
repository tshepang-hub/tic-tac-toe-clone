import { createContext, useState } from "react";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player1: {
      choice: "x",
      name: "Tshepang",
      score: 0,
    },
    player2: {
      choice: "o",
      name: "Elon",
      score: 0,
    },
    turn: "x"

  })


  const updateBoard = (index) => {
    let updatedBoard = game.board;
    updatedBoard[index] = game.turn
    setGame({
      ...game, 
      board: updatedBoard,
      turn: game.turn === "x" ? "o" : "x"
    });
  };

  const resetBoard = () =>{
    setGame({
      ...game.board,
      board: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    })
  }
  
  return <GameContext.Provider value={{ game, updateBoard }}>{props.children}</GameContext.Provider>;
};
