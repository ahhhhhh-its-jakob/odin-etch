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
        tile.style.opacity = 0.1;

        tile.addEventListener('mouseover', () => {
            setColor(tile);
        });
        etchContainer.appendChild(tile);

        numOfTiles++;
    }
}

function deleteGrid(){
    const containerToBeDeleted = document.querySelector('.etch-container');
    containerToBeDeleted.remove();
}

function setColor(tile){
    let styles = window.getComputedStyle(tile); //gets the computed styles of an element
    let tileOpacity = Number(styles.getPropertyValue("opacity")); //returns the value of the specified property
    tileOpacity += 0.1;

    if(document.querySelector('#rainbow-mode').checked){
        let red = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);

        tile.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else {
        tile.style.backgroundColor = 'blueviolet';
    }

    tile.style.opacity = tileOpacity;
}

const resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', () => {
    let desiredRows = prompt('Enter the number of rows you would like! (Between 1 - 100)');

    while(desiredRows > 100 || desiredRows <= 0){
        desiredRows = prompt('You entered an invalid input. Please enter a number between 1 and 100');
    }

    deleteGrid();
    createGrid(desiredRows);
});

createGrid();
