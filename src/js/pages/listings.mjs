import { search } from "../query/search.mjs";
import { cardHTML } from "../templates/card.mjs";
import { cardsContainer } from "../util/variables.mjs";
import { getListings } from "../listings/read.mjs";
import { options } from "../util/options.mjs";
import { API_BASE_URL, API_LISTINGS_URL, listingsParams } from "../util/variables.mjs";
import { observer } from "../components/infiniteScroll.mjs";

export async function buildListings(query) {
  const data = await getListings(`${API_BASE_URL}${API_LISTINGS_URL}${listingsParams}`, options);
  const result = await search(data, query);

  cardsContainer.innerHTML = "";

  for (let i = 0; i < result.length; i++) {
    if (i === 9) {
      break;
    }
    cardsContainer.innerHTML += cardHTML(result[i]);
  }

  observer(result);
}
