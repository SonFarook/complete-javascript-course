"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".score").textContent = 99;
// document.querySelector(".number").textContent = 13;

// document.querySelector(".guess").value = 77;
// console.log(document.querySelector(".guess").value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const updateScore = function () {
  if (score > 1) {
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    score = 0;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "You lost the game!";
  }
};

const updateHighscore = function () {
  if (score > highScore) {
    highScore = score;
    document.querySelector(".highscore").textContent = highScore;
  }
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b437";
    document.querySelector(".number").style.width = "30rem";

    updateHighscore();

    //When guess is too high
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high!";
    updateScore();

    //When guess is too low
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low!";
    updateScore();
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".guess").value = "";

  document.querySelector(".number").textContent = "?";

  score = 20;
  document.querySelector(".score").textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
