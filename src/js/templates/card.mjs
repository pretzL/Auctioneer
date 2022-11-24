export const cardHTML = (data) => {
  return `
    <div class="card bg-base-100 shadow-xl image-full">
      <figure><img src="${data.media[0]}" alt="Image of ${data.title}" /></figure>
      <div class="card-body">
        <h2 class="card-title">${data.title}</h2>
        <div class="card-actions justify-end">
          <label class="btn bg-dark-green">${data.bids[0].amount}</label>
        </div>
      </div>
    </div>
      `;
};
