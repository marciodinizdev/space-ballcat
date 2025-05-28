const labContainer = document.querySelector('#lab-container');
const exploreButton = document.querySelector('#explore-button');

const bubble = new Audio('../assets/sound/bubble.mp3');
const labMusic = new Audio('../assets/sound/lab.mp3');

function playBubble() {
    bubble.currentTime = 0;
    bubble.play();
}
function playLab() {
    labMusic.currentTime = 0;
    labMusic.loop = true;
    labMusic.play();
}

function toExplore() {
    labContainer.classList.add("blur-add");
    setTimeout(() => {
        window.location.href = "./explore.html";
    }, 1000);
}

function blurRemove() {
    labContainer.classList.remove('filter-blur');
    labContainer.classList.add('blur-remove');
    setTimeout(() => {
        labContainer.classList.remove('blur-remove');
    }, 500);
}

function labStart() {
    blurRemove();
    playLab();
}

exploreButton.addEventListener('mouseenter', playBubble);
exploreButton.addEventListener('click', () => {
    playBubble();
    toExplore();
});