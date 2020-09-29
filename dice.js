function rollDice1(){
  var dice1 = Math.floor((Math.random() * 6) + 1); // Random 1-6
  var diceImage1 = "images/dice" + dice1 + ".png"; //Dice image source as variable

  document.querySelector(".dice .img1").setAttribute("src", diceImage1); //  Set source as dice image
  return dice1; //Returns the value of the dice roll
}
function rollDice2(){
  var dice2 = Math.floor((Math.random() * 6) + 1);
  var diceImage2 = "images/dice" + dice2 + ".png";

  document.querySelector(".dice .img2").setAttribute("src", diceImage2);
  return dice2;
}

function checkWinner(){
  //Variables for Dice numbers
  var player1 = rollDice1();
  var player2 = rollDice2();

  //If statement to determine winner
  if(player1 > player2){
    document.querySelector("h1").textContent = "Player 1 Wins!"
  }else if(player1 < player2){
    document.querySelector("h1").textContent = "Player 2 Wins!"
  } else {
    document.querySelector("h1").textContent = "It's a Tie!"
  }
}

// Adds listener to button
document.querySelector("button").addEventListener('click', checkWinner);
