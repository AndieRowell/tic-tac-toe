# PSEUDOCODE:

## SMAC LIST:
1. Understand the problems
2. Break the issues into smaller parts
3. Consider:
    - turns
    - a marker that gets placed (x, o)
    - a board that manages some sort of state (placing the x/o)
    - win conditions
4. Follow the process
5. Pseudocode!
6. Sandbox "small tests"

## Project Requirements:
- [ ] game should indicate who's turn it is
- [ ] game tiles are only clickable once
    - [ ] if game is over they are not clickable at all
- [ ] game displays who has **won**, or if there is a **tie**
- [ ] there should be a **"restart game"** button that doesn't refresh the page (sets state)
- [ ] on each player's turn, their marker symbol is placed on a tile by clicking
- [ ] the game continues until one player places 3 markers in a line and wins **OR** there are no more spaces - a tie
- [ ] only have one single ```<div id="app"></div>``` in the HTML

## Brainstorm/Thoughts:

### The Game:
Two human players given either an "x" or "o", take alternating turns placing their symbol on a 3x3 grid of tiles. This alternating continues until one player has won by lining up 3 of their symbols in a straight line on the grid or there are no more remaining tiles to place on which leads to a tie.

### Immediate Thoughts:
- need some sort of way to toggle between player1's and player2's turns
- need a marker that gets placed using a click handler
- need a gameboard that manages some sort of state when placing the x and o
- should hydrate, set the state, re-render, evaluate against win conditions?

### Questions to Ask While Pseudocoding:

- How can I determine/show whose turn it is?
    - when a tile is clicked should that immediately switch us to the next player?
    - some sort of toggle that uses truthy/falsey?
- When a player places a marker on a tile and the turn changes, how can I make this information 'stay'/become logged?
    - set the markers in state
- What data structure do I need for state?
    - an array?
        - an array of numbers that correlate to the tile locations?
        - a multidimensional array
        - maybe could use a stacked multidimensional array to map out the tiles...
        - an array of empty strings?
        - an array of objects that have properties?
            - properties of 'x' or 'o' and a function - depending on whose turn calls to place that 'x' or 'o' when clicked?
        - maybe consider switch case?
- How can I set up the win conditions?
    - could have a multidimensional array with all of the winning combos of tiles (using their indices)
        - then compare that to the current markers on the board every turn?
- How to display the game only using one div in html?
    - structure of - container, row, column, tile...
    - the tile needs an id
        - tile id = 0
    - probably use the createElement() method
- How can I potentially apply this to be able to expand to other games such as connect 4?
- How to do this with less code...?

### MoSCoW
[!NOTE] Consider **MSCW** - **M**ust have, **S**hould have, **C**ould have, **W**on't have

#### Must have:
- all of the project requirements
-

#### Should have:


#### Could have:


#### Won't have:


### Analyzing the **Possible** Wireframes...
