import { errorMessage } from "../components/error.mjs";
import { sortAmountAsc } from "../components/filters/amountFilter.mjs";
import { timeAgo } from "../components/timeAgo.mjs";

export const buildBidInfo = (data) => {
  let body;
  let amount = 0;

  if (data.bids.length <= 0) {
    body = errorMessage("No bids yet");
  } else {
    const bidders = sortAmountAsc(data.bids);
    const dateFix = timeAgo(bidders[0].created);

    body = `
      <div class="flex flex-col gap-2 w-full">
        <h3 class="text-xl">Current bid</h3>
        <h4 class="text-lg font-semibold">${bidders[0].bidderName}</h3>
        <p>Amount: ${bidders[0].amount}</p>
        <p>${dateFix}</p>
      </div>`;
  }

  return `
        <div class="flex gap-4 items-center justify-between">
          ${body}
          <div class="form-control self-end">
            <label class="label">
              <span class="label-text text-white">Enter amount</span>
            </label>
            <div class="input-group">
              <input type="number" value="${amount + 10}" class="input input-bordered text-black" />
              <button id="bid-button" class="btn btn-square bg-dark-green text-white">Bid</button>
            </div>
          </div>
        </div>
        `;
};
