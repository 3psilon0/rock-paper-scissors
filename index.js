const playButton = document.getElementById("play-button");

function getPlayerChoice(){
    const choice = prompt("Enter: \n - Rock\n - Scissors\n - Paper.\n").toLowerCase();
    return (choice === 'rock' || choice === 'scissors' || choice === 'paper') ? choice : " ";
}

function getComputerChoice(){
    const choices = ['rock', 'scissors', 'paper'];
    // Index that is used to return random value from choices
    randomIndex = Math.floor(Math.random() * 10)%3;
    return choices[randomIndex];
}

playButton.addEventListener("click", () => {
    let numberOfRounds = Number(prompt("How many rounds do you want to play?"));
    let playerScore = 0;
    let computerScore = 0;

    while(numberOfRounds){
        const computerChoice = getComputerChoice();
        const playerChoice = getPlayerChoice();

        if(playerChoice === computerChoice){
            console.log("Draw! Nobody gets a point.");
            numberOfRounds--;
            continue;
        }
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                playerScore++;
                console.log(`
                    You win!\n
                    Computer chose ${computerChoice}
                    ${playerChoice} beats ${computerChoice}\n
                    Current Score is\n
                    Player Score: ${playerScore}
                    Computer Score: ${computerScore}`);
            }
            else{
                computerScore++;
                console.log(`
                    You lose!
                    Computer chose ${computerChoice}
                    ${computerChoice} beats ${playerChoice}
                    Current Score is
                    Player Score: ${playerScore}
                    Computer Score: ${computerScore}`);
            }
        }
        else if(playerChoice === "scissors"){
            if(computerChoice === "paper"){
                playerScore++;
                console.log(`
                    You win!\n
                    Computer chose ${computerChoice}
                    ${playerChoice} beats ${computerChoice}\n
                    Current Score is\n
                    Player Score: ${playerScore}
                    Computer Score: ${computerScore}`);
            }
            else{
                computerScore++;
                console.log(`
                    You lose!
                    Computer chose ${computerChoice}
                    ${computerChoice} beats ${playerChoice}
                    Current Score is
                    Player Score: ${playerScore}
                    Computer Score: ${computerScore}`);
            }
        }
        else if(playerChoice === "paper"){
            if(computerChoice === "rock"){
                playerScore++;
                console.log(`
                    You win!\n
                    Computer chose ${computerChoice}
                    ${playerChoice} beats ${computerChoice}\n
                    Current Score is\n
                    Player Score: ${playerScore}
                    Computer Score: ${computerScore}`);
            }
            else{
                computerScore++;
                console.log(`
                    You lose!
                    Computer chose ${computerChoice}
                    ${computerChoice} beats ${playerChoice}
                    Current Score is
                    Player Score: ${playerScore}
                    Computer Score: ${computerScore}`);
            }
        }
        else{
            alert("Please enter valid choice!");
            continue;
        }
        numberOfRounds--;
    }

    alert(playerScore > computerScore ? "Congrats! you win." : playerScore === computerScore ? "It is a draw! Nobody wins." : "You lose!");

})