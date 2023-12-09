import { createNewElement } from "../../utils";
import { createNavItem } from "./navItems";

export async function header() {
    const logo = createNewElement("img", { src: "public/Logo.png", alt: "Logo", style: { width: "100px" } });
    const ul = createNewElement("ul", { className: "nav-ul", style: { display: "flex", gap: "1rem", paddingTop: "1rem" } });

    ul.appendChild(createNavItem("Home", "home"));
    ul.appendChild(createNavItem("Contact", "contact"));

    const headerElement = document.querySelector("header");
    headerElement.appendChild(logo);
    headerElement.appendChild(ul);
}
