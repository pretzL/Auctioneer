import { setSearchParams } from "../router/searchParams";
import { createNewElement } from "../utils";

export function createCard(data) {
    const card = createNewElement("a", {
        className: "flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] cursor-pointer",
        onclick: () => {
            setSearchParams({ view: "details", id: data.id });
        },
    });

    const img = createNewElement("img", {
        src: data.media[0],
        alt: data.title,
        className: "w-full h-auto rounded-t-xl aspect-video object-cover",
        onerror: () => {
            img.onerror = null;
            img.src = "https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png";
        },
    });
    const title = createNewElement("h3", { textContent: data.title, className: "text-lg font-bold text-gray-800 dark:text-white" });

    card.appendChild(img);
    card.appendChild(title);

    return card;
}
