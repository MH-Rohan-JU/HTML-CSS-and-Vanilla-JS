'use strict';

const playerName0 = prompt('Player 1: ');
const playerName1 = prompt('Player 2: ');

document.getElementById('name--0').textContent = playerName0;
document.getElementById('name--1').textContent = playerName1;

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
dice.classList.add('hidden');
const rollDice = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

score0.textContent = 0;
score1.textContent = 0;

let current = 0;
let score = [0, 0];
let activePlayer = 0;

function changeActivePlayer() {
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  activePlayer = activePlayer === 1 ? 0 : 1;
}

rollDice.addEventListener('click', () => {
  let diceNo = Math.trunc(Math.random() * 6) + 1;
  // console.log(diceNo);
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNo}.png`;
  if (diceNo !== 1) {
    current += diceNo;
    document.getElementById(`current--${activePlayer}`).textContent = current;
  } else {
    changeActivePlayer();
    current = 0;
    currentScore0.textContent = current;
    currentScore1.textContent = current;
  }
});

hold.addEventListener('click', () => {
  score[activePlayer] += current;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  current = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  document.querySelector('.current-score').textContent = 0;
  dice.classList.add('hidden');

  if (score[activePlayer] > 99) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    dice.classList.add('hidden');
    rollDice.disabled = true;
    hold.disabled = true;
  }
  changeActivePlayer();
});

newGame.addEventListener('click', () => {
  score0.textContent = 0;
  score1.textContent = 0;
  rollDice.disabled = false;
  hold.disabled = false;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  current = 0;
  score = [0, 0];
  activePlayer = 0;
  document.querySelector('.player--winner').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--active');
  dice.classList.add('hidden');
});
