let gameArea = document.querySelector('.gameArea');
let gameObj = document.querySelector('.gameObject');
let posX = 0;
let posY = 0;
let moveStep = 10;

document.addEventListener('keydown', function(e){
    console.log(e.key);
    switch(e.key){
        case 'ArrowUp':
            posY = Math.max(0, posY-moveStep);
            break;
        case 'ArrowDown':
            posY = Math.min(gameArea.clientHeight - gameObj.clientHeight, posY+moveStep);
            break;
        case 'ArrowLeft':
            posX = Math.max(0, posX-moveStep);
            break;
        case 'ArrowRight':
            posX = Math.min(gameArea.clientWidth - gameObj.clientWidth, posX+moveStep);
            break;            
    }
    gameObj.style.top = `${posY}px`;
    gameObj.style.left = `${posX}px`;
});
