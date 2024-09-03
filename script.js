const body = document.querySelector('body');

function createGrid(rowLength = 16){
    let numOfTiles = 0;
    let totalTiles = rowLength ** 2;
    let containerSize = 480; //pixels
    let tileSize = containerSize/rowLength;

    const etchContainer = document.createElement('div');
    etchContainer.classList.add('etch-container');
    body.appendChild(etchContainer);

    while(numOfTiles < totalTiles){
        const tile = document.createElement('div');

        tile.style.width = tileSize + "px";
        tile.style.height = tileSize + "px";

        tile.addEventListener('mouseover', () => {
            randomizeColor(tile);
        });
        etchContainer.appendChild(tile);

        numOfTiles++;
    }
}

function deleteGrid(){
    const containerToBeDeleted = document.querySelector('.etch-container');
    containerToBeDeleted.remove();
}

function randomizeColor(tile){
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);

    tile.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

const resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', () => {
    let desiredRows = prompt('Enter the number of rows you would like! (Between 1 - 100)');

    while(desiredRows > 100 || desiredRows <= 0 || !Number.isInteger(desiredRows)){
        desiredRows = prompt('You entered an invalid input. Please enter a number between 1 and 100');
    }

    deleteGrid();
    createGrid(desiredRows);
});

createGrid();
