import { initCarousel } from "../../ui/carousel";
import { api, createNewElement } from "../../utils";

export async function buildMain() {
    const section = createNewElement("section", { className: "carousel-section", style: { width: "100%" } });

    const endingSoonTitle = createNewElement("h2", { className: "carousel-title", textContent: "Ending Soon" });
    const endingSoonListings = await api.getListings("?sort=endsAt&sortOrder=asc&limit=28&_active=true");
    console.log(endingSoonListings);
    const carouselEndingSoon = initCarousel(endingSoonListings);

    section.appendChild(endingSoonTitle);
    section.appendChild(carouselEndingSoon);
    return section;
}
