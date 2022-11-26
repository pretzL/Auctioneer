import { search } from "../query/search.mjs";
import { cardHTML } from "../templates/card.mjs";
import { cardsContainer } from "../util/variables.mjs";

export async function buildListings(query) {
  const data = await search(query);

  cardsContainer.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    cardsContainer.innerHTML += cardHTML(data[i]);
  }
}
