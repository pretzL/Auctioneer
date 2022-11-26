import { options } from "../util/options.mjs";
import { API_BASE_URL, API_PROFILE_URL, profileParams, listingsParams } from "../util/variables.mjs";

export async function getProfile(name) {
  const response = await fetch(`${API_BASE_URL}${API_PROFILE_URL}/${name}${profileParams}`, options);
  const data = await response.json();

  return data;
}

export async function getProfileListings(name) {
  const response = await fetch(`${API_BASE_URL}${API_PROFILE_URL}/${name}/listings${listingsParams}`, options);
  const data = await response.json();

  return data;
}
