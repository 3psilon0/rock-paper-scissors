const content = document.getElementById("content");
const playButtonWrapper = document.getElementsByClassName("play-button-wrapper");
const playButton = document.getElementById("play-button");


// Returns 0, 1 or 2
// 0 - Rock, 1 - Paper, 2 - Scissors.
function getComputerChoice(){
    return (Math.floor(Math.random() * 10)%3);
}


function playRound(playerChoice, computerChoice){
    let result = '';

    if(playerChoice == computerChoice){
        return 'draw';
    }
    switch(playerChoice){
        case 0:
            result = computerChoice == 1 ? 'loss' : 'victory';
            break;
        case 1:
            result = computerChoice == 2 ? 'loss' : 'victory';
            break;
        case 2:
            result = computerChoice == 0 ? 'loss' : 'victory';
            break;
        default:
            throw new Error('Invalid option!');
    }

    return result;
}

playButton.addEventListener("click", () => {
    playButton.innerText = "Quit";
    playButton.style.cssText = "background-color:red;color:black;border:2px solid black";

    let nRounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let computerChoice, playerChoice;

    playButton.addEventListener("click", () => {
        content.textContent = `Your score is: ${playerScore}`;
        playButton.innerText = "Restart";
        playButton.addEventListener("click", () => {
            document.location.reload();
        })
    });



    const scoreBox = document.createElement("div");
    scoreBox.style.cssText = "display:flex;justify-content:space-between;"
    const choiceBox = document.createElement("div");
    choiceBox.style.cssText = "display:flex;justify-content:space-between";
    const textBox = document.createElement("div");





    const rock = document.createElement("button");
    rock.innerHTML = `<img src="./assets/images/rock.png" alt="Image of rock">`;
    const paper = document.createElement("button");
    paper.innerHTML = `<img src="./assets/images/paper.png" alt="Image of paper">`;
    const scissors = document.createElement("button");
    scissors.innerHTML = `<img src="./assets/images/scissors.png" alt="Image of scissors">`;
    choiceBox.append(
        rock,
        paper,
        scissors
    );

    content.append(scoreBox, choiceBox, textBox);

})