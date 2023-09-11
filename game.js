const prompt = require{"prompt-sync"}();

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * choices.length);
    console,log("Computer picked" + " " + choices[choice]);
    return choices[choice];
}