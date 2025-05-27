// Start Menu
const gameName = document.querySelector('#game-name');
const playBtn = document.querySelector("#play-btn");
const helpBtn = document.querySelector("#help-btn");
const menuContainer = document.querySelector("#menu-container");
const helpModal = document.querySelector("#help-modal");
const closeModalBtn = document.querySelector('#close-modal-btn');

const bubble = new Audio('../assets/sound/bubble.mp3');
const spaceMusic = new Audio('../assets/sound/space.mp3');

function playBubble() {
    bubble.currentTime = 0;
    bubble.play();
}

function playSpace() {
    spaceMusic.currentTime = 0;
    spaceMusic.play();
}

function blurRemove() {
    menuContainer.classList.remove('filter-blur');
    menuContainer.classList.add('blur-remove');
    setTimeout(() => {
        menuContainer.classList.remove('blur-remove');
    }, 500);
}

function animaClick(element) {
    bubble.play();
    element.classList.remove("anima-click");
    
    setTimeout(() => {
        element.classList.add("anima-click");
    }, 50);
}

// Start Menu
function startMenuAnimations() {
    
    blurRemove();
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

function gameStart() {
    
    gameName.classList.add("scale-up");
    playBtn.classList.add("translate-left");
    helpBtn.classList.add("translate-right");
    menuContainer.classList.add("blur-add");
    setTimeout(() => {
        window.location.href = "./explore.html";
    }, 1000);

}

function helpStart() {
    helpModal.classList.remove('hidden');
}
function closeModal() {
    helpModal.classList.add('hidden');
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