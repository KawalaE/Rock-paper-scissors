let options = ["rock", "paper", "scissors"];
let computerPoints = 0; 
let userPoints = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(options[randomNumber]);
    return options[randomNumber];
}

function playRound(computerSelection, userSelection){

    switch (computerSelection){
        case "rock":
            if (userSelection == "paper"){
                console.log("You win this round!");
                userPoints +=1;
            } else if(userSelection == "scissors"){
                console.log("Computer wins this round!");
                computerPoints +=1;
            } else if(userSelection == "rock"){ 
                console.log("It is a tie this round!");
            } else if(userSelection != "rock" || userSelection != "paper" || userSelection != "scissors"){
                computerPoints +=1; 
                console.log("Invalid input! Computer wins this round!");
            }
            break;
        
        case "paper":
            if (userSelection == "scissors"){
                console.log("You win this round!");
                userPoints +=1;
            } else if(userSelection == "rock"){
                console.log("Computer wins this round!");
                computerPoints +=1;
            } else if(userSelection == "paper"){ 
                console.log("It is a tie this round!");
            } else if(userSelection != "rock" || userSelection != "paper" || userSelection != "scissors"){
                computerPoints +=1;
                console.log("Invalid input! Computer wins this round!");
            }
            break;

        case "scissors":
            if (userSelection == "rock"){
                console.log("You win this round!");
                userPoints +=1;
            } else if(userSelection == "paper"){
                console.log("Computer wins this round!");
                computerPoints +=1;
            } else if(userSelection == "scissors"){ 
                console.log("It is a tie this round!");
            } else if(userSelection != "rock" || userSelection != "paper" || userSelection != "scissors"){
                computerPoints +=1;
                console.log("Invalid input! Computer wins this round!");
            }
            break;
    }
        
}

function gamePlay(){

    const choices = document.querySelectorAll('button');
    choices.forEach(choice => {
    choice.addEventListener('click',() => {
        playRound(getComputerChoice(), choice.id);
        if (computerPoints == 5 || userPoints == 5){
            console.log(`Computer: ${computerPoints} User: ${userPoints}`)
            if (computerPoints > userPoints){
                console.log("Computer wins!");
            } else (console.log("You win!"))
        }
        
        });
    });

}

gamePlay();
