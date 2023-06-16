const choices = ["rock", "paper", "scissors"]
let roundWinner = "";
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}
function playRound(playerSelection, computerSelection) {
    let loweredPlayer = playerSelection.toLowerCase();
    const youLose = `You lose, ${computerSelection} beats ${loweredPlayer}`
    const youWin = `You win, ${loweredPlayer} beats ${computerSelection}!`
    const youDraw = `Draw, you both picked ${loweredPlayer}`
    if (loweredPlayer == "rock") {
        if (computerSelection == "paper") {
            roundWinner = "computer";
            return youLose
        } else if (computerSelection == "scissors") {
            roundWinner = "player";
            return youWin
        } else {
            roundWinner = "draw"
            return youDraw
        }
    }
    if (loweredPlayer == "paper") {
        if (computerSelection == "scissors") {
            roundWinner = "computer"
            return youLose
        } if (computerSelection == "rock") {
            roundWinnder = "player"
            return youWin
        } else {
            roundWinner = "draw"
            return youDraw
        }
    } if (loweredPlayer == "scissors") {
        if (computerSelection == "rock") {
            roundWinner = "computer"
            return youLose
        } if (computerSelection == "paper") {
            roundWinner = "player"
            return youWin
        } else {
            roundWinner = "draw"
            return youDraw
        }
    } else {
        roundWinner = "computer"
        return `You lose as ${playerSelection} was not one of the 3 options.`
    }
}
function game() {
    let rounds = 0;
    let playerPrompt;
    let score = {
        player: 0,
        computer: 0,
        draw: 0
    }
    while (rounds < 5) {
        playerPrompt = window.prompt("Rock, paper or scissors, other response = automatic loss")
        console.log(playRound(playerPrompt, getComputerChoice()))
        score[roundWinner]++
        rounds++
    }
    console.log(score)
    console.log(score.computer <= score.player ? "You win!" : "Computer wins.")
}