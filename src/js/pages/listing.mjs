import { createBid } from "../bid/create.mjs";
import { sortAmountAsc } from "../components/filters/amountFilter.mjs";
import { getListings } from "../listings/read.mjs";
import { bidListHTML } from "../templates/bidList.mjs";
import { carouselCardsHTML } from "../templates/carouselCardsContainer.mjs";
import { buildBidInfo } from "../templates/currentBid.mjs";
import { buildSellerInfo } from "../templates/sellerInfo.mjs";
import { options } from "../util/options.mjs";
import {
  API_BASE_URL,
  API_LISTINGS_URL,
  bidHistory,
  cardsContainer,
  carouselCardsContainer,
  currentBid,
  deleteButton,
  editButton,
  favoritesButton,
  listingDesc,
  listingsParams,
  listingTitle,
  loggedIn,
  sellerInfo,
  userInfo,
} from "../util/variables.mjs";
import { getListingToEdit } from "../listings/update.mjs";
import { countdownTimer } from "../components/countdown.mjs";
import { errorMessage } from "../components/error.mjs";
import { addCarouselListeners } from "../components/carousel.mjs";
import { handleSuggested } from "../query/suggested.mjs";
import { handleFav } from "../favorites/handle.mjs";
import { setTitle } from "../favorites/find.mjs";

/**
 * Builds the listing page using a listing ID
 * @param {string} id id for the listing to build
 * @example
 * ```js
 * buildListing("1234");
 * // Expect to build the listing page for the listing with id "1234"
 * ```
 */
export async function buildListing(id) {
  const data = await getListings(`${API_BASE_URL}${API_LISTINGS_URL}/${id}${listingsParams}`, options);

  // Hide unnecessary buttons
  if (userInfo) {
    if (userInfo.name === data.seller.name) {
      favoritesButton.classList.add("hidden");
      editButton.classList.remove("hidden");
      deleteButton.classList.remove("hidden");
    }
  }

  // Title
  listingTitle.innerText = data.title;

  // Description
  listingDesc.innerText = data.description;

  // Seller info
  sellerInfo.innerHTML = buildSellerInfo(data);

  // Carousel images
  carouselCardsContainer.innerHTML = "";

  let image = data.media;
  if (data.media.length < 1) {
    image = ["https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png"];
  }

  for (let c = 0; c < image.length; c++) {
    carouselCardsContainer.innerHTML += carouselCardsHTML(image[c]);
  }

  // Current bid
  currentBid.innerHTML = buildBidInfo(data);

  const createBidForm = document.querySelector("#create-bid-form");
  const createBidButton = document.querySelector("#bid-button");
  if (loggedIn) {
    createBidForm.addEventListener("submit", createBid);
  } else {
    createBidButton.addEventListener("click", () => {
      location.href = "./index.html?error=true";
    });
  }

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
    handleSuggested(data);
  } else {
    cardsContainer.innerHTML = errorMessage("No listings match...");
  }

  // Edit listing
  editButton.addEventListener("click", getListingToEdit(data));

  // Carousel

  // Handle button for carousel sliding
  addCarouselListeners();

  // Favorites button
  favoritesButton.addEventListener("click", (e) => {
    handleFav(e.target, data);
  });

  favoritesButton.innerText = setTitle(data);
}
