// =========================
// Screen transition logic
// =========================

const tapScreen = document.getElementById("tap-screen");
const countdownScreen = document.getElementById("countdown-screen");
const countdownText = document.getElementById("countdown-text");

tapScreen.addEventListener("click", () => {
  tapScreen.classList.remove("active");
  countdownScreen.classList.add("active");
});

// =========================
// Countdown logic (IST, stops at Feb 27)
// =========================

function calculateDaysLeft() {
  const now = new Date();

  // Convert to India Standard Time (UTC + 5:30)
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istNow = new Date(now.getTime() + istOffset);

  // IST midnight today
  const todayIST = Date.UTC(
    istNow.getUTCFullYear(),
    istNow.getUTCMonth(),
    istNow.getUTCDate()
  );

  // Countdown target: Feb 27 (IST)
  let targetDate = new Date(
    Date.UTC(istNow.getUTCFullYear(), 1, 27)
  );

  // If Feb 27 already passed, move to next year
  if (todayIST > targetDate.getTime()) {
    targetDate = new Date(
      Date.UTC(istNow.getUTCFullYear() + 1, 1, 27)
    );
  }

  const oneDay = 1000 * 60 * 60 * 24;

  return Math.floor((targetDate.getTime() - todayIST) / oneDay);
}

// =========================
// Update UI
// =========================

function updateCountdown() {
  const daysLeft = calculateDaysLeft();

  if (daysLeft < 0) {
    countdownText.innerHTML = "Happy Birthday Sweeshti ❤️🎉";
  } else if (daysLeft === 0) {
    countdownText.innerHTML = "0 days to go Sweeshti <3";
  } else {
    countdownText.innerHTML = `${daysLeft} days to go Sweeshti <3`;
  }
}

// Initial load
updateCountdown();

// Re-check every hour
setInterval(updateCountdown, 1000 * 60 * 60);
