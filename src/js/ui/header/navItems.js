import { createNewElement } from "../../utils";
import { setSearchParams } from "../../router/searchParams";

export function createNavItem(label, view) {
    const li = createNewElement("li", { className: "nav-li", style: { listStyleType: "none" } });
    const anchor = createNewElement("button", {
        textContent: label,
        onclick: () => setSearchParams({ view: view }),
    });
    li.appendChild(anchor);
    return li;
}
