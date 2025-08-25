console.log("Hey, let's play Tic Tac Toe!");

// Initialize board
var boardArray = [];
var input;
var counter;
var scores = { X: 0, O: 0 };
var playerNames = { X: 'Player 1', O: 'Player 2' };

function init() {
  input = "X";
  counter = 0;
  boardArray = [];
  for (var i = 0; i < 9; i++) {
    boardArray.push("");
    updateBox(i, "");
  }
  // Get player names from input fields if they exist
  const player1Input = document.getElementById('player1');
  const player2Input = document.getElementById('player2');
  
  if (player1Input && player1Input.value.trim() !== '') {
    playerNames.X = player1Input.value.trim() || 'Player 1';
  }
  if (player2Input && player2Input.value.trim() !== '') {
    playerNames.O = player2Input.value.trim() || 'Player 2';
  }
  
  updateStatus();
}

function updateStatus() {
  const statusElement = document.getElementById('gameStatus');
  if (!statusElement) return;
  
  const currentPlayer = input === 'X' ? playerNames.X : playerNames.O;
  statusElement.textContent = `${currentPlayer}'s turn (${input})`;
}

// Print board in browser
function updateBox(index, value) {
  var box = document.getElementById("box" + (index + 1));
  if (!box) return;
  box.innerHTML = value;
  if (value === "O") {
    box.classList.add("text-yellow-500");
  } else {
    box.classList.remove("text-yellow-500");
  }
}

function disableBox() {
  for (var i = 1; i < 10; i++) {
    document.getElementById("box" + i).setAttribute("disabled", "");
    document.getElementById("box" + i).classList.add("disabled:opacity-50");
    document.getElementById("box" + i).classList.remove("hover:bg-sky-300");
  }
}

function enableBox() {
  for (var i = 1; i < 10; i++) {
    document.getElementById("box" + i).removeAttribute("disabled");
    document.getElementById("box" + i).classList.remove("disabled:opacity-50");
    document.getElementById("box" + i).classList.add("hover:bg-sky-300");
    document.getElementById("box" + i).classList.remove("text-yellow-500");
  }
}

// Check if there's a winner
function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (boardArray[a] && 
        boardArray[a] === boardArray[b] && 
        boardArray[a] === boardArray[c]) {
      
      const winner = boardArray[a];
      scores[winner]++;
      document.getElementById(`score${winner === 'X' ? '1' : '2'}`).textContent = scores[winner];
      
      const winnerName = winner === 'X' ? playerNames.X : playerNames.O;

      // announce winner and update status
      winnerAnnouncer(true, winnerName);
      const statusElement = document.getElementById('gameStatus');
      if (statusElement) {
        statusElement.textContent = `${winnerName} wins!`;
      }

      disableBox();
      return true;
    }
  }
  return false;
}

function winnerAnnouncer(isVisible, winner = '') {
  const winAlert = document.getElementById("winAlert");
  if (!winAlert) return;

  if (isVisible) {
    winAlert.textContent = `${winner} wins! 🎉`;
    winAlert.classList.remove('invisible', 'opacity-0', 'scale-90');
    winAlert.classList.add('opacity-100', 'scale-100');

    // Auto-hide after 3 seconds
    setTimeout(() => {
      winnerAnnouncer(false);
    }, 3000);
  } else {
    winAlert.classList.remove('opacity-100', 'scale-100');
    winAlert.classList.add('opacity-0', 'scale-90');
    setTimeout(() => winAlert.classList.add('invisible'), 300);
  }
}

function drawAnnouncer(isVisible) {
  const drawAlert = document.getElementById("drawAlert");
  if (!drawAlert) return;

  if (isVisible) {
    drawAlert.classList.remove('invisible', 'opacity-0', 'scale-90');
    drawAlert.classList.add('opacity-100', 'scale-100');

    // Auto-hide after 3 seconds
    setTimeout(() => {
      drawAnnouncer(false);
    }, 3000);
  } else {
    drawAlert.classList.remove('opacity-100', 'scale-100');
    drawAlert.classList.add('opacity-0', 'scale-90');
    setTimeout(() => drawAlert.classList.add('invisible'), 300);
  }
}

function checkDraw(hasWinner) {
  if (!hasWinner && counter == 9) {
    drawAnnouncer(true);

    const statusElement = document.getElementById('gameStatus');
    if (statusElement) {
      statusElement.textContent = "It's a draw!";
    }

    disableBox();
  }
}

// Toggle X and O
function toggleInput() {
  if (input == "X") {
    input = "O";
  } else if (input == "O") {
    input = "X";
  }
}

// Put X or O on the board
function playTurn(boardIndex) {
  if (boardArray[boardIndex] === "") {
    boardArray[boardIndex] = input;
    updateBox(boardIndex, input);
    counter++;
    
    const hasWinner = checkWinner();
    if (!hasWinner) {
      checkDraw(hasWinner);
      toggleInput();
      updateStatus();
    }
  }
}

// Reset game
function resetBoard() {
  boardArray = [];
  init();
  enableBox();
  winnerAnnouncer(false);
  drawAnnouncer(false);
  updateStatus();
}

// Reset scores
function resetScores() {
  scores = { X: 0, O: 0 };
  document.getElementById('score1').textContent = '0';
  document.getElementById('score2').textContent = '0';
  resetBoard();
}

// Add event listeners for player name changes
document.addEventListener('DOMContentLoaded', function() {
  const player1Input = document.getElementById('player1');
  const player2Input = document.getElementById('player2');
  
  if (player1Input) {
    player1Input.addEventListener('change', function() {
      if (this.value.trim() !== '') {
        playerNames.X = this.value.trim();
      }
      updateStatus();
    });
  }
  
  if (player2Input) {
    player2Input.addEventListener('change', function() {
      if (this.value.trim() !== '') {
        playerNames.O = this.value.trim();
      }
      updateStatus();
    });
  }

  updateStatus();
});

init();

// Print board in console
function printBoard() {
  console.log(
    `
    [ ${spacer(boardArray[0])} ] [ ${spacer(boardArray[1])} ] [ ${spacer(
      boardArray[2]
    )} ]
    [ ${spacer(boardArray[3])} ] [ ${spacer(boardArray[4])} ] [ ${spacer(
      boardArray[5]
    )} ]
    [ ${spacer(boardArray[6])} ] [ ${spacer(boardArray[7])} ] [ ${spacer(
      boardArray[8]
    )} ]
    `
  );
}
function spacer(s) {
  if (s == "") {
    return "_";
  }
  return s;
}
