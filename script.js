let choices = ["rock", "paper", "scissor"];
function getUserInput() {
  let input = prompt("Rock/Paper/Scissor?:");
  input = input.toLowerCase();
  if (input != "rock" && input != "scissor" && input != "paper") return null;
  return input;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
function getComputerInput() {
  let ch = getRandomInt(0, 3);
  return choices[ch];
}

function declareWinner(userInput, pcInput) {
  console.log("User Input : " + userInput);
  console.log("PC Input : " + pcInput);
  if (userInput == null) {
    alert("Dear User Please Enter a VALID Choice!");
    return;
  }
  if(userInput == pcInput)return "Draw";
  if (userInput == "rock") {
    if (pcInput == "scissor") return "User";
    else return "PC";
  } else if (userInput == "paper") {
    if (pcInput == "scissor") return "User";
    else return "PC";
  } else if (userInput == "scissor"){
    if (pcInput == "paper") return "User";
    else return "PC";
  }
}
function game() {
  let userWinCount = 0;
  let pcWinCount = 0;
  for (i = 0; i < 5; i++) {
    let userInput = getUserInput();
    let pcInput = getComputerInput();
    let winner = declareWinner(userInput,pcInput);
    if(winner=="User")userWinCount++;
    if(winner=="PC")pcWinCount++;
    console.log("Winner : "+winner);
  }
  if(userWinCount==pcWinCount)alert("The Game Ended in a DRAW!!");
  else if(userWinCount>pcWinCount)alert("The User Emerged Victorious!");
  else alert("The PC Emerged Victorious!")
}
game();
