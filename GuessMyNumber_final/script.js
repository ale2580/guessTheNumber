'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  displayMessage('Start Guessing...');

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === number) {
    displayMessage('Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess < number) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too Low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess > number) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too High';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
