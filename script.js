let options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

function getUserChoice(){
    let userInput = prompt("Please choose between rock, paper and scissors.");
    userInput = userInput.toLowerCase();
    if (!(userInput == "rock" || userInput == "paper" || userInput == "scissors")){
        alert("Wrong input");
    } else return userInput;    
} 

function playRound(computerSelection, userSelection){
    let computerPoints = 0; 
    let userPoints = 0;
    let summaryPoints = [computerPoints, userPoints];
    
    switch (computerSelection){
        case "rock":
            if (userSelection == "paper"){
                alert("User wins this round!");
                userPoints +=1;
            } else if(userSelection == "scissors"){
                alert("Computer wins this round!");
                computerPoints +=1;
            } else alert("It is a tie this round!");
            break;
        
        case "paper":
            if (userSelection == "scissors"){
                alert("User wins this round!");
                userPoints +=1;
            } else if(userSelection == "rock"){
                alert("Computer wins this round!");
                computerPoints +=1;
            } else alert("It is a tie this round!");
            break;

        case "scissors":
            if (userSelection == "rock"){
                alert("User wins this round!");
                userPoints +=1;
            } else if(userSelection == "paper"){
                alert("Computer wins this round!");
                computerPoints +=1;
            } else alert("It is a tie this round!");
            break;
    }
    return summaryPoints;
    
}

function gamePlay(){
    for (let i = 0; i <5; i++){
        playRound(getComputerChoice(), getUserChoice());
    }
    if (playRound[0] > playRound[1]){
        alert(`Computer wins! Score: ${playRound[0]} : ${playRound[1]}`);}
    else {alert(`You win! Score: ${playRound[1]} : ${playRound[0]}`);}
    
    
}

gamePlay();