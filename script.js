let choices = ["rock", "paper", "scissor"];
function getUserInput(e) {
  // rockInput = document.querySelector("#rock");
  // rockInput.addEventListener('click',()=>console.log("Rock"));
  // paperInput = document.querySelector("#paper");
  // paperInput.addEventListener('click',()=>console.log("Paper"));
  // scissorInput = document.querySelector("#scissor");
  // scissorInput.addEventListener('click',()=>console.log("Scissor"));
  game(e.target.id)
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
function game(userInput) {
  let pcInput = getComputerInput();
  let winner = declareWinner(userInput,pcInput);
  if(winner=="User")userWinCount++;
  if(winner=="PC")pcWinCount++;
  console.log("Winner : "+winner);
  if(userWinCount==5)alert("The User Won");
}
// game();
//User Input
let userWinCount = 0;
let pcWinCount = 0;
btn = document.querySelectorAll("button");
btn.forEach((button)=>button.addEventListener('click',getUserInput));

