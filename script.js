'use strict';
const displayMessage = (message) =>
  (document.querySelector('.message').textContent = message);

//Math random to find the random number
let secretNumber = Math.round(Math.random() * 20);
let score = 20;

//Check button functionality
document.querySelector('.check-btn').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess-number').value);
  if (!guess) {
    displayMessage('⛔️ Please input your number ⛔️');
  } else if (guess < 1 || guess > 20) {
    displayMessage('Please input number from 1 to 20');
  } else if (guess === secretNumber) {
    displayMessage('🎉 You winnnn');
    document.querySelector('.wrapper').style.backgroundColor = '#F5A1E7';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? displayMessage('📈 Too high')
          : displayMessage('📉 Too low')
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('⏱ You lost ');
      document.querySelector('.wrapper').style.backgroundColor = '#ffebcd';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Reset button functionality
document.querySelector('.reset')?.addEventListener('click', () => {
  secretNumber = Math.round(Math.random() * 20);
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess-number').value = '';
  document.querySelector('.wrapper').style.backgroundColor = '#0addcc';
});
