import { sortMonth } from "../../components/filters/monthFilter.mjs";
import { sortTimeAsc } from "../../components/filters/timeFilter.mjs";
import { sortTitleAsc, sortTitleDesc } from "../../components/filters/titleFilter.mjs";
import { sortToday } from "../../components/filters/todayFilter.mjs";
import { loopCardData } from "../../components/loopCardData.mjs";
import { aToZSort, cardsContainer, monthSort, timeSortButton, todaySort, zToASort } from "../../util/variables.mjs";

/**
 * Function which handles adding listeners to sort buttons
 * @param {array} data data to sort by
 * @example
 * ```js
 * addSortListener(apiData);
 * // Expect listeners to be added to the buttons on index page and handle sorting of data as they are clicked.
 * ```
 */
export function addSortListener(data) {
  timeSortButton.addEventListener("click", () => {
    const sorted = sortTimeAsc(data);
    cardsContainer.innerHTML = "";
    loopCardData(sorted);
  });
  aToZSort.addEventListener("click", () => {
    const sorted = sortTitleDesc(data);
    cardsContainer.innerHTML = "";
    loopCardData(sorted);
  });
  zToASort.addEventListener("click", () => {
    const sorted = sortTitleAsc(data);
    cardsContainer.innerHTML = "";
    loopCardData(sorted);
  });
  todaySort.addEventListener("click", () => {
    const sorted = sortToday(data);
    cardsContainer.innerHTML = "";
    loopCardData(sorted);
  });
  monthSort.addEventListener("click", () => {
    const sorted = sortMonth(data);
    cardsContainer.innerHTML = "";
    loopCardData(sorted);
  });
}
