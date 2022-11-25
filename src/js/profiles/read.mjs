import { options } from "../util/options.mjs";
import { API_BASE_URL, API_PROFILE_URL, profileParams } from "../util/variables.mjs";

export async function getProfile(name) {
  const response = await fetch(`${API_BASE_URL}${API_PROFILE_URL}/${name}${profileParams}`, options);
  const data = await response.json();
  console.log(data);
  return data;
}
