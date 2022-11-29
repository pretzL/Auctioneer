// SETUP ROUTER STYLE THINGY

import { login } from "./auth/login.mjs";
import { register } from "./auth/register.mjs";
import { buildHeader } from "./components/header.mjs";
import { loginForm, registerForm, createListingForm, searchBar, mediaInput } from "./util/variables.mjs";
import { isUserLoggedIn } from "./auth/isUserLoggedIn.mjs";
import { createListing } from "./listings/create.mjs";
import { handleQuery } from "./query/handleQuery.mjs";
import { router } from "./router/router.mjs";

// Register form
registerForm.addEventListener("submit", register);

// Login form
loginForm.addEventListener("submit", login);

// Header
const loggedIn = isUserLoggedIn();

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

// Search
searchBar.addEventListener("submit", handleQuery);

router();
