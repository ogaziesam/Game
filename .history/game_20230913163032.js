const prompt = require("prompt-sync")();

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * choices.length);
    console.log("Computer picked" + " " + choices[choice]);
    return choices[choice];
}

function userChoice(){
    let userInput = prompt(
        "Enter your choice: "
        ).toLowerCase();

        if (userInput == "rock") {
            console.log("You Picked Rock");
            return "rock";
        }else if (userInput == "paper") {
            console.log("You Picked Paper");
            return "paper"
        }else if (userInput == "scissors") {
            console.log("You Picked Scissors");
            return "scissors"
        } else {
            console.log("Invalid Input");
        }            
    }

    function game() {
        let playerSelection = userChoice();
        let computerSelection = getComputerChoice();

        if (playerSelection == computerSelection) {
            console.log("Its a Tie try Again");
        } else if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                console.log("You Win");
                return "win"
            } else if (computerSelection === "paper") {
                console.log("You Lose");
                return "lose"
            } else if (computerSelection === "rock") {
                console.log("Its a Tie");
                return "tie"
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                console.log("You Win");
                return "win"
            } else if (computerSelection === "scissors") {
                console.log("You Lose");
                return "lose"
            } else if (computerSelection === "paper") {
                console.log("Its a Tie");
                return "tie"
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                console.log("You Win");
                return "win"
            } else if (computerSelection === "rock") {
                console.log("You Lose");
                return "lose"
            } else if (computerSelection === "scissors") {
                console.log("Its a Tie");
                return "tie"
            }
        } else {
            console.log("Invalid Input");
        }
    }
    
    function play() {
        let round = 0;
        let userScore = 0;
        let compScore = 0;

        for (let i = 1; i <= 5; i++) {
            let games = game();
            if (games ==="win") {
                userScore++;
                round++;
                console.log(
                    `Round: ${round}, userScore = ${userScore} : ${compScore} compScore`
                );
            } else {
                round++;
                console.log(
                    `Round: ${round}, userScore = ${userScore} : ${compScore} compScore`
                );
            }
        }
    }
    play();