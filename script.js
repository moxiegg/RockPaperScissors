let choices = ["Rock","Paper","Scissor"];
function getUserInput(){
    let input = prompt("Rock/Paper/Scissor?:");
    if(input != "Rock" && input != "Scissor" && input != "Paper")return null;
    return input;
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
function getComputerInput(){
    let ch = getRandomInt(0,3);
    return choices[ch];
}
function declareWinner(){
    let userInput = getUserInput();
    let pcInput = getComputerInput();
    console.log("User Input : "+userInput);
    console.log("PC Input : "+pcInput);
    if(userInput==null){
        alert("Dear User Please Enter a VALID Choice!");
        return;
    }
    if(userInput == "Rock"){
        if(pcInput == "Paper")alert("PC Wins");
        else alert("User Wins");
    }else if(userInput == "Paper"){
        if(pcInput == "Scissor")alert("PC Wins");
        else alert("User Wins");
    }else{
        if(pcInput=="Rock")alert("PC Wins");
        else alert("User Wins");
    }

}
declareWinner();