import { createNewElement } from "../../utils";

export function buildContact() {
    const form = createNewElement("form", {
        className: "form",
        style: { display: "flex", flexDirection: "column", gap: "1rem", backgroundColor: "grey", padding: "1rem", borderRadius: "5px", width: "80%", margin: "0 auto" },
    });
    const nameInput = createNewElement("input", { className: "form-input", placeholder: "Name", type: "text" });
    const emailInput = createNewElement("input", { className: "form-input", placeholder: "Email", type: "email" });
    const subjectInput = createNewElement("input", { className: "form-input", placeholder: "Subject", type: "text" });
    const messageInput = createNewElement("textarea", { className: "form-input", placeholder: "Message", style: { resize: "none", height: "150px" } });

    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(subjectInput);
    form.appendChild(messageInput);

    return form;
}
