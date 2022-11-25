import { sortAmountAsc } from "../components/filters/amountFilter.mjs";
import { getListings } from "../listings/read.mjs";
import { bidListHTML } from "../templates/bidList.mjs";
import { carouselCardsHTML } from "../templates/carouselCardsContainer.mjs";
import { buildBidInfo } from "../templates/currentBid.mjs";
import { buildSellerInfo } from "../templates/sellerInfo.mjs";
import { options } from "../util/options.mjs";
import { API_BASE_URL, API_LISTINGS_URL, bidHistory, carouselCardsContainer, currentBid, listingDesc, listingsParams, listingTitle, sellerInfo } from "../util/variables.mjs";

export async function buildListing(id) {
  const data = await getListings(`${API_BASE_URL}${API_LISTINGS_URL}/${id}${listingsParams}`, options);
  console.log(data);

  // export const bidTimer = document.querySelector("#bid-timer");

  // Title
  listingTitle.innerText = data.title;

  // Description
  listingDesc.innerText = data.description;

  // Seller info
  sellerInfo.innerHTML = buildSellerInfo(data);

  // Carousel images
  carouselCardsContainer.innerHTML = "";

  let imageLength = data.media.length;
  if (data.media.length < 3) {
    imageLength = 3;
  }

  for (let c = 0; c < imageLength; c++) {
    carouselCardsContainer.innerHTML += carouselCardsHTML(data.media);
    if (c === 0) {
      carouselCardsContainer.firstElementChild.dataset.carouselItem = "active";
      carouselCardsContainer.firstElementChild.classList.remove("hidden");
    }
  }

  // Current bid
  currentBid.innerHTML = buildBidInfo(data);

  // Bid history container
  const bidders = sortAmountAsc(data.bids);
  console.log(bidders);

  bidHistory.innerHTML = "";

  for (let i = 0; i < bidders.length; i++) {
    if (i === 0) {
      continue;
    }
    bidHistory.innerHTML += bidListHTML(bidders[i]);
  }

  // Suggested listings
  // Add fetch on tags later?
}
