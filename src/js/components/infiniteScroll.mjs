// From https://www.youtube.com/watch?v=2IbRtjez6ag

import { cardHTML } from "../templates/card.mjs";
import { cardsContainer } from "../util/variables.mjs";

export function observer(data) {
  const listingCard = document.querySelectorAll(".listing-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("invisible", !entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "100px",
    }
  );

  let idxStart = 9;
  let idxEnd = 18;

  const lastCardObserver = new IntersectionObserver((entries) => {
    const lastCard = entries[0];
    if (!lastCard.isIntersecting) return;

    idxStart = idxStart * 2 + 1;
    idxEnd = idxEnd * 2 + 1;

    loadNewCards(data, idxStart, idxEnd);
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(document.querySelector(".listing-card:last-child"));
  }, {});

  lastCardObserver.observe(document.querySelector(".listing-card:last-child"));

  listingCard.forEach((card) => {
    observer.observe(card);
  });

  function loadNewCards(data, idxStart, idxEnd) {
    for (let i = idxStart; i < idxEnd; i++) {
      try {
        cardsContainer.innerHTML += cardHTML(data[i]);
      } catch (error) {
        break;
      }
    }
  }
}
