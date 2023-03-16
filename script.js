//**************************  My Version


// //  // Steps


// //  0.5 Create object to hold all functions
// const game = {
//     gameInstructions: `To play a game of Rock, Paper, Scissors, enter: game.run()`,
//     playerMove: '',
//     computerMove: '',
//     playerScore: 0,
//     computerScore: 0,
//     roundWinner: '',
//     roundNumber: 0,
//     newRound: true,
//     redoRound: true,
//     matchComplete: false,

//     //  0. console.log the user instructions to start playing
//     conLogInstructions: function() {
//         console.log(`${this.gameInstructions}`);
//     },

//     // 0.75 Controller method that executes all necessary functions;
//     run: function() {
//         while(this.newRound) {
//         // Play a round of the game. If there's a draw, redo the round;
//         while (this.redoRound) {
//         this.checkPlayerInput();
//         this.computerInput();
//         this.compareMoves();
//         }
//          // If there's a winner, process outcome
//          this.processRoundResult();
//          this.checkRoundCount();
//          this.displayRoundResults();
//          if(this.matchComplete) {
//             this.displayMatchResults();
//             this.resetMatch();
//             this.conLogInstructions();
//             return;
//         } else {
//         this.resetRound();
//         }
//     }
       
       

//     },


//     //  1. Ready to accept an input from Player
//     // Accept 'Rock', 'Paper', or 'Scissors' into a function call. This function remains separate from the controller function. It's in the master input function. 
//     // Arg passed into function
//     // Para set to a variable for the Player
//     // Run function that checks to see if it's an acceptable input
//     // If not acceptable, alert user to enter a valid input.
//     checkPlayerInput: function() {
//         let pInput = prompt(`Please pass one of the following letters into the prompt to select a move: 'r' | 'p' | 's'`);
//         if(pInput === null) {
//             'Input null, please restart the game so sorry';
//         }
//         let pInputLower = pInput.toLowerCase();
//         if(pInputLower === 'r' || pInputLower === 'p' || pInputLower === 's') {
//             this.playerMove = pInputLower;
           
//         } else {
//             alert(`Input not valid. Please pass one of the following letters into the prompt to select a move: 'r' | 'p' | 's' (rock | paper | scissors)`);
//             this.checkPlayerInput();
//         }
//     },

//     //  2. Randomly select input for Computer
//     // Next function is ran, randomly selecting a move for the computer
//     // This move is stored in variable for Computer 
//     computerInput: function() {
//         let randomMoveNum = Math.floor(Math.random() * 3) + 1;
//         randomMoveNum === 1 ? this.computerMove = 'r' :
//         randomMoveNum === 2 ? this.computerMove = 'p' :
//         randomMoveNum === 3 ? this.computerMove = 's' : console.log(`error. this shouldn't happen.`);
//     },


//     //  3. Compare Player and Computer inputs to determine outcome
//     //  //  Possible outcomes are Computer wins, Player wins, Draw
//     // Next function accepts the Player and Computer move variables
//     // If Player wins, return 'player' string, or 'computer' if Computer wins.
//     compareMoves: function() {
//         let pMove = this.playerMove;
//         let cMove = this.computerMove;
//         // Draw
//         if (pMove === cMove) {
//             alert('A DRAW! Redo round.')
//             this.redoRound = true;
//         }
//         // Player wins 
//         else if (pMove === 'r' && cMove === 's' || pMove === 'p' && cMove === 'r' || pMove === 's' && cMove === 'p') {
//             this.roundWinner = 'player';
//             this.redoRound = false;
//         } 
//         // Computer wins
//         else {
//             this.roundWinner = 'computer';
//             this.redoRound = false;
//         }
//     },

//     //  4. If there's a winner, update the score and update the round
//     // 'Winner' function is ran with the returned string argument
//     // Update the score for the winner. Update the round number. All these values are global in scope?
//     //  --> If there's a draw, alert the player and return to step 1.
//     // If Step 3. function returns draw, run 'draw' function which alerts the draw, and ends the program sequence?
//     processRoundResult: function() {
//         let winner = this.roundWinner;
//         winner === 'player' ? this.playerScore++ : this.computerScore++;
//         this.roundNumber++
//     },

//     //  6. Check if the final round was played
//     // Run a check if the final round of played
// checkRoundCount: function() {
//     if(this.roundNumber === 5) {
//         this.matchComplete = true;
//         this.newRound = false;
//     }
// },


//     //  5. Display updated score and round
//     // Run a display function to display updated score and round

//     displayRoundResults: function() {
//         // Display scores and round number
//         console.log(`ROUND ${this.roundNumber} \nPlayer move: ${this.playerMove} | Player score: ${this.playerScore} | Computer move: ${this.computerMove} | Computer score: ${this.computerScore}`);
//         alert(`Round winner: ${(this.roundWinner).charAt(0).toUpperCase() + this.roundWinner.slice(1)}\nPlayer Score: ${this.playerScore}\nComputer Score: ${this.computerScore}\nRound: ${this.roundNumber}`);
//     },

//     resetRound: function() {
//         this.redoRound = true;
//     },

//     displayMatchResults: function() {
//         let matchWinner = this.playerScore > this.computerScore ? 'Player' : 'Computer';
//         let matchLoser = this.playerScore < this.computerScore ? 'Player' : 'Computer';
//         let winningScore = this.playerScore > this.computerScore ? this.playerScore : this.computerScore;
//         let losingScore = this.playerScore < this.computerScore ? this.playerScore : this.computerScore;
//         console.log(`Round 5 complete, the winner is ${matchWinner} with a score of ${winningScore}.\nThe loser is ${matchLoser} with a score of ${losingScore}.`);
//         alert(`Round 5 complete, the winner is ${matchWinner} with a score of ${winningScore}.\nThe loser is ${matchLoser} with a score of ${losingScore}.`);
//     },

//     resetMatch: function() {
//         this.playerMove = '';
//         this.computerMove = '';
//         this.playerScore = 0;
//         this.computerScore = 0;
//         this.roundWinner = '';
//         this.roundNumber = 0;
//         this.newRound = true;
//         this.redoRound = true;
//         this.matchComplete = false;
//     },
// }

// //  -1. Display instructions
// game.conLogInstructions();


// //  7. If not final round, return to step 1.
//     // If not final round, end

// //  8. If final round was played, display the winner and display reset input option.
//     // If final round, run 'display' function again, which has an option for if there's a winner. This option alerts who won the match.
//     // This option also runs 'reset' function, which displays a button that can be clicked to reset the program.

// //  9. If reset input selected, reset and initialize for a new game
//     // If reset option is selected, reset all scores to 0, round to 0.
//     // Run the display function to update reset scores and round.

// //  10. Set score to 0, set round to 0, return to step 1.
//     // Return to initialized state.




// ************************** The Odin Project version

function getComputerChoice() {
    let randomMoveNum = Math.floor(Math.random() * 3);
    let computerMove = randomMoveNum === 0 ? 'Rock' : randomMoveNum === 1 ? 'Paper' : randomMoveNum === 2 ? 'Scissors' : `This doesn't seem right...`;
    return computerMove;
}

function playRound(playerInput, computerInput) {
    let h1 = document.querySelector('h1');
    let pInput = playerInput;
    let cInput = computerInput;
    let pScoreSpan = document.querySelector('.spanPlayerScore');
    let cScoreSpan = document.querySelector('.spanComputerScore');
    let announceRound = document.querySelector('.announceRound');
    let pScore = parseInt(pScoreSpan.textContent);
    let cScore = parseInt(cScoreSpan.textContent);
    if(pInput === cInput) {
        announceRound.textContent = `IT'S A DRAW: ${pInput} draws ${cInput}`;
        return;
    } else if (pInput === 'Rock' && cInput === 'Scissors' || pInput === 'Paper' && cInput === 'Rock' || pInput === 'Scissors' && cInput === 'Paper' ) {
        ++pScore;
        pScoreSpan.textContent = pScore;
        announceRound.textContent = `You win! ${pInput} beats ${cInput}`;
        if (pScore === 5) { 
            document.body.style.backgroundColor = 'black';
            document.querySelectorAll('.moveBtn').forEach(btn => btn.style.display = 'none');
            h1.textContent = `YOU GOT 5 AND WIN THE MATCH`;            
            h1.style.color = 'blue'; 
        }
    } else {
        ++cScore;
        cScoreSpan.textContent = cScore;
        announceRound.textContent = `You LOSE! ${cInput} beats ${pInput}. GOOD DAY!`;
        if (cScore === 5) { 
            document.body.style.backgroundColor = 'black';
            document.querySelectorAll('.moveBtn').forEach(btn => btn.style.display = 'none');
            h1.textContent = `YOU LOSE COMPUTER GOT 5 AND WINS THE MATCH`;
            h1.style.color = 'red'; 
        }
    }
}

function clickedInput(e) {
    const playerMove = e.target.dataset.move;
    playRound(playerMove, getComputerChoice());
}

function addEventListeners() {
    const inputBtns = document.querySelectorAll('.moveBtn');
    inputBtns.forEach(btn => btn.addEventListener('click', clickedInput));
}

function game() {
        addEventListeners();
        // let playerMove = prompt(`Enter one of the follow: Rock | Paper | Scissors`);
        // console.log(playRound(playerMove, getComputerChoice()));
}

game();