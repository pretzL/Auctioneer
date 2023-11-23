// SETUP ROUTER STYLE THINGY

import { login } from "./auth/login.mjs";
import { register } from "./auth/register.mjs";
import { buildHeader } from "./components/header.mjs";
import { loginForm, registerForm, createListingForm, searchBar, mediaInput, createListingCheck, loggedIn, closeCreateListing } from "./util/variables.mjs";
import { createListing } from "./listings/create.mjs";
import { handleQuery } from "./query/handleQuery.mjs";
import { router } from "./router/router.mjs";
import { showInstallButton } from "./templates/showInstallButton.mjs";
import * as storage from "./storage/index.mjs";

// Register form
registerForm.addEventListener("submit", register);

// Login form
loginForm.addEventListener("submit", login);

// Header

if (loggedIn) {
    buildHeader();
    createListingForm.addEventListener("submit", createListing);

    // Add event listeners to the create listing form for media gallery

    mediaInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            e.target.nextElementSibling.disabled = false;
            e.target.nextElementSibling.classList.remove("hidden");
        });
    });
}

// Create Listing Form
createListingCheck.addEventListener("change", () => {
    if (!loggedIn) {
        location.href = "./index.html?error=true";
    }
});

// Search
searchBar.addEventListener("submit", handleQuery);

router();

// Handle beforeinstallprompt stuff
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    const installPrompt = storage.load("installPrompt");
    if (installPrompt === "rejected") {
        return;
    } else {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Update UI to notify the user they can add to home screen
        showInstallButton(deferredPrompt);
    }
});

window.addEventListener("DOMContentLoaded", () => {
    console.log("Navigator", navigator);
});
