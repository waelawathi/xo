let turn = "o";
let title = document.querySelector("span");
let restart = document.getElementsByClassName("restart");
let theWinner = document.querySelector(".thewinner");
let winnerDiv = document.querySelector(".winner");
console.log(theWinner);
function game(id) {
  let element = document.getElementById(id);
  if (turn === "o" && element.innerHTML === "") {
    element.innerHTML = "<div class='o'>O</div>";
    turn = "x";
    title.innerHTML = "<span class='x'>X</span>";
  } else if (turn === "x" && element.innerHTML === "") {
    element.innerHTML = "<div class='x'>x</div>";
    turn = "o";
    title.innerHTML = "<span class='o'>O</span>";
  }
  tosetwinner();
}

// winner
function winner(case1, case2, case3) {
  document.getElementById("item" + case1).style.backgroundColor = "white";
  document.getElementById("item" + case2).style.backgroundColor = "white";
  document.getElementById("item" + case3).style.backgroundColor = "white";
  winnerDiv.style.display = "block";
  setTimeout(function () {
    winnerDiv.classList.add("fade");
  }, 800);

  theWinner.innerHTML = `<span>${square[case1] + "winner"}`;
}

// Prospect
let square = [];
function tosetwinner() {
  for (let i = 1; i < 10; i++) {
    square[i] = document.getElementById("item" + i).innerHTML;
  }
  if (square[1] == square[2] && square[2] == square[3] && square[3] != "") {
    winner(1, 2, 3);
  } else if (
    square[4] == square[5] &&
    square[5] == square[6] &&
    square[6] != ""
  ) {
    winner(4, 5, 6);
  } else if (
    square[7] == square[8] &&
    square[8] == square[9] &&
    square[9] != ""
  ) {
    winner(7, 8, 9);
  } else if (
    square[1] == square[4] &&
    square[4] == square[7] &&
    square[7] != ""
  ) {
    winner(1, 4, 7);
  } else if (
    square[2] == square[5] &&
    square[5] == square[8] &&
    square[8] != ""
  ) {
    winner(2, 5, 8);
  } else if (
    square[3] == square[6] &&
    square[6] == square[9] &&
    square[9] != ""
  ) {
    winner(3, 6, 9);
  } else if (
    square[1] == square[5] &&
    square[5] == square[9] &&
    square[9] != ""
  ) {
    winner(1, 5, 9);
  } else if (
    square[3] == square[5] &&
    square[5] == square[7] &&
    square[7] != ""
  ) {
    winner(3, 5, 7);
  }
}

function Restart() {
  location.reload();
}

function quit() {
  winnerDiv.style.display = "none";
}