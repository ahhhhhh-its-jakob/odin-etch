let numOfTiles = 0;
const etchContainer = document.querySelector('.etch-container');

//16 x 16 grid, means we need 256 tiles
while(numOfTiles < 256){
    let tile = document.createElement('div');
    tile.classList.add('tile');
    tile.addEventListener('mouseover', () => {
        tile.classList.add('filled-tile');
    });
    etchContainer.appendChild(tile);
    numOfTiles++;
}
