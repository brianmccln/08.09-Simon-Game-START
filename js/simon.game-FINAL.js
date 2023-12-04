const buttons = document.querySelectorAll('button');
const h1 = document.querySelector('h1');
let clicks = -1; // to keep track of total clicks and see if they match sequences
let colorSequenceArr = []; // to hold colors as they come up ['green', 'red', etc.]

document.addEventListener('keydown', evt => {
    sequenceArr = [];
    if(clicks != -1) h1.textContent = "Smash Any Key to Play Again..!";
    clicks = -1;
    generateRandom();
});

buttons.forEach(e => {
    e.addEventListener('click', () => {
        clicks++;
        if(e.id == colorSequenceArr[clicks]) {
            new Audio(`audio/${e.id}.mp3`).play();
            if(clicks == colorSequenceArr.length-1) {
                h1.textContent = `Keep Going! Correct Count: ${clicks+1}`;
                generateRandom(); // add a new color to the sequence
            }
        } else { // wrong answer:
            new Audio(`audio/wrong.mp3`).play();
            h1.textContent = `Game Over! You got ${clicks} right.`;
        }
    });
});

function generateRandom() {
    setTimeout(() => {
        let r = Math.floor(Math.random() * buttons.length);
        buttons[r].style.opacity = "0";
        setTimeout(() => buttons[r].style.opacity = "1", 500);
        colorSequenceArr.push(buttons[r].id);
        clicks = -1;
        console.log(colorSequenceArr); // sequence as array of colors
    }, 500);
};

