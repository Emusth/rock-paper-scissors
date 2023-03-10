// Make Rock Paper Scissors game

//  // Variables
// Player entity
// Computer entity

// Round count output
// Player score count output
// Computer score count output
// Match winner output

// Rock input
// Paper input
// Scissors input
// Match reset input


//  // Steps


//  0.5 Create object to hold all functions
const game = {
    gameInstructions: `Rock, Paper, Scissors. To start game, type game.run()`,
    playerMove: '',
    computerMove: '',
    playerScore: '',
    computerScore: '',
    roundNumber: '',

    //  0. console.log the user instructions to start playing
    conLogInstructions: function() {
        console.log(`${this.gameInstructions}`);
    },

    // 0.75 Controller method that executes all necessary functions;
    run: function() {
        this.checkPlayerInput();
        this.computerInput();
    },


    //  1. Ready to accept an input from Player
    // Accept 'Rock', 'Paper', or 'Scissors' into a function call. This function remains separate from the controller function. It's in the master input function. 
    // Arg passed into function
    // Para set to a variable for the Player
    // Run function that checks to see if it's an acceptable input
    // If not acceptable, alert user to enter a valid input.
    checkPlayerInput: function() {
        let pInput = prompt(`Please pass one of the following letters into the prompt to select a move: 'r' | 'p' | 's'`)
        let pInputLower = pInput.toLowerCase();
        if(pInputLower === 'r' || pInputLower === 'p' || pInputLower === 's') {
            this.playerMove = pInputLower;
            console.log('obj yes', this.playerMove);
        } else {
            alert(`Input not valid. Please pass one of the following letters into the prompt to select a move: 'r' | 'p' | 's' (rock | paper | scissors)`);
            this.checkPlayerInput();
        }
    },

    //  2. Randomly select input for Computer
    // Next function is ran, randomly selecting a move for the computer
    // This move is stored in variable for Computer 
    computerInput: function() {
        let randomMoveNum = Math.floor(Math.random() * 3) + 1;
        console.log('comp rand num', randomMoveNum);
    },
  
}

//  -1. Display instructions
game.conLogInstructions();
    


//  3. Compare Player and Computer inputs to determine outcome
//  //  Possible outcomes are Computer wins, Player wins, Draw
    // Next function accepts the Player and Computer move variables
    // If Player wins, return 'player' string, or 'computer' if Computer wins.

//  4. If there's a winner, update the score and update the round
    // 'Winner' function is ran with the returned string argument
    // Update the score for the winner. Update the round number. All these values are global in scope?
//  --> If there's a draw, alert the player and return to step 1.
    // If Step 3. function returns draw, run 'draw' function which alerts the draw, and ends the program sequence?

    //  5. Display updated score and round
    // Run a display function to display updated score and round

//  6. Check if the final round was played
    // Run a check if the final round of played

//  7. If not final round, return to step 1.
    // If not final round, end

//  8. If final round was played, display the winner and display reset input option.
    // If final round, run 'display' function again, which has an option for if there's a winner. This option alerts who won the match.
    // This option also runs 'reset' function, which displays a button that can be clicked to reset the program.

//  9. If reset input selected, reset and initialize for a new game
    // If reset option is selected, reset all scores to 0, round to 0.
    // Run the display function to update reset scores and round.

//  10. Set score to 0, set round to 0, return to step 1.
    // Return to initialized state.