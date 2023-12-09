import { clear } from "../utils";

export function renderView() {
    const main = document.querySelector("main");
    clear(main);
    main.append(...arguments);
}
