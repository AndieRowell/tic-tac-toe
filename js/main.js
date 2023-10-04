//! Pseudocode

//INITIALIZE

// connect html div to js (global scope)
const ticTacToe = document.getElementById("tic-tac-toe");



// create the input form for the player name
// populate the player name to be displayed

//container that holds the player names and input form + button
    const nameInputContainer = document.createElement("div");
    ticTacToe.appendChild(nameInputContainer);

//form
    const inputForm = document.createElement("form");
    nameInputContainer.appendChild(inputForm);

//input field for writing your name
//this should loop? re
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Enter Your Name");
    nameInput.classList.add("text-center", "mx-auto", "d-flex");
    inputForm.appendChild(nameInput);



//! initialize function
// function that creates the tiles/board
//function init();


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

            const topFirstCol = document.createElement("div");
            topFirstCol.textContent = "0";
            topFirstCol.classList.add("col-4");
            topRow.appendChild(topFirstCol);

            const topSecondCol = document.createElement("div");
            topSecondCol.textContent = "1";
            topSecondCol.classList.add("col-4");
            topRow.appendChild(topSecondCol);

            const topThirdCol = document.createElement("div");
            topThirdCol.textContent = "2";
            topThirdCol.classList.add("col-4");
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
}

buildBoard();

//document.addEventListener("DOMContentLoaded", buildBoard);
//already have this at the top... and connected in body tag

/*
    for (let i = 0; i < 3; i++) {
        const lastCol = document.createElement("div");
        lastCol.classList.add("col-4");
        lastRow.appendChild(lastCol);
    }
*/

//somehow add event listener to the tile spaces
//add a click event - onclick="clickTile(this)"
//but then when the click happens - the marker gets populated?
