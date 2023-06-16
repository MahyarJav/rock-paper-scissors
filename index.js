const choices = ["rock", "paper", "scissors"]
let roundWinner = "";
const score = {
    player: 0,
    computer: 0,
    draw: 0
}


const mainSect = document.getElementById("main");
const buttonDiv = document.createElement("div");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorButton = document.createElement("button");
const scoreDiv = document.createElement("div")
const scoreList = document.createElement("ul");
const playerScore = document.createElement("li")
const computerScore = document.createElement("li")
const drawScore = document.createElement("li")
const finalScore = document.createElement("h4")
rockButton.classList.add("rock");
rockButton.setAttribute("id", "rock-button")
rockButton.textContent = "Rock!"
paperButton.classList.add("paper");
paperButton.setAttribute("id", "paper-button")
paperButton.textContent = "Paper!"
scissorButton.classList.add("scissors");
scissorButton.setAttribute("id", "scissors-button")
scissorButton.textContent = "Scissors!"
scoreDiv.classList.add("scores")
scoreDiv.setAttribute("style", "border: black 1px solid;width: 350px; margin-top: 10px;")
scoreList.setAttribute("style", "list-style:none;")
finalScore.setAttribute("style", "text-align: center;")
playerScore.textContent = `Player: ${score.player}`
computerScore.textContent = `Computer: ${score.computer}`
drawScore.textContent = `Draw: ${score["draw"]} `
mainSect.appendChild(buttonDiv);
buttonDiv.appendChild(rockButton);
buttonDiv.appendChild(paperButton);
buttonDiv.appendChild(scissorButton);
mainSect.appendChild(scoreDiv);
scoreDiv.appendChild(scoreList);
scoreList.appendChild(playerScore)
scoreList.appendChild(computerScore)
scoreList.appendChild(drawScore)
scoreDiv.appendChild(finalScore)

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        score.draw++
    } else if (playerSelection == "rock") {
        computerSelection == "paper"
            ? score.computer++
            : score.player++
    } else if (playerSelection == "paper") {
        computerSelection == "scissors"
            ? score.computer++
            : score.player++
    } else if (playerSelection == "scissors") {
        computerSelection == "rock"
            ? score.computer++
            : score.player++
    }
    playerScore.textContent = `Player: ${score.player}`
    computerScore.textContent = `Computer: ${score.computer}`
    drawScore.textContent = `Draw: ${score["draw"]} `

}


function playerSelection(button) {
    if (score.player !== 5 && score.computer !== 5) {
        playRound(button, getComputerChoice())
    } else {
        finalScore.textContent =
            score.player > score.computer ?
                `Player wins ${score.player} to ${score.computer}` :
                `Computer wins ${score.computer} to ${score.player}`
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection(button.classList)
    })
})