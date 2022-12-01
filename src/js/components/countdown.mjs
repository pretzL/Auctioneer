import { bidTimer, daysContainer, hoursContainer, minsContainer, secContainer } from "../util/variables.mjs";

// Inspired by https://www.w3schools.com/howto/howto_js_countdown.asp

export function countdownTimer(date) {
  // Parse the endsAt date from the listing
  const dateFix = new Date(date).getTime();

  const timer = setInterval(() => {
    const today = new Date().getTime();

    // Compare today and endsAt
    const timeLeft = dateFix - today;

    // Set up the countdown timer
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

    daysContainer.style.setProperty("--value", days);
    hoursContainer.style.setProperty("--value", hours);
    minsContainer.style.setProperty("--value", mins);
    secContainer.style.setProperty("--value", secs);

    // Fallback for if the timer has run out
    if (timeLeft < 0) {
      clearInterval(timer);
      bidTimer.innerHTML = `
            <div class="btn bg-dark-green shadow-lg text-white text-md">Bidding ended</div>
            `;
    }
  }, 1000);
}
