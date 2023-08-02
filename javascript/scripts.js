document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game');
    const game = canvas.getContext('2d');
    const btnUp = document.getElementById('up');
    const btnLeft = document.getElementById('left');
    const btnRight = document.getElementById('right');
    const btnDown = document.getElementById('down');

    let canvasSize;
    let elementsSize;

    window.addEventListener("load", setCanvasSize);
    window.addEventListener("resize", setCanvasSize);

    function setCanvasSize() {
        if (window.innerHeight > window.innerWidth) {
            canvasSize = window.innerWidth * 0.8;
        } else {
            canvasSize = window.innerHeight * 0.8;
        }

        canvas.setAttribute('width', canvasSize);
        canvas.setAttribute('height', canvasSize);

        elementsSize = canvasSize / 10;

        startGame();
    }

    function startGame() {
        game.font = (elementsSize - 12) + 'px Verdana';
        game.textAlign = 'end';
        game.textBaseline = 'bottom';

        const map = maps[0];
        const mapRows = map.trim().split('\n');
        const mapRowCols = mapRows.map(row => row.trim().split(''));

        mapRowCols.forEach((row, rowI) => {
            row.forEach((col, colI) => {
                const emoji = emojis[col];
                const posX = elementsSize * (colI + 1);
                const posY = elementsSize * (rowI + 1);
                game.fillText(emoji, posX, posY);
            });
        });
    }

    window.addEventListener('keydown', moveKeysDir);
    btnUp.addEventListener('click', moveUp);
    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
    btnDown.addEventListener('click', moveDown);

    function moveKeysDir(event){
        if (event.code == "KeyW" || event.code == "ArrowUp") {
            moveUp();
        } else if (event.code == "KeyA" || event.code == "ArrowLeft") {
            moveLeft();
        } else if (event.code == "KeyD" || event.code == "ArrowRight") {
            moveRight();
        }   else if (event.code == "KeyS" || event.code == "ArrowDown") {
            moveDown();
        }
    }
    function moveUp(event){
    }
    function moveLeft(event){
    }
    function moveRight(event){
    }
    function moveDown(event){
    }
});
