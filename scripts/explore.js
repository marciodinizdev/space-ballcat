const exploreContainer  = document.querySelector("#explore-container");
const backButton = document.querySelector("#back-button");

const bubble = new Audio('../assets/sound/bubble.mp3');
const exploreMusic = new Audio('../assets/sound/explore.mp3');

function playBubble() {
    bubble.currentTime = 0;
    bubble.play();
}
function playExplore() {
    exploreMusic.currentTime = 0;
    exploreMusic.play()
}

function blurRemove() {
    exploreContainer.classList.remove('filter-blur');
    exploreContainer.classList.add('blur-remove');
    setTimeout(() => {
        exploreContainer.classList.remove('blur-remove');
    }, 500);
}

function startExplore() {
    blurRemove();
    playExplore();
}

function backToMenu() {
    backButton.classList.add('scale-up');
    exploreContainer.classList.add('blur-add');
    setTimeout(() => {
        window.location.href = "./menu.html";
    }, 1000);
}

backButton.addEventListener('mouseenter', playBubble);
backButton.addEventListener('click', () => {
    playBubble();
    backToMenu();
});
