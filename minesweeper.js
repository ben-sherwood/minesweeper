document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener('click', checkForWin)
document.addEventListener('contextmenu', checkForWin)

// Define your `board` object here!
var board = {
  cells: [
    { row: 0, col: 0, isMine: false, hidden: true, },
    { row: 0, col: 1, isMine: false, hidden: true, },
    { row: 0, col: 2, isMine: false, hidden: true, },
    { row: 0, col: 3, isMine: false, hidden: true, },
    { row: 0, col: 4, isMine: false, hidden: true, },
    { row: 1, col: 0, isMine: false, hidden: true, },
    { row: 1, col: 1, isMine: false, hidden: true, },
    { row: 1, col: 2, isMine: false, hidden: true, },
    { row: 1, col: 3, isMine: false, hidden: true, },
    { row: 1, col: 4, isMine: false, hidden: true, },
    { row: 2, col: 0, isMine: false, hidden: true, },
    { row: 2, col: 1, isMine: false, hidden: true, },
    { row: 2, col: 2, isMine: false, hidden: true, },
    { row: 2, col: 3, isMine: false, hidden: true, },
    { row: 2, col: 4, isMine: false, hidden: true, },
    { row: 3, col: 0, isMine: false, hidden: true, },
    { row: 3, col: 1, isMine: false, hidden: true, },
    { row: 3, col: 2, isMine: false, hidden: true, },
    { row: 3, col: 3, isMine: false, hidden: true, },
    { row: 3, col: 4, isMine: false, hidden: true, },
    { row: 4, col: 0, isMine: false, hidden: true, },
    { row: 4, col: 1, isMine: false, hidden: true, },
    { row: 4, col: 2, isMine: false, hidden: true, },
    { row: 4, col: 3, isMine: false, hidden: true, },
    { row: 4, col: 4, isMine: false, hidden: true, },],
};


function startGame() {
  // Don't remove this function call: it makes the game work!
  setBoard();
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  lib.initBoard()
}

function setBoard() {
  var mines = 5;
  var mineCount = 0;
  var randIndex = getRandomInt(0, board.cells.length);
  while (mineCount < mines) {
    if (board.cells[randIndex].isMine != true) {
      board.cells[randIndex].isMine = true;
      mineCount++;
    }
    randIndex = getRandomInt(0, board.cells.length);
  }
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  var winCount = 0;
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine && board.cells[i].isMarked || board.cells[i].isMine == false && board.cells[i].hidden == false) {
      winCount++;
    }
    if (winCount == board.cells.length) {
      lib.displayMessage('You win!');
    }
    // You can use this function call to declare a winner (once you've
    // detected that they've won, that is!)
    //   lib.displayMessage('You win!')
  }

  console.log(winCount);
}


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine) {
      count++;
    }
  }
  return count;
}

