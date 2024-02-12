let userInput = document.getElementById("userInput");
let x = document.getElementsByClassName("checknumber")[0]; // Assuming there's only one element with this class
let resultElement = document.getElementById("result");
let restart=document.getElementsByClassName("restartgame");
let number = Math.floor(Math.random() * 20) + 1;

x.addEventListener("click", () => {
    let guess = parseInt(userInput.value); // Parse the input value to an integer

    if (guess >= 1 && guess <= 20) {
        if (guess === number) {
            resultElement.innerText = "WOW, you guessed the number right";
            restart.style.display="inline";
            
        } else if (Math.abs(guess - number) <= 5) {
            resultElement.innerText = "You are very close to the number. Make another guess.";
        } else if (Math.abs(guess - number) <= 10) {
            resultElement.innerText = "Make your guess closer. You are far away from the guessed number.";
        }
    } else {
        resultElement.innerText = "Please enter a number between 1 to 20";
    }
});
