const centerDiv = document.querySelector('#container');

let startButton = document.querySelector('#reset-switch');
startButton.addEventListener('click', () => {
    asksForSize();
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

// takes the value from the squared user input and creates the right amount of cells
function fillsArray(newGridSize) {
    for (i = 0; i < newGridSize; i++) {
        generatesDiv();
    };
    addsHover();
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

//makes every div in the grid able to change color
function addsHover() {
    let gridDivs = document.querySelectorAll('.squares');
    Array.from(gridDivs).forEach(Element => {
        Element.addEventListener('mouseover', () => {
            Element.classList.add('black');
        });
    });
};

//makes the grid the appropriate size for the user
function asksForSize() {
    let userGridSize = prompt('Enter a numerical grid size!');
    if (userGridSize >= 101) {
        alert('Grid too big! Choose a smaller size.');
        asksForSize();
    } else if (userGridSize <= 9) {
        alert('Grid too small! Choose a bigger size.');
        asksForSize();
    } else if (isNaN(userGridSize) === true) {
        alert('That was not a number! Try again.');
        asksForSize();
    } else {
        // sets the apropriate size for the rows and columns in css 
        centerDiv.setAttribute('style', `grid-template-columns: repeat(${userGridSize}, 1fr);
         grid-template-rows: repeat(${userGridSize}, 1fr);`);
         let newGridSize = squaresUserGrid(userGridSize); // think I did this right :)
         fillsArray(newGridSize);
    };
};

// takes the input given and squares it so the grid is the right amount of cells
function squaresUserGrid(userGridSize) {
    let result = (userGridSize * userGridSize);
    return result;
};

asksForSize();