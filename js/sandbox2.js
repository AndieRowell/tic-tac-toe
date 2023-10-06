//* initialize my global variables

//need to signify the current player = player1 - x starts
let currentPlayer = "X";

// gameBoard has to have its own array to store markers
let gameBoard = ["", "", "", "", "", "", "", "", ""];
// let gameBoard = [null, null, null, null, null, null, null, null, null, null]

//gameover true or false
let gameOver = false;

//connect html div to js
//const ticTacToe = document.getElementById("tic-tac-toe");

//*initialize the game itself

function initializeGame() {
    buildBoard();
    addEventListeners();
}


//need the function to build the ui - build board
function buildBoard(){

    //create and append the main grid container

    const mainGridContainer = document.createElement("div");
    mainGridContainer.classList.add("container");
    mainGridContainer.classList.add("mt-5");
    ticTacToe.appendChild(mainGridContainer);

    for (let i = 0; i < 3; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        mainGridContainer.appendChild(row);

        for (let j = 0; j < 3; j++) {
            const col = document.createElement("div");
            const index = i * 3 + j;
            col.textContent = index;
            col.classList.add("col-4");
            col.classList.add("btn-outline-success");
            col.classList.add("tile");
            col.setAttribute("data-index", index);
            row.appendChild(col);
        }
    }

}

//for loop to make the rows and columns (condense earlier code)


//restart button at the bottom - container
const restartBtnContainer = document.createElement("div");
ticTacToe.appendChild(restartBtnContainer);


//restart button
const restartBtn = document.createElement("button");
restartBtn.textContent = "RESTART";
restartBtn.classList.add("text-center", "mx-auto", "d-flex")
restartBtnContainer.appendChild(restartBtn);


//!function that adds event listeners


//!function that handles the tile being clicked to add marker


//function that checks for the winner (compares against array of winning combos)

// win conditions array
// signal a message - checking for a winner vs a tie


//function that switches the players


//function that restarts the game and clears the board
function restartGame() {
    currentPlayer = "X";
    gameBoard = [null, x9]
    gameOver = false;
}

//global variables are reset?
//board cleared
const tiles = document.querySelectorAll(".tile");
tiles.forEach((cell) => {
    tiles.textContent = "";
});
//message cleared
displayMessage("");

//function to display the message
function displayMessage(message){

}
