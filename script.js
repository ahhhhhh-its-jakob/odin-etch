let numOfTiles = 0;
const body = document.querySelector('body');

//16 x 16 grid, means we need 256 tiles
function createGrid(rowLength = 16){
    let totalTiles = rowLength ** 2;
    let containerSize = 480;
    let tileSize = containerSize/rowLength;

    const etchContainer = document.createElement('div');
    etchContainer.classList.add('etch-container');
    body.appendChild(etchContainer);

    while(numOfTiles < totalTiles){
        const tile = document.createElement('div');

        tile.style.width = tileSize + "px";
        tile.style.height = tileSize + "px";

        tile.addEventListener('mouseover', () => {
            tile.classList.add('filled-tile');
        });
        etchContainer.appendChild(tile);

        numOfTiles++;
    }
}

createGrid();
