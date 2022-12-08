import { errorMessage } from "../components/error.mjs";
import { getSuggested } from "../listings/read.mjs";
import { cardHTML } from "../templates/card.mjs";
import { options } from "../util/options.mjs";
import { API_BASE_URL, API_LISTINGS_URL, cardsContainer, errorContainer, listingsParams } from "../util/variables.mjs";

export async function handleSuggested(data) {
  try {
    const suggested = await getSuggested(`${API_BASE_URL}${API_LISTINGS_URL}${listingsParams}`, options, data.tags[0].toLowerCase());

    if (suggested.length >= 1) {
      for (let f = 0; f < suggested.length; f++) {
        if (suggested[f].id === data.id) {
          continue;
        }
        if (f === 6) {
          break;
        }
        cardsContainer.innerHTML += cardHTML(suggested[f]);
      }
    } else {
      cardsContainer.innerHTML = errorMessage("No listings match...");
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
