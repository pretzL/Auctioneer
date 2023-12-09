import { api, createNewElement } from "../../utils";

export async function buildDetails(id) {
    const listing = await api.getListing(id, "");
    console.log(listing);
    const container = generateHTML(listing);
    return container;
}

function generateHTML(item) {
    const container = createNewElement("div", { className: "container" });
    const titleElement = createNewElement("h1", { textContent: item.title });

    container.appendChild(titleElement);
    return container;
}
