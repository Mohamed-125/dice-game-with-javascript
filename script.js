'use strict';

const rollDiceBtn = document.querySelector('.btn--roll');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const name0 = document.querySelector('#name--0');
const name1 = document.querySelector('#name--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const holdBtn = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');

rollDiceBtn.addEventListener('click', () => {
  let diceNumber = Math.floor(Math.random() * 6 + 1);
  diceImg.style.display = 'block';
  diceImg.src = `dice-${diceNumber}.png`;
  if (player0.classList.contains('player--active')) {
    score0.innerText = Number(score0.innerText) + Number(diceNumber);
    if (diceNumber === 1) {
      score0.innerText = 0;
    }
  } else {
    score1.innerText = Number(score1.innerText) + Number(diceNumber);
    if (diceNumber === 1) {
      score1.innerText = 0;
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (player0.classList.contains('player--active')) {
    currentScore0.innerText =
      Number(currentScore0.innerText) + Number(score0.innerText);
    score0.innerText = 0;
    if (Number(currentScore0.innerText) >= 100) {
      name0.innerText = 'Winner';
    }
  } else {
    currentScore1.innerText =
      Number(currentScore1.innerText) + Number(score1.innerText);
    score1.innerText = 0;
    if (Number(currentScore1.innerText) === 100) {
      name1.innerText = 'Winner';
    }
  }

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
});

newBtn.addEventListener('click', () => {
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  score1.innerText = 0;
  score0.innerText = 0;
  currentScore0.innerText = 0;
  currentScore1.innerText = 0;
  name0.innerText = 'player 1';
  name1.innerText = 'player 2';
  diceImg.style.display = 'none';
});
