const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');


let textSize = 16;

text.style.backgroundColor = 'grey';


function textIncrease() {
    textSize++;
    text.style.fontSize = textSize + 'px';
}

function textDecrease() {
    textSize--;
    text.style.fontSize = textSize + 'px';
}

btnIncrease.addEventListener('click', textIncrease);
btnDecrease.addEventListener('click', textDecrease);