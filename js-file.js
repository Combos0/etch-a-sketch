const centerDiv = document.querySelector('#container');

let startButton = document.querySelector('#reset-switch');
startButton.addEventListener('click', () => {
    fillsArray();
});

let removebutton = document.querySelector('#remover');
removebutton.addEventListener('click', () => {
    emptiesArray();
});

function generatesDiv() {
    let etchBlocks = document.createElement('div');
    etchBlocks.classList.add('squares');
    centerDiv.appendChild(etchBlocks);
};

function fillsArray() {
    for (i = 0; i < 256; i++) {
        generatesDiv();
    };
};

function removesDiv() {
    let oldBlock = centerDiv.querySelector('div');
    centerDiv.removeChild(oldBlock);
};

function emptiesArray() {
    for (i = 0; i < 256; i++) {
        removesDiv();
    };
};

fillsArray();

const gridDivs = document.querySelectorAll('.squares');
Array.from(gridDivs).forEach(Element => {
    Element.addEventListener('mouseover', () => {
        Element.classList.add('black');
    });
});