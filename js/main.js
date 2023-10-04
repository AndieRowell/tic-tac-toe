//! Pseudocode

//INITIALIZE

// connect html div to js (global scope)
const ticTacToe = document.getElementById("tic-tac-toe");

// initialize function
// function that creates the tiles/board
// need to condense this code
//  - a for loop that creates the columns 3 times for each row?

function buildBoard() {

    const mainGridContainer = document.createElement("div");
    mainGridContainer.classList.add("container mt-5");
    ticTacToe.appendChild(mainGridContainer);

        const topRow = document.createElement("div");
        topRow.classList.add("row");
        mainGridContainer.appendChild(topRow);

            const topFirstCol = document.createElement("div");
            topFirstCol.classList.add("col-4");
            topRow.appendChild(topFirstCol);

            const topSecondCol = document.createElement("div");
            topSecondCol.classList.add("col-4");
            topRow.appendChild(topSecondCol);

            const topThirdCol = document.createElement("div");
            topThirdCol.classList.add("col-4");
            topRow.appendChild(topThirdCol);

        const middleRow = document.createElement("div");
        middleRow.classList.add("row");
        mainGridContainer.appendChild(middleRow);

            const midFirstCol = document.createElement("div");
            midFirstCol.classList.add("col-4");
            middleRow.appendChild(midFirstCol);

            const midSecondCol = document.createElement("div");
            midSecondCol.classList.add("col-4");
            middleRow.appendChild(midSecondCol);

            const midThirdCol = document.createElement("div");
            midThirdCol.classList.add("col-4");
            middleRow.appendChild(midThirdCol);

        const lastRow = document.createElement("div");
        lastRow.classList.add("row");
        mainGridContainer.appendChild(lastRow);

            const lastFirstCol = document.createElement("div");
            lastFirstCol.classList.add("col-4");
            lastRow.appendChild(lastFirstCol);

            const lastSecondCol = document.createElement("div");
            lastSecondCol.classList.add("col-4");
            lastRow.appendChild(lastSecondCol);

            const lastThirdCol = document.createElement("div");
            lastThirdCol.classList.add("col-4");
            lastRow.appendChild(lastThirdCol);
}

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
