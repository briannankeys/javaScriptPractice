//create secret number//

let secretNumber = 4

//ask user for guess//

var guess = prompt ("What's the secret number?"); 


//check if guess correct//

//placing Number in front of guess changes the string "4" to a number 4

if (Number(guess) === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}

//otherwise, you got it wrong//

else if (Number(guess) < secretNumber) {
	alert("You guessed too low, try again!")
}

//dont need to rewrite the code on line 20 again because the only other option is for it to be too high//

else {
	alert("You guessed too high, try again!")
}


// *****// You can also change this : 

// var guess = Number(prompt) ("What's the secret number?"); 

// OR:

// var stringGuess = prompt("What's the secret number?");
// var guess = Number(stringGuess); 