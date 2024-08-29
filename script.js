let numOfTiles = 0;
const etchContainer = document.querySelector('.etch-container');

//16 x 16 grid, means we need 136 tiles
while(numOfTiles < 136){
    let tile = document.createElement('div');
    tile.className = 'tile';
    etchContainer.appendChild(tile);
    numOfTiles++;
}