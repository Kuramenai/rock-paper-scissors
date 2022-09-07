/*This function generates a random integer value from 0 to 3 */
function getComputerChoice(){
    return Math.floor(Math.random()*3);
}

/*This function takes the random integer value generated by getComputerChoice
 and return a string corresponding to one of the game choices*/
function getFormattedComputerChoice(computerChoice){
    if (computerChoice === 0){
        return "Rock";
    }
    if(computerChoice === 1){
        return "Paper";
    }
    if(computerChoice ===2){
        return "Scissors";
    }
    console.error("Something went wrong")

}

/*Take the input choice from the player and format it*/
function getPlayerSelection(){
    playerSelection = prompt("Enter Your Choice:");
    if(playerSelection){
        payerSelectionFormatted = playerSelection[0].toUpperCase() + (playerSelection.substr(1)).toLowerCase();
        return payerSelectionFormatted;
    }
    else{
        console.error("Please Enter A Choice!")
    }
    
}

/*Test the validity of the string inputted by the player*/
function isPlayerChoiceValid(playerSelection){
    if(playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors"){
        return true;
    }
    else{
        console.error("Please Enter A Valid Choice!")
    }

}


computerChoice = getComputerChoice();
computerFormattedChoice = getFormattedComputerChoice(computerChoice);
playerChoice = getPlayerSelection();

console.log(isPlayerChoiceValid(playerChoice));