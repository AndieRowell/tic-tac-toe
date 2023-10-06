//! Pseudocode
//TODO - FUNCTIONS I NEED
// initializeGame()
// renderBoard()
// restartGame()
// clickTile(tileIndex)
// checkWinner()
// isBoardFull()
// switchPlayer()
// displayMessage()
// addEventListeners()
// hoverEffect()
// showModal(message)
// validateInput()



//INITIALIZE

// connect html div to js (global scope)
const ticTacToe = document.getElementById("tic-tac-toe");



// create the input form for the player name
// populate the player name to be displayed

// game title container
    const gameTitleContainer = document.createElement("div");
    ticTacToe.appendChild(gameTitleContainer);

// game title
    const gameTitle = document.createElement("h1");
    gameTitle.setAttribute("type", "text");
    gameTitle.textContent = "TIC-TAC-TOE";
    gameTitle.classList.add("text-center", "mx-auto", "d-flex");
    gameTitleContainer.appendChild(gameTitle);

// container that holds the player names and input form + button
    const nameInputContainer = document.createElement("div");
    ticTacToe.appendChild(nameInputContainer);

// form
    const inputForm = document.createElement("form");
    nameInputContainer.appendChild(inputForm);


// input field for writing your name
// this should loop? re
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Enter Your Name");
    nameInput.classList.add("text-center", "mx-auto", "d-flex");
    inputForm.appendChild(nameInput);

// button for entering/saving the name





//! initialize function
// function that creates the tiles/board
// function init();


// need to condense this code
//  - a for loop that creates the columns 3 times for each row?
// for loop - to render a tile 9 times.....






function buildBoard() {

//    const gameBoard = document.getElementById("tic-tac-toe");
    console.log("it works");

    const mainGridContainer = document.createElement("div");
    mainGridContainer.classList.add("container");
    mainGridContainer.classList.add("mt-5");
    ticTacToe.appendChild(mainGridContainer);

        const topRow = document.createElement("div");
        topRow.classList.add("row");
        mainGridContainer.appendChild(topRow);

//?  test this div!!!!!
//btnAdd.addEventListener("click", AddNew)
// add an event listener to the add button - that runs on a click - and calls the addNew function
//newDiv.classlist.add("div-shadow"); - .div-shadow class in css

            const topFirstCol = document.createElement("button");
            topFirstCol.textContent = "0";
            topFirstCol.classList.add("col-4");
            topFirstCol.classList.add("btn-outline-success");
            topFirstCol.classList.add("cell");
            topRow.appendChild(topFirstCol);

            const topSecondCol = document.createElement("div");
            topSecondCol.textContent = "1";
            topSecondCol.classList.add("col-4");
            topSecondCol.classList.add("cell")
            //topSecondCol.classList.add("div-shadow");
            topRow.appendChild(topSecondCol);

            const topThirdCol = document.createElement("div");
            topThirdCol.textContent = "2";
            topThirdCol.classList.add("col-4");
            topThirdCol.classList.add("cell")
            //topThirdCol.classList.add("div-shadow");
            topRow.appendChild(topThirdCol);

        const middleRow = document.createElement("div");
        middleRow.classList.add("row");
        mainGridContainer.appendChild(middleRow);

            const midFirstCol = document.createElement("div");
            midFirstCol.textContent = "3";
            midFirstCol.classList.add("col-4");
            middleRow.appendChild(midFirstCol);

            const midSecondCol = document.createElement("div");
            midSecondCol.textContent = "4";
            midSecondCol.classList.add("col-4");
            middleRow.appendChild(midSecondCol);

            const midThirdCol = document.createElement("div");
            midThirdCol.textContent = "5";
            midThirdCol.classList.add("col-4");
            middleRow.appendChild(midThirdCol);

        const lastRow = document.createElement("div");
        lastRow.classList.add("row");
        mainGridContainer.appendChild(lastRow);

            const lastFirstCol = document.createElement("div");
            lastFirstCol.textContent = "6";
            lastFirstCol.classList.add("col-4");
            lastRow.appendChild(lastFirstCol);

            const lastSecondCol = document.createElement("div");
            lastSecondCol.textContent = "7";
            lastSecondCol.classList.add("col-4");
            lastRow.appendChild(lastSecondCol);

            const lastThirdCol = document.createElement("div");
            lastThirdCol.textContent = "8";
            lastThirdCol.classList.add("col-4");
            lastRow.appendChild(lastThirdCol);


            //restart game button container
            const restartBtnContainer = document.createElement("div");
            ticTacToe.appendChild(restartBtnContainer);

        //restart button
        const restartBtn = document.createElement("button");
        restartBtn.setAttribute("type", "text");
        restartBtn.textContent = "RESTART";
        restartBtn.classList.add("text-center", "mx-auto", "d-flex")
        restartBtnContainer.appendChild(restartBtn);


        }




//buildBoard();

// document.addEventListener("DOMContentLoaded", buildBoard);
// already have this at the top... and connected in body tag

/*



    for (let i = 0; i < 3; i++) {
        const lastCol = document.createElement("div");
        lastCol.classList.add("col-4");
        lastRow.appendChild(lastCol);
    }
*/

// somehow add event listener to the tile spaces
// add a click event - onclick="clickTile(this)" - class?
// but then when the click happens - the marker gets populated?

//! make a marker appear when click on a square also determined by whose turn
// and then LOG that piece to the index?





// could add a hover effect where the tile size increases to
//      let the user know which tile they're about to select
// change the cursor to a pointer whenever theyre about to select the square as well
//      to help the user know that the tile is clickable


// create the array of all of the possible winning combos

/*
const winCombosArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]
*/

// compare against that array to determine if there is a winner everytime a tile is clicked
//function checkWinner(){}

function renderMarker() {
    // access an image by the id and change the display property to block??
    // block? or maybe inline block?
    document.getElementbyID("image")
        .style.display = "block";
    document.getElementByID('btnID')
        .style.display = "none";
}


//function checkWinner() {};

//function isBoardFull() {};

//function switchPlayer() {
//    let player1 = "X";

//};


//if (checkWinner()) {
//    displayMessage{$}
//} else if (isBoardFull()) {
//    displayMessage
//} else (switchPlayer()) {

//}






// when the winning combo is determined or tiles run out - a modal is displayed with a winner or tie message
// a message displays whose turn it is - toggle or switches to the next player turn



// array tile objects? - call to that player1 or player2 property when click on tile?
letTileObjectsArr = [
    {
        "player1": "x",
        "player2": "o"
    },
    {
        "player1": "x",
        "player2": "o"
    },
    {
        "player1": "x",
        "player2": "o"
    },
    {
        "player1": "x",
        "player2": "o"
    },
    {
        "player1": "x",
        "player2": "o"
    },
    {
        "player1": "x",
        "player2": "o"
    },
    {
        "player1": "x",
        "player2": "o"
    },
    {
        "player1": "x",
        "player2": "o"
    },
    {
        "player1": "x",
        "player2": "o"
    }
]
