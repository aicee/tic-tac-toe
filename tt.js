console.log("Hey, let's play Tic Tac Toe!");

//initialize board
var board = [];
var input;

var box1 = document.getElementById("box1"); // => `box${i}`
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");

function init() {
  input = "X";
  for (var i = 1; i < 10; i++) {
    board.push("");
  }
}

init();

//print board in browser
function displayXO() {
  box1.innerHTML = board[0];
  box2.innerHTML = board[1];
  box3.innerHTML = board[2];
  box4.innerHTML = board[3];
  box5.innerHTML = board[4];
  box6.innerHTML = board[5];
  box7.innerHTML = board[6];
  box8.innerHTML = board[7];
  box9.innerHTML = board[8];
}

//check if there's a winner
function checkWinner() {
  if (
    (board[0] == "X" && board[1] == "X" && board[2] == "X") ||
    (board[3] == "X" && board[4] == "X" && board[5] == "X") ||
    (board[6] == "X" && board[7] == "X" && board[8] == "X") ||
    (board[0] == "X" && board[3] == "X" && board[6] == "X") ||
    (board[1] == "X" && board[4] == "X" && board[7] == "X") ||
    (board[0] == "X" && board[4] == "X" && board[8] == "X") ||
    (board[2] == "X" && board[4] == "X" && board[6] == "X") ||
    (board[0] == "O" && board[1] == "O" && board[2] == "O") ||
    (board[3] == "O" && board[4] == "O" && board[5] == "O") ||
    (board[6] == "O" && board[7] == "O" && board[8] == "O") ||
    (board[0] == "O" && board[3] == "O" && board[6] == "O") ||
    (board[1] == "O" && board[4] == "O" && board[7] == "O") ||
    (board[0] == "O" && board[4] == "O" && board[8] == "O") ||
    (board[2] == "O" && board[4] == "O" && board[6] == "O")
  ) {
    alert("YOU WON, " + input + "!");
    console.log("YOU WIN, " + input + "!");
  }
}

//toggle X and O
function toggleInput() {
  if (input == "X") {
    input = "O";
  } else if (input == "O") {
    input = "X";
  }
}

// function toggleColor(i) {
//   if (input == "X") {
//     //document.getElementById("box" + i).classList.remove("text-teal-400");
//     document.getElementById("box" + i).classList.add("text-yellow-500");
//   }
// }

function updateBoard(index, value) {
  var box = document.getElementById("box" + (index + 1));
  if (value == "X") {
    box.classList.add("text-yellow-500");
  }

  switch (index) {
    case 0:
      box.innerHTML = value;
      console.info(`${index} ==> ${value}`);
      break;

    case 1:
      box.innerHTML = value;
      console.info(`${index} ==> ${value}`);
      break;

    case 2:
      box.innerHTML = value;
      console.info(`${index} ==> ${value}`);
      break;

    case 3:
      box.innerHTML = value;
      console.info(`${index} ==> ${value}`);
      break;

    case 4:
      box.innerHTML = value;
      console.info(`${index} ==> ${value}`);
      break;

    case 5:
      box.innerHTML = value;
      console.info(`${index} ==> ${value}`);
      break;

    case 6:
      box.innerHTML = value;
      console.info(`${index} ==> ${value}`);
      break;

    case 7:
      box.innerHTML = value;
      console.info(`${index} ==> ${value}`);
      break;

    case 8:
      box.innerHTML = value;
      console.info(`${index} ==> ${value}`);
      break;

    default:
      console.error("Out of bounds!");
      break;
  }
}

//put X or O on the board
function playTurn(boardIndex) {
  if (board[boardIndex] == "") {
    board[boardIndex] = input;
    // toggleColor(boardIndex);
    // displayXO();
    updateBoard(boardIndex, input);
    printBoard();
    checkWinner();
    toggleInput();
  } else {
    console.log("Invalid move");
  }
}

//RESET game
function resetBoard() {
  board = [];
  init();
  displayXO();
  printBoard();
}

//print board in console
function printBoard() {
  console.log(
    `
    [ ${spacer(board[0])} ] [ ${spacer(board[1])} ] [ ${spacer(board[2])} ]
    [ ${spacer(board[3])} ] [ ${spacer(board[4])} ] [ ${spacer(board[5])} ]
    [ ${spacer(board[6])} ] [ ${spacer(board[7])} ] [ ${spacer(board[8])} ]
    `
  );
}
function spacer(s) {
  if (s == "") {
    return "_";
  }
  return s;
}
