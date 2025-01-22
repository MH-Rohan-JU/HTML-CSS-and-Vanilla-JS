'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

let score = 20;
let highScore = 0;
document.querySelector('.guess').value = '';

document.querySelector('.check').addEventListener('click', () => {
  const guessedNumber = Number(document.querySelector('.guess').value);
  //   console.log(guessedNumber);
  if (!guessedNumber) {
    document.querySelector('.message').textContent = "🐸 Didn't guess!";
  } else if (guessedNumber === randomNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Guess!';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').disabled = true;
    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  } else if (guessedNumber >= randomNumber + 2) {
    document.querySelector('.message').textContent = '📈 Too High!';
    document.querySelector('.score').textContent = --score;
  } else if (guessedNumber <= randomNumber - 2) {
    document.querySelector('.message').textContent = '📉 Too Low!';
    document.querySelector('.score').textContent = --score;
  } else {
    document.querySelector('.message').textContent = '😬 Too Close!';
    document.querySelector('.score').textContent = --score;
  }
  if (score < 1) {
    document.querySelector('.message').textContent = '😞 You lost the game!';
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.check').disabled = true;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.check').disabled = false;
});
