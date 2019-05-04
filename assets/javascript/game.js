var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessLeft = 9;
var guesses = 0;
var letterGuessed = [];


//var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var loseText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guesses-left-text");
var guessText = document.getElementById("guesses-text");

var computerChoice = letters[Math.floor(Math.random() * letters.length)];


var reset = function() {
    guessLeft = 9;
    letterGuessed = []; 
  }


document.onkeyup = function(event) { 
  var userGuess = event.key.toLowerCase();
  letterGuessed.push(userGuess)
  

  if (userGuess === computerChoice){
      wins++;
      reset();
  }
  
  else {
    guessLeft--;
  }

  if (guessLeft === 0) {
    losses++;
    reset();
  } 


//computerChoiceText.textContent = "com: " + computerChoice;
winsText.textContent = "Wins: " + wins;
loseText.textContent = "Losses: " + losses;
guessLeftText.textContent = "Guesses Left: " + guessLeft;
guessText.textContent = "Your Guesses so far: " + letterGuessed;

  }



