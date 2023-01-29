const squareCount = 1015;
const board = document.querySelector('#board');
const button = document.querySelector('.clearButton');

const colors = [
    '#12FF00', '#FF5F00', 'FFBE00', 
    '#CBFF00', '#51FF00', '#00FF68', 
    '#00FFD9', '#008CFF', '#000EFF', 
    '#5F00FF', '#BE00FF', '#BE00FF', 
    '#FF008C', '#FF0036', '#FF0000',
];

for(let i = 0; i < squareCount; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        const color = randomColor();
        square.style.background = color;
        square.style.boxShadow = `0 0  10px ${color}, 0 0 10px ${color}`;

        setTimeout(() => {
            square.style.boxShadow = `0 0  0 ${color}, 0 0 0 ${color}`;
        }, 3000);
    });

    button.addEventListener('click', () => {
        square.style.background = `#1d1d1d`;
        square.style.boxShadow = ` 0 0 0 #000, 0 0 0 #000`;
        square.style.transition = `0s`;

    });

    board.append(square);
}


function randomColor() {
    const index = Math.floor(Math.random() * colors.length);

    return colors[index];
}