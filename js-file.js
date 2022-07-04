const centerDiv = document.querySelector('#container');

let startButton = document.querySelector('#reset-switch');
startButton.addEventListener('click', () => {
    fillsArray();
});

let removebutton = document.querySelector('#remover');
removebutton.addEventListener('click', () => {
    removesDiv();
});

function generatesDiv() {
    let etchBlocks = document.createElement('div');
    etchBlocks.classList.add('squares');
    centerDiv.appendChild(etchBlocks);
};

function fillsArray() {
    for (i = 0; i < 255; i++) {
        generatesDiv();
    };
};

function removesDiv() {
    
}