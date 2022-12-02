// From https://www.youtube.com/watch?v=2IbRtjez6ag

import { cardHTML } from "../templates/card.mjs";
import { cardsContainer } from "../util/variables.mjs";

export function observer(data) {
  const listingCard = document.querySelectorAll(".listing-card");

  // Sets up a new observer to view each currently created listing card
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Toggle off/on the invisibility class if the listing card is/is not visible on the screen
        entry.target.classList.toggle("invisible", !entry.isIntersecting);

        // Stop observing the given card if it is visible
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // Handles lazy-loading 100px off screen so items don't just pop in to view
      rootMargin: "100px",
    }
  );

  // Set up index handling for building content dynamically
  let idxStart = 9;
  let idxEnd = 18;

  // Handle when the last card is shown
  const lastCardObserver = new IntersectionObserver((entries) => {
    const lastCard = entries[0];
    if (!lastCard.isIntersecting) return;

    // Indent the index on each observer iteration (+ 1 to offset the last post)
    idxStart = idxStart * 2 + 1;
    idxEnd = idxEnd * 2 + 1;

    // Load the new cards
    loadNewCards(data, idxStart, idxEnd);

    // Exit observing the old last card so the new last card instead can be observed
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(document.querySelector(".listing-card:last-child"));
  }, {});

  // Observe the current last card
  lastCardObserver.observe(document.querySelector(".listing-card:last-child"));

  // Set the observer
  listingCard.forEach((card) => {
    observer.observe(card);
  });

  // Load the new cards dynamically with the passed in data. Data must be passed into the top-level observe() function then passed along to this function
  function loadNewCards(data, idxStart, idxEnd) {
    for (let i = idxStart; i < idxEnd; i++) {
      // try/catch to handle when the end of the data array is reached
      try {
        cardsContainer.innerHTML += cardHTML(data[i]);
      } catch (error) {
        break;
      }
    }
  }
}
