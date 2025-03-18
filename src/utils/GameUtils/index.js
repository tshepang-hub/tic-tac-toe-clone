const checkForSequence = (option1, option2, option3) => {
    return option1 === option2 && option2 === option3 && option1 !== null;
  };
  
  export const checkForWinner = (board) => {
    // Check diagonals
    if (checkForSequence(board[0], board[4], board[8])) {
      console.log("Diagonal winner!");
      return true;
    }
  
    if (checkForSequence(board[2], board[4], board[6])) {
      console.log("Diagonal winner!");
      return true;
    }
  
    // Check columns
    for (let i = 0; i < 3; i += 1) {
      if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
        console.log("COLUMN winner!");
        return true;
      }
    }
  
    // Check rows
    for (let i = 0; i < 9; i += 3) {
      if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
        console.log("ROW winner!");
        return true;
      }
    }
  
    return false; // No winner found
  };
  