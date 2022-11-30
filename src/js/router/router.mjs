import { sortTimeAsc } from "../components/filters/timeFilter.mjs";
import { cardHTML } from "../templates/card.mjs";
import { carouselHTML } from "../templates/carouselCard.mjs";
import { options } from "../util/options.mjs";
import {
  API_BASE_URL,
  API_LISTINGS_URL,
  cardsContainer,
  carouselContainer,
  deleteListingButton,
  editListingForm,
  listingsParams,
  loggedIn,
  pleaseLoginCheck,
} from "../util/variables.mjs";
import * as storage from "../storage/index.mjs";
import { buildProfile } from "../profiles/build.mjs";
import { buildListing } from "../pages/listing.mjs";
import { editListing } from "../listings/update.mjs";
import { deleteListing } from "../listings/delete.mjs";
import { buildListings } from "../pages/listings.mjs";
import { getListings } from "../listings/read.mjs";

export async function router() {
  // Router-ish
  if (location.href.includes("index.html")) {
    const data = await getListings(`${API_BASE_URL}${API_LISTINGS_URL}${listingsParams}`, options);

    const sorted = sortTimeAsc(data);

    cardsContainer.innerHTML = "";
    carouselContainer.innerHTML = "";

    for (let i = 0; i < sorted.length; i++) {
      if (i === 18) {
        break;
      }
      cardsContainer.innerHTML += cardHTML(sorted[i]);
    }

    for (let c = 0; c < data.length; c++) {
      if (c === 4) {
        break;
      }
      carouselContainer.innerHTML += carouselHTML(data[c], c);
    }

    // Error handling
    const queryString = document.location.search;

    const params = new URLSearchParams(queryString);

    const error = params.get("error");

    if (error) {
      pleaseLoginCheck.checked = true;
    }
  }

  if (location.href.includes("profile.html")) {
    if (!loggedIn) {
      location.href = "./index.html?error=true";
    } else {
      // Get user info
      const userInfo = storage.load("user");

      // QUERY STRINGS
      const queryString = document.location.search;

      const params = new URLSearchParams(queryString);

      const name = params.get("name");

      if (!name) {
        location.href = `./profile.html?name=${userInfo.name}`;
      } else {
        buildProfile(name);
      }
    }
  }

  if (location.href.includes("listing.html")) {
    // QUERY STRINGS
    const queryString = document.location.search;

    const params = new URLSearchParams(queryString);

    const id = params.get("id");

    if (!id) {
      location.href = `./index.html`;
    } else {
      buildListing(id);
    }

    // Edit listing
    editListingForm.addEventListener("submit", editListing);

    // Delete listing
    deleteListingButton.addEventListener("click", deleteListing);
  }

  if (location.href.includes("listings.html")) {
    // Get the query value
    const queryString = document.location.search;

    const params = new URLSearchParams(queryString);

    const query = params.get("query");

    if (!query) {
      location.href = `./index.html`;
    } else {
      buildListings(query);
    }
  }
}
