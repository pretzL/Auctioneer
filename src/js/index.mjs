// SETUP ROUTER STYLE THINGY

import { login } from "./auth/login.mjs";
import { register } from "./auth/register.mjs";
import { buildHeader } from "./components/header.mjs";
import { cardsContainer, loginForm, registerForm, API_BASE_URL, API_LISTINGS_URL, listingsParams, carouselContainer, createListingForm, searchBar } from "./util/variables.mjs";
import { isUserLoggedIn } from "./auth/isUserLoggedIn.mjs";
import { buildProfile } from "./profiles/build.mjs";
import * as storage from "./storage/index.mjs";
import { getListings } from "./listings/read.mjs";
import { options } from "./util/options.mjs";
import { cardHTML } from "./templates/card.mjs";
import { carouselHTML } from "./templates/carouselCard.mjs";
import { buildListing } from "./pages/listing.mjs";
import { createListing } from "./listings/create.mjs";
import { sortTimeAsc } from "./components/filters/timeFilter.mjs";
import { handleQuery } from "./query/handleQuery.mjs";
import { buildListings } from "./pages/listings.mjs";

// Register form
registerForm.addEventListener("submit", register);

// Login form
loginForm.addEventListener("submit", login);

// Header
const loggedIn = isUserLoggedIn();

if (loggedIn) {
  buildHeader();
  createListingForm.addEventListener("submit", createListing);
}

// Search
searchBar.addEventListener("submit", handleQuery);

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
}

if (location.href.includes("profile.html")) {
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
