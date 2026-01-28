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

  // Use UTC to avoid timezone issues
  const todayUTC = Date.UTC(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  let birthday = new Date(today.getFullYear(), 1, 28); // Feb 28

  if (today > birthday) {
    birthday = new Date(today.getFullYear() + 1, 1, 28);
  }

  const birthdayUTC = Date.UTC(
    birthday.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );

  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor((birthdayUTC - todayUTC) / oneDay);
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
