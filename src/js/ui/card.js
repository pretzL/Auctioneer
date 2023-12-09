import { createNewElement } from "../utils";

export function createCard(data) {
    const card = createNewElement("a", { href: `/?view=details&id=${data.id}`, className: "card" });

    const img = createNewElement("img", {
        src: data.media[0],
        alt: data.title,
        className: "card-image",
        onerror: () => {
            img.onerror = null;
            img.src = "https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png";
        },
    });
    const title = createNewElement("h3", { textContent: data.title, className: "card-title" });

    card.appendChild(img);
    card.appendChild(title);

    return card;
}
