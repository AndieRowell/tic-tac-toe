//* initialize my global variables

//need to signify the current player = player1 - x starts
let currentPlayer = "X";

// gameBoard has to have its own array to store markers


//connect html div to js
//const ticTacToe = document.getElementById("tic-tac-toe");

//*initialize the game itself

function initializeGame() {
    buildBoard();
    addEventListeners();
}
