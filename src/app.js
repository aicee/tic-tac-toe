var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");

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
