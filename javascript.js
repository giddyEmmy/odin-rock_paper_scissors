function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const hChoice = prompt("What will you choose?");

    if (hChoice === null) {
        return null;
    }
    return hChoice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You win! :D");
            humanScore++;
        } else {
            console.log("You lose :/");
            computerScore++;
        }
    }

    for (let round = 1; round <= 5; round++) {
        console.log("--- Round " + round + " ---");

        const humanSelection = getHumanChoice();

        if (humanSelection === null) {
            console.log("No game, then.");
            return;
        }

        if (
            humanSelection !== "rock" &&
            humanSelection !== "paper" &&
            humanSelection !== "scissors"
        ) {
            console.log("Rock, paper OR scissors, please.");

            round--;
            continue;
        }

        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log(
            "Score: You " +
            humanScore +
            " - " +
            computerScore +
            " Computer"
        )
    }

    console.log("--- Final result ---");

    if (humanScore > computerScore) {
        console.log("You won! Congrats <3");
    } else if (computerScore > humanScore) {
        console.log("You let the computer win? Damn");
    } else {
        console.log("Finally... tied");
    }
}

playGame();