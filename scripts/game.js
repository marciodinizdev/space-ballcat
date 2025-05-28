const w1 = document.querySelector('#w1');
const w2 = document.querySelector('#w2');
const w3 = document.querySelector('#w3');

// Fragments
let fragmentMax = 100;
let fragmentFound = 0;

// Files
fetch('../data/loreFiles.json')
    .then(response => response.json())
    .then(data => {
        console.log('Arquivos carregados:', data);
    });