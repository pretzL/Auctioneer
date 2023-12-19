import { createCard } from "../../ui/card";
import { buildCards, initCarousel } from "../../ui/carousel";
import { api, createNewElement } from "../../utils";

export async function buildMain() {
    const section = createNewElement("section", { className: "carousel-section", style: { width: "100%" } });

    const endingSoonTitle = createNewElement("h2", { className: "text-2xl dark:text-white", textContent: "Ending Soon" });
    const endingSoonListings = await api.getListings("?sort=endsAt&sortOrder=asc&limit=28&_active=true");
    const endingSoonCarouselCards = buildCards(endingSoonListings);
    const carouselEndingSoon = initCarousel(endingSoonCarouselCards);

    const listingsTitle = createNewElement("h2", { className: "text-2xl dark:text-white", textContent: "Listings" });
    const listings = await api.getListings("?limit=50&_active=true");
    const cards = listings.map((listing) => createCard(listing));
    console.log(cards);
    const listingsContainer = createNewElement("div", { className: "grid grid-cols-4 gap-4" });
    cards.forEach((card) => listingsContainer.appendChild(card));

    section.appendChild(endingSoonTitle);
    section.appendChild(carouselEndingSoon);
    section.appendChild(listingsTitle);
    section.appendChild(listingsContainer);

    return section;
}
