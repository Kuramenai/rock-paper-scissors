/*This function generates a random integer value from 0 to 3 */
function getComputerChoice(){
    return Math.floor(Math.random()*3);
}

/*This function takes the random integer value generated by getComputerChoice
 and return a string corresponding to one of the game choices*/
function getFormattedComputerChoice(computerSelection){
    if (computerSelection === 0){
        return "Rock";
    }
    if(computerSelection === 1){
        return "Paper";
    }
    if(computerSelection ===2){
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
}

/*The game itself, compares player and computer selection, decides the outcome of the match.*/
function playRound(playerSelection,computerSelection){
    lose_announcement = `You lost!${computerSelection} beats ${playerSelection}.`
    win_announcement =  `Congratulations You won!${computerSelection} lost to ${playerSelection}.`

    if(isPlayerChoiceValid(playerSelection)){
        if(playerSelection === computerSelection){
            console.log(`Wow both are ${computerSelection}.It's a tie.What about another round?`);
            return 0;
        }

        
        if(playerSelection === 'Rock'){
            if(computerSelection === 'Paper'){
                console.log(lose_announcement);
                return -1;
            }
            if(computerSelection === 'Scissors'){
                console.log(win_announcement);
                return 1;
            }
        }

        if(playerSelection === 'Paper'){
            if(computerSelection === 'Scissors'){
                console.log(lose_announcement);
                return -1;
            }
            if(computerSelection === 'Rock'){
                console.log(win_announcement);
                return 1;
            }
        }

        if(playerSelection === 'Scissors'){
            if(computerSelection === 'Rock'){
                console.log(lose_announcement);
                return -1;
            }
            if(computerSelection === 'Paper'){
                console.log(win_announcement);
                return 1;
            }
        }
    }

    else{
        console.error("Please Enter A Valid Choice!");
    }

}

/*Function to display final score  */
function finalScore(computerWins,playerWins,ties){
    if(playerWins === computerWins){
        console.log(`You won ${playerWins} times and lost ${computerWins} times.There was ${ties} ties.`);
        console.log("You both are so good that it's impossible to tell which of you is the GOAT.");
    }
    else if(computerWins < playerWins){
        console.log(`You won ${playerWins} times and lost ${computerWins} times.There was ${ties} ties.`);
        console.log("CONGRATULATIONS! You have won");
    }
    else if(computerWins > playerWins){
        console.log(`You won ${playerWins} times and lost ${computerWins} times.There was ${ties} ties.`);
        console.log("SORRY Bro! You have lost");
    }
}

/*The game*/
function game(e){
    playerWins=0;computerWins=0,ties=0;
   

    computerSelection = getComputerChoice();
    computerFormattedSelection = getFormattedComputerChoice(computerSelection);

     playerSelection = e.target.className;

    roundResult = playRound(playerSelection,computerFormattedSelection);
    

    if(roundResult === 1){
        playerWins+= 1;
    }
    else if(roundResult === -1){
        computerWins +=1;
    }
    else{
        ties +=1
    }


    finalScore(computerWins,playerWins,ties);
   
}
/* Add GUI */



playerChoiceIsRock = document.querySelector('.Rock');
playerChoiceIsPaper = document.querySelector('.Paper');
playerChoiceIsScissors = document.querySelector('.Scissors');


playerChoices = [playerChoiceIsRock,playerChoiceIsPaper,playerChoiceIsScissors];

/* add event listener to each item so that every time we click one, we play a round*/
for(const choice of playerChoices){
    choice.addEventListener('click',playGame);
}

function playGame(e){
   
    game(e);
   
}

let playerSelection = 0, computerSelection = 0;










//game();
