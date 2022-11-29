// API URLs
export const API_BASE_URL = "https://nf-api.onrender.com";
export const API_LISTINGS_URL = "/api/v1/auction/listings";
export const API_PROFILE_URL = "/api/v1/auction/profiles";
export const API_REGISTER_URL = "/api/v1/auction/auth/register";
export const API_LOGIN_URL = "/api/v1/auction/auth/login";

// API Parameters
export const listingsParams = "?_seller=true&_bids=true";
export const profileParams = "?_listings=true";

// Forms
export const createListingForm = document.querySelector("#create-listing-form");
export const registerForm = document.querySelector("#register-form");
export const loginForm = document.querySelector("#login-form");
export const editMediaForm = document.querySelector("#edit-media-form");
export const editListingForm = document.querySelector("#edit-listing-form");

// Checkboxes
export const createListingCheck = document.querySelector("#create-listing-modal");
export const registerCheck = document.querySelector("#register-modal");
export const loginCheck = document.querySelector("#login-modal");

// Header elements
export const userDropdown = document.querySelector("#user-dropdown");
export const headerProfileImg = document.querySelector("#header-profile-img");

// Page elements
export const cardsContainer = document.querySelector("#cards-container");
export const carouselContainer = document.querySelector("#carousel-container");
export const searchBar = document.querySelector("#search-bar");
export const profileSearchBar = document.querySelector("#profile-search-bar");
export const urlInputContainer = document.querySelector("#url-input-container");
export const mediaInput = document.querySelectorAll(`input[data-type="url"]`);
export const favoritesButton = document.querySelector("#favorites-button");
export const editButton = document.querySelector("#edit-button");
export const deleteButton = document.querySelector("#delete-button");
export const deleteListingButton = document.querySelector("#delete-listing-button");
export const deleteListingModalContent = document.querySelector("#delete-listing-modal-content");

// Profile page elements
export const profileInfo = document.querySelector("#user-info");
export const userBids = document.querySelector("#user-bids-content");
export const bidsTitle = document.querySelector("#bids-title");
export const userWins = document.querySelector("#user-wins-content");
export const winsTitle = document.querySelector("#wins-title");
export const listingsTitle = document.querySelector("#user-listings");

// Listing page elements
export const listingTitle = document.querySelector("#listing-h1");
export const listingDesc = document.querySelector("#listing-desc");
export const sellerInfo = document.querySelector("#seller-info");
export const currentBid = document.querySelector("#current-bid");
export const bidHistory = document.querySelector("#bid-history");
export const bidTimer = document.querySelector("#bid-timer");
export const carouselCardsContainer = document.querySelector("#carousel-cards-container");

// Countdown timer
export const daysContainer = document.querySelector("#days-value");
export const hoursContainer = document.querySelector("#hours-value");
export const minsContainer = document.querySelector("#mins-value");
export const secContainer = document.querySelector("#sec-value");
