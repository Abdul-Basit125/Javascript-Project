document.addEventListener('DOMContentLoaded', () => {
  let randomNumber = Math.floor(Math.random() * 100) + 1, guessesRemaining = 10;
        guessSubmit = document.querySelector('.guessSubmit'),
        guessesSpan = document.querySelector('.guesses'),
        lastResultSpan = document.querySelector('.lastResult'),
        lowOrHi = document.querySelector('.lowOrHi');

  guessSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    let guess = Number(guessField.value);
    guessesSpan.textContent += `${guess} `;
    lastResultSpan.textContent = --guessesRemaining;
    lowOrHi.textContent = guess === randomNumber ? 'Congratulations! You guessed it!' :
    guessesRemaining === 0 ? `Game over! Number was ${randomNumber}` :
    guess < randomNumber ? 'Too low!' : 'Too high!';
    if (guess === randomNumber || guessesRemaining === 0) setGameOver();
    guessField.value = '';
  });
})
