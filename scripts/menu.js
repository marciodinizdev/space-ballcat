// Start Menu
const gameName = document.querySelector('#game-name');
const playBtn = document.querySelector("#play-btn");
const helpBtn = document.querySelector("#help-btn");

const bubble = new Audio('../assets/sound/bubble.mp3');
const spaceMusic = new Audio('../assets/sound/space.mp3')

function playBubble() {
    bubble.currentTime = 0;
    bubble.play();
}

function playSpace() {
    spaceMusic.currentTime = 0;
    spaceMusic.play();
}

function animaClick(element) {
    bubble.play();
    element.classList.remove("anima-click");
    
    setTimeout(() => {
        element.classList.add("anima-click");
    }, 50);
}

function gameStart() {
    
    gameName.classList.add("menu-to-game-txt");
    playBtn.classList.add("menu-to-game-play-btn");
    helpBtn.classList.add("menu-to-game-help-btn");
    setTimeout(() => {
        window.location.href = "../pages/game.html";
    }, 2000);
}

function helpStart() {
    
}

// Start Menu
function startMenuAnimations() {
    
    gameName.classList.add('anima-txt');
    playSpace();
    setTimeout(() => {
        playBtn.classList.add('anima-btn');
        playBubble();
        setTimeout(() => {
            helpBtn.classList.add('anima-btn');
            playBubble();
            setTimeout(() => {
                playBtn.classList.remove('anima-btn', 'invisible');
                helpBtn.classList.remove('anima-btn', 'invisible');
            }, 500);
        }, 500);
    }, 500);

}

playBtn.addEventListener('mouseenter', playBubble);
playBtn.addEventListener('click', () => {
    bubble.play();
    gameStart();
});
helpBtn.addEventListener('mouseenter', playBubble);
helpBtn.addEventListener('click', () => {  
    bubble.play(); 
    helpStart();
});