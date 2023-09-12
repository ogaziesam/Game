const prompt = require{"prompt-sync"}();

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * choices.length);
    console,log("Computer picked" + " " + choices[choice]);
    return choices[choice];
}

function userChoice(){
    let userInput = prompt(
        "Enter your choice: "
        ).toLowerCase();

        if (userInput == "Rock") {
            console.log("You Picked Rock");
            return "Rock";
        }else if (userInput == "Paper") {
            console.log("You Picked Paper");
            return "Paper"
        }else if (userInput == "Scissors") {
            console.log("You Picked Scissors");
            return "Scissors"
        } else {
            console.log("Invalid Input");
        }
    
}

