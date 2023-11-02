const startBtn = document.getElementById("startBtn");
const timerDisplay = document.getElementById("timerDisplay");

startBtn.addEventListener("click", startTimer);

function startTimer() {
  const durationInput = document.getElementById("duration");
  const durationInSeconds = parseInt(durationInput.value);

  if (!isNaN(durationInSeconds)) {
    let timer = durationInSeconds;

    const interval = setInterval(function() {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;

      timerDisplay.textContent = `Time remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      if (--timer < 0) {
        clearInterval(interval);
        timerDisplay.textContent = "Time Over!";
      }
    }, 1000);
  } else {
    timerDisplay.textContent = "Please enter a valid number in seconds.";
  }
}
