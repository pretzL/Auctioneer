import { clear, createNewElement } from "../../utils";

export function build404() {
    const h1 = createNewElement("h1", { textContent: "404 - Page not found" });
    return h1;
}
