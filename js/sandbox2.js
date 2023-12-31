//* initialize my global variables

//need to signify the current player = player1 - x starts
let currentPlayer = "X";

// gameBoard has to have its own array to store markers
//let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameBoard = [null, null, null, null, null, null, null, null, null, null]

//gameover true or false
let gameOver = false;

//connect html div to js
const ticTacToe = document.getElementById("tic-tac-toe");

//*initialize the game itself

function initializeGame() {
    buildBoard();
    addEventListeners();
}


//need the function to build the ui - build board
function buildBoard(){

    // game title container
    const gameTitleContainer = document.createElement("div");
    ticTacToe.appendChild(gameTitleContainer);

    // game title
    const gameTitle = document.createElement("h1");
    //gameTitle.setAttribute("type", "text");
    gameTitle.textContent = "TIC-TAC-TOE";
    gameTitle.classList.add("text-center", "mx-auto", "d-flex");
    gameTitleContainer.appendChild(gameTitle);

//original spot for displaymessage


    //create and append the main grid container
    const mainGridContainer = document.createElement("div");
    mainGridContainer.classList.add("container");
    mainGridContainer.classList.add("mt-5");
    ticTacToe.appendChild(mainGridContainer);

    //for loop to make the rows and columns (condense earlier code)
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



//restart button at the bottom - container
const restartBtnContainer = document.createElement("div");
ticTacToe.appendChild(restartBtnContainer);


//restart button
const restartBtn = document.createElement("button");
restartBtn.textContent = "RESTART";
restartBtn.setAttribute("id", "restartBtn");
restartBtn.classList.add("text-center", "mx-auto", "d-flex")
restartBtnContainer.appendChild(restartBtn);


//function that adds event listeners
function addEventListeners() {
    ticTacToe.addEventListener("click", (event) => {
        if (event.target.classList.contains("tile") && !gameOver) {
            clickTile(event.target);
        }
    });

    document.getElementById("restartBtn").addEventListener("click", restartGame);
}


//function that handles the tile being clicked to add marker
function clickTile(tile) {
    const index = parseInt(tile.getAttribute("data-index"));
    if (gameBoard[index] === null) {
        gameBoard[index] = currentPlayer;
        tile.textContent = currentPlayer;
        checkWinner();
        switchPlayer();
    }
}



//function that checks for the winner (compares against array of winning combos)
function checkWinner() {
    // win conditions array
    const winCombosArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

    // signal a message "win!"- checking for a winner vs a tie
    for (const combo of winCombosArr) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
        pushMessage(`${currentPlayer} wins!`);
        gameOver = true;
        return;

        }
    }

    // signal a message "tie" - checking for a winner vs a tie
    if (gameBoard.every((tile) => tile !== null)) {
        pushMessage("It's a tie!");
        gameOver = true;
    }

}


//function that switches the players
function switchPlayer() {
   currentPlayer = currentPlayer === "X" ? "O" : "X";
}


//function that restarts the game and clears the board
function restartGame() {


    currentPlayer = "X";
    //gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameBoard = [null, null, null, null, null, null, null, null, null]
    gameOver = false;
    console.log("works");
    console.log(gameBoard)

    //global variables are reset?
    //board cleared
    const tile = document.querySelectorAll(".tile");
    tile.forEach((tile) => {
    tile.textContent = "";
    });
//message cleared
//displayMessage("");
}



// either rebuildboard or clear out textcontent for each tile?



// display message - header
let displayMessage = document.createElement("h3");
displayMessage.textContent = "";
displayMessage.classList.add("text-center", "mx-auto", "d-flex");
document.body.appendChild(displayMessage);
//gameTitleContainer.appendChild(displayMessage);

//function to display the message
function pushMessage(message) {
    displayMessage.textContent = message;
}
