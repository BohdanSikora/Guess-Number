'use strict';
 
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '))), Correct Number!';

// document.querySelector('.number') = 12;
// document.querySelector('.score').textContent = 10;


// document.querySelector('quess').value = 22; 
// console.log(document.querySelector('.guess').value);
 
// const x = function() {
//     console.log(22)
// }
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
console.log(guess, typeof guess)
 
if (!guess) { 
     document.querySelector('.message').textContent = '👺 No number!';
     // when ther is not input 
 } else if (guess === secretNumber) {
    document.querySelector('.message').textContent ='))), Correct Number!'
    document.querySelector('.message').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#608b37';
    document.querySelector('.number').style.width = '38rem';

 } else if (guess > secretNumber) {
     if (score > 1) {
     document.querySelector('.message').textContent = 'Too high!';
     score--;
     document.querySelector('.score').textContent = score;
 }  else {
    document.querySelector('.message').textContent = 'You lost the game'
    document.querySelector('.score').textContent = 0 ;
    }   
} else if (guess < secretNumber) {
    if (score > 1) {
     document.querySelector('.message').textContent = 'Too Low!'
     score--;
     document.querySelector('.score').textContent = score;
} else {
    document.querySelector('.message').textContent = 'You lost the game'
    document.querySelector('.score').textContent = 0 ;
    }   
}
});

