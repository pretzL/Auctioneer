import { createBid } from "../bid/create.mjs";
import { sortAmountAsc } from "../components/filters/amountFilter.mjs";
import { timeUntil } from "../components/timeUntil.mjs";
import { getListings, getSuggested } from "../listings/read.mjs";
import { bidListHTML } from "../templates/bidList.mjs";
import { carouselCardsHTML } from "../templates/carouselCardsContainer.mjs";
import { buildBidInfo } from "../templates/currentBid.mjs";
import { buildSellerInfo } from "../templates/sellerInfo.mjs";
import { options } from "../util/options.mjs";
import {
  API_BASE_URL,
  API_LISTINGS_URL,
  bidHistory,
  bidTimer,
  cardsContainer,
  carouselCardsContainer,
  currentBid,
  deleteButton,
  editButton,
  favoritesButton,
  listingDesc,
  listingsParams,
  listingTitle,
  sellerInfo,
} from "../util/variables.mjs";
import * as storage from "../storage/index.mjs";
import { getListingToEdit } from "../listings/update.mjs";
import { cardHTML } from "../templates/card.mjs";
import { countdownTimer } from "../components/countdown.mjs";
import { errorMessage } from "../components/error.mjs";

export async function buildListing(id) {
  const data = await getListings(`${API_BASE_URL}${API_LISTINGS_URL}/${id}${listingsParams}`, options);

  // Grab user info
  const userInfo = storage.load("user");

  // Hide unnecessary buttons
  if (userInfo.name === data.seller.name) {
    favoritesButton.classList.add("hidden");
    editButton.classList.remove("hidden");
    deleteButton.classList.remove("hidden");
  }

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
    carouselCardsContainer.innerHTML += carouselCardsHTML(data.media[c]);
    if (c === 0) {
      carouselCardsContainer.firstElementChild.dataset.carouselItem = "active";
      carouselCardsContainer.firstElementChild.classList.remove("hidden");
    }
  }

  // Current bid
  currentBid.innerHTML = buildBidInfo(data);
  const createBidForm = document.querySelector("#create-bid-form");
  createBidForm.addEventListener("submit", createBid);

  // Bid history container
  const bidders = sortAmountAsc(data.bids);

  bidHistory.innerHTML = "";

  for (let i = 0; i < bidders.length; i++) {
    if (i === 0) {
      continue;
    }
    if (i === 3) {
      break;
    }
    bidHistory.innerHTML += bidListHTML(bidders[i]);
  }

  // Bid Timer
  countdownTimer(data.endsAt);

  // Suggested listings
  cardsContainer.innerHTML = "";

  if (data.tags[0]) {
    const suggested = await getSuggested(`${API_BASE_URL}${API_LISTINGS_URL}${listingsParams}`, options, data.tags[0]);

    for (let f = 0; f < suggested.length; f++) {
      if (suggested[f].title === data.title) {
        continue;
      }
      if (f === 6) {
        break;
      }
      cardsContainer.innerHTML += cardHTML(suggested[f]);
    }
  } else {
    cardsContainer.innerHTML = errorMessage("No listings match...");
  }

  // Edit listing
  editButton.addEventListener("click", getListingToEdit(data));
}
