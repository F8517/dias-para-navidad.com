document.addEventListener("DOMContentLoaded", function () {
  const targetDate = new Date("December 25, 2023").getTime();
  const countdownContainer = document.getElementById("countdown-container");
  const christmasMessage = document.getElementById("christmas-message");

  function updateCountdown() {
    const currentDate = new Date().getTime();
    const daysLeft = Math.ceil((targetDate - currentDate) / (1000 * 60 * 60 * 24));

    if (daysLeft <= 0 && currentDate < targetDate) {
      // It's Christmas Day!
      countdownContainer.style.display = "none"; // Hide the countdown container
      christmasMessage.style.display = "block"; // Show the Christmas message
    } else {
      document.getElementById("countdown").textContent = daysLeft;
      christmasMessage.style.display = "none"; // Hide the Christmas message if it's not Christmas Day
    }
  }

  // Update the countdown immediately
  updateCountdown();

  // Update the countdown and Christmas message every 5 milliseconds
  setInterval(updateCountdown, 5);
});

function playEasterEggSound() {
  var audio = new Audio('sfx.wav');
  audio.play();
}

a2a_config = {
      onclick: 1, // Open share popups in a new window
    };