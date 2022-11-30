import { options } from "../util/options.mjs";
import { API_BASE_URL, API_PROFILE_URL, profileParams, listingsParams } from "../util/variables.mjs";

// Get a single profile
export async function getProfile(name, type) {
  const response = await fetch(`${API_BASE_URL}${API_PROFILE_URL}/${name}${type}${profileParams}`, options);
  const data = await response.json();

  return data;
}
