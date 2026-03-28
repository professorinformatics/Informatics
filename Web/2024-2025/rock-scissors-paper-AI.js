let playerHistory = [];

function computer() {
  console.log(playerHistory);
  if (playerHistory.length < 3) {
    return Math.floor(Math.random() * 3);
  }
  let rock = countPlayerChoice(0);
  let scissors = countPlayerChoice(1);
  let paper = countPlayerChoice(2);
  
  if (rock > scissors && rock > paper) {
    // choose paper because player plays rock most often
    return 2;
  } else if (scissors > rock && scissors > paper) {
    // choose rock because player plays scissors most often
    return 0;
  } else if (paper > rock && paper > scissors) {
    // choose scissors because player plays paper most often
    return 1;
  } else {
    return Math.floor(Math.random() * 3);
  }
}

function countPlayerChoice(choice) {
  let count = 0;
  for (var i = 0; i < playerHistory.length; i++) {
    if (playerHistory[i] == choice) {
      count++;
    }
  }
  return count;
}


  playerHistory.push(choice);
  if (playerHistory.length > 5) {
    playerHistory.shift();  
  }
  
  