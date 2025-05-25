// Start Menu
const gameName = document.querySelector('#game-name');
const playBtn = document.querySelector("#play-btn");
const helpBtn = document.querySelector("#help-btn");

function startMenu() {
    window.location.href = "./pages/menu.html";
}

function startMenuAnimations() {

    gameName.classList.add('anima-txt');
    setTimeout(() => {
        playBtn.classList.add('anima-btn');
        setTimeout(() => {
            helpBtn.classList.add('anima-btn');
        }, 500);
    }, 500);

}