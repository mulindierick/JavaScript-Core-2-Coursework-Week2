let randomNumber = Math.floor(Math.random() * 100 + 1);
let play = true;
let counter = 6;
let triesTaken = 0;
document.getElementById("Tries-output").innerHTML = `Number of tries: ${counter}`

function guessNumber() {
  if (play) {
      //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
   if (guess <= 0|| guess > 100 || guess === '' ) {
     document.getElementById("final-output").innerHTML = "Please enter a number between 1 and 100"
  }
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  else if (guess > randomNumber && guess !== 100){
      counter-=1;
      triesTaken+=1;
      document.getElementById("Tries-output").innerHTML = `Number of tries: ${counter}`
      document.getElementById("final-output").innerHTML = "Number is too high, try again"
    }
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  else if (guess > 0 && guess < randomNumber ) {
    counter-=1;
    triesTaken+=1;
    document.getElementById("Tries-output").innerHTML = `Number of tries: ${counter}`
    document.getElementById("final-output").innerHTML = "Number is too low, try again"
  }
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  else{
    counter-=1;
    triesTaken+=1;
    document.getElementById("Tries-output").innerHTML = `You passed with: ${triesTaken} tries`
    document.getElementById("final-output").innerHTML = `Guess is correct. You win! Its ${randomNumber}`
    play = false;
    
  }
    if (counter === 0) {
      document.getElementById("Tries-output").innerHTML = `You lose, the number was ${randomNumber}`
      document.getElementById("final-output").style.visibility = "hidden";
      play = false;
      // document.querySelector(".btnGuess").removeEventListener("click", guessNumber);
      // document.removeEventListener("keypress", keyBoardEvents);
    }
  }
}
// }


// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  play = true;
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  guess = document.querySelector(".inputs-Values").value = " ";
  document.getElementById("final-output").style.visibility = "visible";
  document.getElementById("final-output").innerHTML = "Guess a number between 1 and 100"
  //Reset tries, and triesTaken by the user
  counter = 6;
  triesTaken = 0;
  document.getElementById("Tries-output").innerHTML = `Number of tries: ${counter}`
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
document.querySelector(".btnNewGame").addEventListener("click", newGame);