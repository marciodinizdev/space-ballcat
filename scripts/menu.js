// Start Menu
const gameName = document.querySelector('#game-name');
const playBtn = document.querySelector("#play-btn");
const helpBtn = document.querySelector("#help-btn");

const bubble = new Audio('../assets/sound/bubble.mp3');

function startMenu() {
    window.location.href = "./pages/menu.html";
}

function startMenuAnimations() {

    gameName.classList.add('anima-txt');
    setTimeout(() => {
        playBtn.classList.add('anima-btn');
        bubble.play();
        setTimeout(() => {
            helpBtn.classList.add('anima-btn');
            bubble.play();
        }, 500);
    }, 500);

}

function tocarBubble() {
    bubble.currentTime = 0;
    bubble.play();
}

playBtn.addEventListener('mouseover', tocarBubble);
playBtn.addEventListener('click', tocarBubble);
helpBtn.addEventListener('mouseover', tocarBubble);
helpBtn.addEventListener('click', tocarBubble);