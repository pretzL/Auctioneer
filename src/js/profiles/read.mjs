import { options } from "../util/options.mjs";
import { API_BASE_URL, API_PROFILE_URL, profileParams, listingsParams } from "../util/variables.mjs";

// Get a single profile
export async function getProfile(name) {
  const response = await fetch(`${API_BASE_URL}${API_PROFILE_URL}/${name}${profileParams}`, options);
  const data = await response.json();

  return data;
}

// Get the user's listings
export async function getProfileListings(name) {
  const response = await fetch(`${API_BASE_URL}${API_PROFILE_URL}/${name}/listings${listingsParams}`, options);
  const data = await response.json();

  return data;
}

// Get the user's bids
export async function getBids(name) {
  const response = await fetch(`${API_BASE_URL}${API_PROFILE_URL}/${name}/bids${profileParams}`, options);
  const data = await response.json();

  return data;
}
