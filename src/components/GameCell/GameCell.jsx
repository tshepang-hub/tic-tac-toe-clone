import React, { useContext } from "react";
import { CellStyle } from "./GameCellStyled";
import { GameContext } from "../../context/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/svgs/icon-x-filled.svg";
import { ReactComponent as IconO } from "../../assets/svgs/icon-o-filled.svg";
import { ReactComponent as OIconOutline } from "../../assets/svgs/icon-o-outlined.svg";
import { ReactComponent as XIconOutline } from "../../assets/svgs/icon-x-outlined.svg";
import { ModalContext } from "../../context/ModalContext";
import RoundOverModal from "../Modal/RoundOverModal/RoundOverModal"

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext)

  const cellClickHandler = () => {
    updateBoard(index);
    if(checkForWinner(game.board)) {
      handleModal(<RoundOverModal />)
    }
  };

  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX className="markedItem"/>
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO className="markedItem"/>
      </CellStyle>
    );
  }
  return (
    <CellStyle onClick={cellClickHandler}>
      {game.turn === "x" ? 
        <XIconOutline className="outlineIcon"/> : 
        <OIconOutline className="outlineIcon"/>
      }
    </CellStyle>
  );
};

export default GameCell;
