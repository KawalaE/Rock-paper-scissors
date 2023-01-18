let options = ["rock", "paper", "scissors"];
let computerPoints = 0; 
let userPoints = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(options[randomNumber]);
    return options[randomNumber];
}

function getUserChoice(){
    let userInput = prompt("Please choose between rock, paper and scissors.");
    userInput = userInput.toLowerCase();
    return userInput;    
} 

function playRound(computerSelection, userSelection){
    
    switch (computerSelection){
        case "rock":
            if (userSelection == "paper"){
                alert("You win this round!");
                userPoints +=1;
            } else if(userSelection == "scissors"){
                alert("Computer wins this round!");
                computerPoints +=1;
            } else if(userSelection == "rock"){ 
                alert("It is a tie this round!");
            } else
                computerPoints +=1; 
                alert("Invalid input! Computer wins this round!");
            break;
        
        case "paper":
            if (userSelection == "scissors"){
                alert("You win this round!");
                userPoints +=1;
            } else if(userSelection == "rock"){
                alert("Computer wins this round!");
                computerPoints +=1;
            } else if(userSelection == "paper"){ 
                alert("It is a tie this round!");
            } else
                computerPoints +=1;
                alert("Invalid input! Computer wins this round!");
            break;

        case "scissors":
            if (userSelection == "rock"){
                alert("You win this round!");
                userPoints +=1;
            } else if(userSelection == "paper"){
                alert("Computer wins this round!");
                computerPoints +=1;
            } else if(userSelection == "scissors"){ 
                alert("It is a tie this round!");
            } else
                computerPoints +=1;
                alert("Invalid input! Computer wins this round!");
            break;
    }
        
}

function gamePlay(){
    for (let i = 0; i <5; i++){
        playRound(getComputerChoice(), getUserChoice());
    }
    alert(`Computer: ${computerPoints} User: ${userPoints}`);

    if (computerPoints > userPoints){
        alert("Computer has won!");
    } else alert("You have won!");

}
gamePlay();