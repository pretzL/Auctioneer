// SETUP ROUTER STYLE THINGY

import { login } from "./auth/login.mjs";
import { register } from "./auth/register.mjs";
import { buildHeader } from "./components/header.mjs";
import { loginForm, registerForm } from "./util/variables.mjs";
import { isUserLoggedIn } from "./auth/isUserLoggedIn.mjs";

// Register form
registerForm.addEventListener("submit", register);

// Login form
loginForm.addEventListener("submit", login);

// Header
const loggedIn = isUserLoggedIn();

if (loggedIn) {
  buildHeader();
}

// Router-ish
console.log(location.href);

if (location.href.includes("profile.html")) {
  console.log("You're on profile page!");
}
