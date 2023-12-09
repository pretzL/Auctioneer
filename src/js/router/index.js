import { build404, buildContact, buildMain } from "../pages";
import { renderView } from "../ui/renderView";
import { getSearchParams } from "./searchParams";

async function route() {
    const { view, id } = getSearchParams();

    switch (view) {
        case undefined:
            return buildMain();
        case null:
            return buildMain();
        case "":
            return buildMain();
        case "home":
            return buildMain();
        case "contact":
            return buildContact();
        default:
            return build404();
    }
}

export default async () => {
    const view = await route();
    renderView(view);
};
