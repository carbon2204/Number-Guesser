let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*10);
}

function compareGuesses(user, comp, target){
  res1 = Math.abs(target - user);
  res2 = Math.abs(target - comp);
  if(res1<=res2){
    return true;
  } else {
    return false;
  }
}

function updateScore(winner){
  if(winner==='human'){
    humanScore++;
  } else {
    computerScore++;
  }
}

function advanceRound(){
  currentRoundNumber++;
}

