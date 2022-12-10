import { errorMessage } from "../components/error.mjs";
import { cardHTML } from "../templates/card.mjs";
import { userInfoCard } from "../templates/userInfoCard.mjs";
import {
  bidsTitle,
  cardsContainer,
  editMediaForm,
  errorContainer,
  favsContainer,
  favsTitle,
  listingsTitle,
  profileInfo,
  userBids,
  userWins,
  winsTitle,
} from "../util/variables.mjs";
import { getProfile } from "./read.mjs";
import { updateProfile } from "./update.mjs";
import * as storage from "../storage/index.mjs";
import { bidListHTML } from "../templates/bidList.mjs";
import { addProfileSearchBar } from "../components/profileSearchBar.mjs";

/**
 * Builds the profile page using API data
 * @param {array} data data to use to build the page
 * @example
 * ```js
 * buildProfile(apiData);
 * // Expect a profile page to be built using the api data passed into the function
 * ```
 */
export async function buildProfile(data) {
  try {
    // Get user profile
    const userData = await getProfile(data, "");

    const bids = await getProfile(userData.name, "/bids");

    // Clear containers
    userBids.innerHTML = "";
    userWins.innerHTML = "";
    cardsContainer.innerHTML = "";
    favsContainer.innerHTML = "";

    // Add main user information
    profileInfo.innerHTML = userInfoCard(userData);
    bidsTitle.innerHTML = `${userData.name}'s Bids`;
    winsTitle.innerHTML = `${userData.name}'s Wins`;
    listingsTitle.innerHTML = `${userData.name}'s Listings`;

    // Handle wins
    const wins = userData.wins;

    if (wins.length === 0) {
      userWins.innerHTML = errorMessage("User has no wins");
    } else {
      for (let i = 0; i < wins.length; i++) {
        if (i === 3) {
          break;
        }
        userWins.innerHTML += bidListHTML(wins[i]);
      }
    }

    // Handle bids

    if (bids.length === 0) {
      userBids.innerHTML = errorMessage("User has no bids");
    } else {
      for (let c = 0; c < bids.length; c++) {
        if (c === 3) {
          break;
        }
        userBids.innerHTML += bidListHTML(bids[c]);
      }
    }

    // Handle user listing cards
    const listings = await getProfile(data, "/listings");

    if (listings.length === 0) {
      cardsContainer.innerHTML = errorMessage("User has no listings");
    } else {
      for (let c = 0; c < listings.length; c++) {
        cardsContainer.innerHTML += cardHTML(listings[c]);
      }
    }

    // Handle edit profile media
    editMediaForm.addEventListener("submit", updateProfile);

    // Update saved data in localStorage when viewing own profile
    const savedUser = storage.load("user");
    if (userData.name === savedUser.name) {
      storage.save("user", {
        avatar: userData.avatar,
        credits: userData.credits,
        email: userData.email,
        name: userData.name,
      });

      // Handle user favorites cards
      favsTitle.innerHTML = `${userData.name}'s Favorites`;
      const favorites = storage.load("favorites");

      if (favorites.length === 0) {
        favsContainer.innerHTML = errorMessage("User has no listings");
      } else {
        for (let c = 0; c < favorites.length; c++) {
          favsContainer.innerHTML += cardHTML(favorites[c]);
        }
      }
    }

    // Handle profile search bar
    addProfileSearchBar(listings);
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
