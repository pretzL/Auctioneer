// API URLs
export const API_BASE_URL = "https://nf-api.onrender.com";
export const API_LISTINGS_URL = "/api/v1/auction/listings";
export const API_PROFILE_URL = "/api/v1/auction/profiles/";
export const API_REGISTER_URL = "/api/v1/auction/auth/register";
export const API_LOGIN_URL = "/api/v1/auction/auth/login";

// API Parameters
export const listingsParams = "?_seller=true&_bids=true";
export const profileParams = "?_listings=true";

// Forms
export const createListingForm = document.querySelector("#create-listing-form");
export const registerForm = document.querySelector("#register-form");
export const loginForm = document.querySelector("#login-form");

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

// Profile page elements
export const profileInfo = document.querySelector("#user-info");
export const userBids = document.querySelector("#user-bids-content");
export const bidsTitle = document.querySelector("#bids-title");
export const listingsTitle = document.querySelector("#user-listings");
