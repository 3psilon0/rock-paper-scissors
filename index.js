let playGame;
const content = document.getElementById("content");
const playButton = document.getElementById("play-button");
const choices = {
    0: 'rock',
    1: 'paper',
    2: 'scissors'
};

function getComputerChoice(){
    return (Math.floor(Math.random() * 10)%3);
}


function playRound(playerChoice, computerChoice){
    let result = '';

    if(playerChoice == computerChoice){
        return 'draw';
    }
    switch(playerChoice){
        default:
            result = 'loss';
            break;
        case 0:
            result = computerChoice == 1 ? 'loss' : 'victory';
            break;
        case 1:
            result = computerChoice == 2 ? 'loss' : 'victory';
            break;
        case 2:
            result = computerChoice == 0 ? 'loss' : 'victory';
            break;
    }

    return result;
}

playButton.addEventListener("click", playGame = () => {
    playButton.innerText = "Quit";
    playButton.style.cssText = "background-color:red;color:black;border:2px solid black;margin:10px;font-weight:bold;";
    content.style.cssText = "border:5px solid navy;border-radius:5px";

    let quitGame;
    let nRounds = 5;
    let curRound = 1;
    let playerScore = 0;
    let computerScore = 0;
    let computerChoice, playerChoice, roundOutcome;

    playButton.addEventListener("click", quitGame = () => {
        const gameOverHeading = document.createElement("h1");
        gameOverHeading.innerText = "GAME OVER";
        gameOverHeading.style.cssText = "text-shadow:-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;color:red;"
        const gameOverScore = document.createElement("p");
        gameOverScore.innerText = `Final Score: ${playerScore}`;
        content.textContent = "";
        content.append(gameOverHeading, gameOverScore);
        content.style.cssText = "text-align:center;padding-bottom:10px;margin-top:-20px;"

        playButton.innerText = "Restart";
        playButton.style.cssText = "background-color:goldenrod;color:black"
        playButton.addEventListener("click", () => {
            document.location.reload();
        })
    });

    // Information box elements
    const infoBox = document.createElement("div");
    infoBox.setAttribute("id", "info-box");
    const choiceBox = document.createElement("div");
    choiceBox.setAttribute("id", "choice-box");
    const textBox = document.createElement("div");
    textBox.setAttribute("id", "text-box");

    const pscore = document.createElement("p");
    pscore.innerText = `Player Score: ${playerScore}`;
    pscore.classList.add("score-box");
    const round = document.createElement("p");
    round.innerText = `Round ${curRound}`;
    round.classList.add("score-box");
    round.style.cssText += "font-weight:bold;";
    const cscore = document.createElement("p");
    cscore.innerText = `Computer Score: ${computerScore}`;
    cscore.classList.add("score-box");

    infoBox.append(pscore, round, cscore);
    content.append(infoBox);

    // Choice box elements
    const rock = document.createElement("button");
    rock.setAttribute("id", "rock-button");
    rock.innerHTML = `<img id="rock" src="./assets/images/rock.png" alt="Image of rock">`;
    const paper = document.createElement("button");
    paper.setAttribute("id", "paper-button");
    paper.innerHTML = `<img id="paper" src="./assets/images/paper.png" alt="Image of paper">`;
    const scissors = document.createElement("button");
    scissors.setAttribute("id", "scissors-button");
    scissors.innerHTML = `<img id="scissors" src="./assets/images/scissors.png" alt="Image of scissors">`;

    choiceBox.append(rock, paper, scissors);

    //Text box elements
    textBox.innerText = "Choose your weapon!";

    content.append(infoBox, choiceBox, textBox);

    choiceBox.addEventListener("click", (e) => {
        if(e.target.id === "choice-box"){
            return;
        }

        curRound++;
        if(curRound > nRounds){
            const matchOver = document.createElement("h1");
            const winText = document.createElement("p");
            const lossText = document.createElement("p");
            const drawText = document.createElement("p");
            winText.innerText = "Congratulations! You have won the match!";
            winText.style.cssText = "color:green;font-style:italic";
            lossText.innerText = "What a shame. You have lost the match."
            lossText.style.cssText = "color:red;font-style:italic";
            drawText.innerText = "It's a tie! Nobody has won the match"
            drawText.style.cssText = "color:yellow;font-style:italic";
            matchOver.innerText = "The match is over!";
            matchOver.style.cssText = "font-size:24px;font-weight:bold;text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;";
            choiceBox.textContent = "";
            choiceBox.style.cssText = "display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:black";
            choiceBox.appendChild(matchOver);

            if(playerScore > computerScore){
                choiceBox.appendChild(winText);
            }
            else if(playerScore < computerScore){
                choiceBox.appendChild(lossText);
            }
            else{
                choiceBox.appendChild(drawText);
            }

            playButton.removeEventListener("click", quitGame);
            playButton.removeEventListener("click", playGame);
            playButton.style.backgroundColor = "goldenrod";
            playButton.innerText = "Restart";
            playButton.addEventListener("click", () => {
                document.location.reload();
            });
            return;
        }
        round.innerText = `Round ${curRound}`;

        computerChoice = getComputerChoice();

        switch(e.target.id){
            case 'rock-button':
            case 'rock':
                playerChoice = 0
                break;
            case 'paper':
            case 'paper-button':
                playerChoice = 1;
                break;
            case 'scissors':
            case 'scissors-button':
                playerChoice = 2;
                break;
        }

        textBox.innerText = `You chose ${choices[playerChoice]}\nComputer chose ${choices[computerChoice]}\n`;

        roundOutcome = playRound(playerChoice, computerChoice);

        switch(roundOutcome){
            case 'draw':
                textBox.innerText += "It's a draw, nobody wins.";
                break;
            case 'victory':
                textBox.innerText += "You win! You get a point";
                playerScore++;
                break;
            case 'loss':
                textBox.innerText += "You lose! Computer gets a point";
                computerScore++;
                break;
        }
        pscore.innerText = `Player Score: ${playerScore}`;
        cscore.innerText = `Computer Score: ${computerScore}`;
    })

})
