import { sortTimeAsc } from "../components/filters/timeFilter.mjs";
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
import { addSortListener } from "../pages/index/sortListeners.mjs";
import { getQueryParams } from "../util/getQueryParams.mjs";
import { loopCardData } from "../components/loopCardData.mjs";

/**
 * Sets up the page router, which handles which code should be ran on each page
 * @example
 * ```js
 * router();
 * // Expect pages to be built with the correct information and elements based on the page name
 * ```
 */
export async function router() {
  const currentPage = location.href;

  // Router-ish
  if (currentPage.match("index.html") || !currentPage.match(".html")) {
    const data = await getListings(`${API_BASE_URL}${API_LISTINGS_URL}${listingsParams}`, options);

    const sorted = sortTimeAsc(data);

    addSortListener(data);

    cardsContainer.innerHTML = "";
    carouselContainer.innerHTML = "";

    loopCardData(sorted, 9);

    for (let c = 0; c < data.length; c++) {
      if (c === 4) {
        break;
      }
      carouselContainer.innerHTML += carouselHTML(data[c], c);
    }

    // Error handling
    const error = getQueryParams("error");

    if (error) {
      pleaseLoginCheck.checked = true;
    }
  }

  if (currentPage.match("profile.html")) {
    if (!loggedIn) {
      location.href = "./index.html?error=true";
    } else {
      // QUERY STRINGS
      const name = getQueryParams("name");

      if (!name) {
        // Get user info
        const userInfo = storage.load("user");

        location.href = `./profile.html?name=${userInfo.name}`;
      } else {
        buildProfile(name);
      }
    }
  }

  if (currentPage.match("listing.html")) {
    // QUERY STRINGS
    const id = getQueryParams("id");

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

  if (currentPage.match("listings.html")) {
    // Get the query value
    const query = getQueryParams("query");

    if (!query) {
      location.href = `./index.html`;
    } else {
      buildListings(query);
    }
  }
}
