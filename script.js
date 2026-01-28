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
// Countdown logic
// =========================

// Birthday: 28 February 2026
const birthdayMonth = 1; // February (0-based index)
const birthdayDay = 28;

function calculateDaysLeft() {
  const today = new Date();
  const currentYear = today.getFullYear();

  let birthday = new Date(currentYear, birthdayMonth, birthdayDay);

  // If birthday already passed this year, move to next year
  if (today > birthday) {
    birthday = new Date(currentYear + 1, birthdayMonth, birthdayDay);
  }

  // Normalize times to midnight
  const oneDay = 1000 * 60 * 60 * 24;
  const todayMidnight = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const birthdayMidnight = new Date(
    birthday.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );

  const diffTime = birthdayMidnight - todayMidnight;
  return Math.round(diffTime / oneDay);
}

function updateCountdown() {
  const daysLeft = calculateDaysLeft();

  if (daysLeft <= 0) {
    countdownText.innerHTML = "Happy Birthday Sweesthi ❤️🎉";
  } else {
    countdownText.innerHTML = `${daysLeft} days to go Sweesthi <3`;
  }
}

// Initial load
updateCountdown();

// Update once per day (safety)
setInterval(updateCountdown, 1000 * 60 * 60);
