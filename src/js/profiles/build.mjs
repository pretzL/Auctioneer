import { errorMessage } from "../components/error.mjs";
import { cardHTML } from "../templates/card.mjs";
import { userInfoCard } from "../templates/userInfoCard.mjs";
import { bidsTitle, cardsContainer, editMediaForm, listingsTitle, profileInfo, userBids } from "../util/variables.mjs";
import { getProfile, getProfileListings } from "./read.mjs";
import { updateProfile } from "./update.mjs";
import * as storage from "../storage/index.mjs";

export async function buildProfile(data) {
  // Get user profile
  const userData = await getProfile(data);

  // Clear containers
  userBids.innerHTML = "";
  cardsContainer.innerHTML = "";

  // Add main user information
  profileInfo.innerHTML = userInfoCard(userData);
  bidsTitle.innerHTML = `${userData.name}'s Bids`;
  listingsTitle.innerHTML = `${userData.name}'s Listings`;

  // Handle wins
  const wins = userData.wins;

  if (wins.length === 0) {
    userBids.innerHTML = errorMessage("User has no wins");
  } else {
    for (let i = 0; i < wins.length; i++) {
      if (i === 3) {
        break;
      }
      userBids.innerHTML += bidListHTML(wins[i]);
    }
  }

  // Handle user listing cards
  const listings = await getProfileListings(data);

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
  }
}
