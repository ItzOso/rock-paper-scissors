const winner = document.querySelector("#winner");
const playerChose = document.querySelector("#player-chose");
const aiChose = document.querySelector("#ai-chose");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.onclick = () => {
  aiChooseAnswer("rock");
};

paper.onclick = () => {
  aiChooseAnswer("paper");
};

scissors.onclick = () => {
  aiChooseAnswer("scissors");
};

function chooseWinner(chosen, choice) {
  playerChose.innerHTML = chosen;
  aiChose.innerHTML = choice;
  let combinations = {
    c1: ["rock", "paper", false],
    c2: ["paper", "rock", true],
    c3: ["paper", "scissors", false],
    c4: ["scissors", "paper", true],
    c5: ["rock", "scissors", true],
    c6: ["scissors", "rock", false],
    c7: ["paper", "paper", null],
    c8: ["rock", "rock", null],
    c9: ["scissors", "scissors", null],
  };
  for (i = 1; i <= 9; i++) {
    if (
      combinations[`c${i}`][0] == chosen &&
      combinations[`c${i}`][1] == choice
    ) {
      if (combinations[`c${i}`][2] == true) {
        winner.innerHTML = "You";
        break;
      } else if (combinations[`c${i}`][2] == false) {
        winner.innerHTML = "Computer";
        break;
      } else if (combinations[`c${i}`][2] == null) {
        winner.innerHTML = "Draw";
        break;
      } else {
        winner.innerHTML = "Error";
        break;
      }
    }
  }
}

function aiChooseAnswer(chosen) {
  let randomNum = Math.floor(Math.random() * 3);
  let options = ["rock", "paper", "scissors"];
  let choice = options[randomNum];
  chooseWinner(chosen, choice);
}
