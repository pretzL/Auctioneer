import * as storage from "../storage/index.mjs";

export function showInstallButton(deferredPrompt) {
    const main = document.querySelector("main");

    const buttonWrapper = document.createElement("div");
    buttonWrapper.style.display = "flex";
    buttonWrapper.style.gap = "0.5rem";
    buttonWrapper.style.position = "fixed";
    buttonWrapper.style.top = "0";
    buttonWrapper.style.right = "1rem";
    buttonWrapper.style.zIndex = "100";
    buttonWrapper.style.backgroundColor = "white";
    buttonWrapper.style.borderRadius = "5px";
    buttonWrapper.style.padding = "0.25rem 0.5rem";

    const installButton = document.createElement("button");
    installButton.innerText = "Add page to home screen!";
    installButton.addEventListener("click", () => {
        showPrompt(deferredPrompt);
    });

    const closeButton = document.createElement("button");
    closeButton.innerText = "x";
    closeButton.style.marginLeft = "0.5rem";
    closeButton.style.color = "black";
    closeButton.addEventListener("click", () => {
        storage.save("installPrompt", "rejected");
        buttonWrapper.style.display = "none";
    });
    buttonWrapper.appendChild(installButton);
    buttonWrapper.appendChild(closeButton);
    main.appendChild(buttonWrapper);
}

function showPrompt(deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
        } else {
            console.log("User dismissed the A2HS prompt");
        }
        deferredPrompt = null;
    });
}
