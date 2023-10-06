//! PSEUDOCODE:

//? PROCEDURAL PSEUDOCODE:
//* START
//* INIT
//* LOOP
//* DISPOSE
//* END

document.addEventListener("load", init); //when the page is being loaded - call the init function


//initialize function
init(event){
    newGame(); //call to the newGame function
    //update or populate gameState
    //build UI
    buildUI();

    //initialize click handlers
    //set up handlers

}

//* Model
function newGame(){
    //create game object
    game = newGame();
    //create player1 and player2 objects
    player1 = new Player();
    player2 = new Player();
    //check local storage
    if (we have a game in local storage)
        //hydrate state
        gameState = ls.gameState
    else
        gameState - gameState.board.default
}

//* Model Functions
/*
    update


*/


//* View
function buildUI(){
    // do stuff with the UI, view
}

//* View Functions
    buildTileGrid
    buildTurnIndicator
    buildRestartButton
    build










//initialize function


//functions with the roles and responsibilities -MVC


//Model


//Model Functions


//View


//View Functions


//Controller
