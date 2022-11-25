export const buildBidInfo = (data) => {
  return `
      <div class="flex gap-4 items-center justify-between">
        <div class="flex flex-col gap-2 w-full">
          <h3 class="text-xl">Current bid</h3>
          <h4 class="text-lg font-semibold">${data.bids[0].bidderName}</h3>
          <p>Amount: ${data.bids[0].amount}</p>
          <p>${data.bids[0].created}</p>
        </div>
        <div class="form-control self-end">
          <label class="label">
            <span class="label-text text-white">Enter amount</span>
          </label>
          <div class="input-group">
            <input type="number" value="${data.bids[0].amount + 10}" class="input input-bordered text-black" />
            <button id="bid-button" class="btn btn-square bg-dark-green text-white">
              Bid
            </button>
          </div>
        </div>
      </div>
      `;
};
