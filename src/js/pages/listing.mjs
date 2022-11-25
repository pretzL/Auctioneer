import { getListings } from "../listings/read.mjs";
import { buildBidInfo } from "../templates/currentBid.mjs";
import { buildSellerInfo } from "../templates/sellerInfo.mjs";
import { options } from "../util/options.mjs";
import { API_BASE_URL, API_LISTINGS_URL, currentBid, listingDesc, listingsParams, listingTitle, sellerInfo } from "../util/variables.mjs";

export async function buildListing(id) {
  const data = await getListings(`${API_BASE_URL}${API_LISTINGS_URL}/${id}${listingsParams}`, options);
  console.log(data);

  // export const currentBid = document.querySelector("#current-bid");
  // export const biddersContainer = document.querySelector("#bidders-container");
  // export const bidTimer = document.querySelector("#bid-timer");

  // Title
  listingTitle.innerText = data.title;

  // Description
  listingDesc.innerText = data.description;

  // Seller info
  sellerInfo.innerHTML = buildSellerInfo(data);

  // Current bid
  currentBid.innerHTML = buildBidInfo(data);
}
