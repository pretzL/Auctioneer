import { bidTimer, daysContainer, hoursContainer, minsContainer, secContainer } from "../util/variables.mjs";

export function countdownTimer(date) {
  const dateFix = new Date(date).getTime();

  const timer = setInterval(() => {
    const today = new Date().getTime();

    const timeLeft = dateFix - today;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

    daysContainer.style.setProperty("--value", days);
    hoursContainer.style.setProperty("--value", hours);
    minsContainer.style.setProperty("--value", mins);
    secContainer.style.setProperty("--value", secs);

    if (timeLeft < 0) {
      clearInterval(timer);
      bidTimer.innerHTML = `
            <div class="p-2 bg-dark-green text-inherit justify-center items-center rounded-box text-neutral-content">Bidding ended</div>
            `;
    }
  }, 1000);
}
