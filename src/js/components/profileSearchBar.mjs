import { search } from "../query/search.mjs";
import { cardHTML } from "../templates/card.mjs";
import { cardsContainer, profileSearchBar } from "../util/variables.mjs";

export function addProfileSearchBar(data) {
  profileSearchBar.addEventListener("input", async (e) => {
    const value = e.target.value;

    const result = await search(data, value);

    cardsContainer.innerHTML = "";

    for (let f = 0; f < result.length; f++) {
      cardsContainer.innerHTML += cardHTML(result[f]);
    }
  });

  profileSearchBar.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
