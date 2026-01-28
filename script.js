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
  // Current time in UTC
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

  // Birthday: Feb 28 (IST)
  let birthday = new Date(
    Date.UTC(istNow.getUTCFullYear(), 1, 28)
  );

  // If birthday already passed this year, move to next year
  if (todayIST > birthday.getTime()) {
    birthday = new Date(
      Date.UTC(istNow.getUTCFullYear() + 1, 1, 28)
    );
  }

  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor((birthday.getTime() - todayIST) / oneDay);
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
