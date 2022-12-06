import { cardHTML } from "../templates/card.mjs";
import { cardsContainer } from "../util/variables.mjs";

export function loopCardData(data) {
  for (let i = 0; i < data.length; i++) {
    cardsContainer.innerHTML += cardHTML(data[i]);
  }
}
