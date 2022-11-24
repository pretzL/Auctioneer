import { getListings } from "../listings/read.mjs";
import { options } from "../util/options.mjs";
import { API_BASE_URL, API_LISTINGS_URL, listingsParams } from "../util/variables.mjs";

export async function buildListing(id) {
  const data = await getListings(`${API_BASE_URL}${API_LISTINGS_URL}/${id}${listingsParams}`, options);
  console.log(data);
}
