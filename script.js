let options = ["rock", "paper", "scissors"];
let computerPoints = 0; 
let userPoints = 0;

const container = document.querySelector('.game-info');
let score = document.createElement('h1');
score.textContent = "";
let roundInfo = document.createElement('p');
roundInfo.textContent = "";
container.appendChild(score);
container.appendChild(roundInfo);


function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(options[randomNumber]);
    return options[randomNumber];
}

function playRound(computerSelection, userSelection){
    switch (computerSelection){
        case "rock":
            if (userSelection == "paper"){
                roundInfo.textContent = "You win this round!";
                userPoints +=1;
            } else if(userSelection == "scissors"){
                roundInfo.textContent = "Computer wins this round!";
                computerPoints +=1;
            } else if(userSelection == "rock"){ 
                roundInfo.textContent = "It is a tie this round!";
            } else if(userSelection != "rock" || userSelection != "paper" || userSelection != "scissors"){
                computerPoints +=1; 
                roundInfo.textContent = "Invalid input! Computer wins this round!";
            }
            break;
        
        case "paper":
            if (userSelection == "scissors"){
                roundInfo.textContent = "You win this round!";
                userPoints +=1;
            } else if(userSelection == "rock"){
                roundInfo.textContent =  "Computer wins this round!";
                computerPoints +=1;
            } else if(userSelection == "paper"){ 
                roundInfo.textContent = "It is a tie this round!";
            } else if(userSelection != "rock" || userSelection != "paper" || userSelection != "scissors"){
                computerPoints +=1;
                roundInfo.textContent = "Invalid input! Computer wins this round!";
            }
            break;

        case "scissors":
            if (userSelection == "rock"){
                roundInfo.textContent = "You win this round!";
                userPoints +=1;
            } else if(userSelection == "paper"){
                roundInfo.textContent = "Computer wins this round!";
                computerPoints +=1;
            } else if(userSelection == "scissors"){ 
                roundInfo.textContent = "It is a tie this round!";
            } else if(userSelection != "rock" || userSelection != "paper" || userSelection != "scissors"){
                computerPoints +=1;
                roundInfo.textContent = "Invalid input! Computer wins this round!";
            }
            break;
    }
        
}

function gamePlay(){
    const choices = document.querySelectorAll('button');
    choices.forEach(choice => {
    choice.addEventListener('click',() => {
        choice.classList.add('active');
        setTimeout(() => {choice.classList.remove('active')}, 200);
        playRound(getComputerChoice(), choice.id);
        score.textContent = (`Computer: ${computerPoints} User: ${userPoints}`);
        if (computerPoints == 5 || userPoints == 5){
            if (computerPoints > userPoints){
                roundInfo.textContent = "COMPUTER WINS!";
            } else (roundInfo.textContent = "YOU WIN!");
            computerPoints = 0;
            userPoints = 0;
        }
        });
    });

}

gamePlay();
