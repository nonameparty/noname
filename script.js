// Countdown Timer
const countdownDate = new Date("Jun 26, 2026 00:00:00").getTime();

const countdownFunction = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown-timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown-timer").innerHTML = "EVENTO INIZIATO!";
  }
}, 1000);
