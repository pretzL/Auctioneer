// SETUP ROUTER STYLE THINGY

import { login } from "./auth/login.mjs";
import { register } from "./auth/register.mjs";
import { buildHeader } from "./components/header.mjs";
import { loginForm, registerForm } from "./util/variables.mjs";
import { isUserLoggedIn } from "./auth/isUserLoggedIn.mjs";
import { buildProfile } from "./profiles/build.mjs";
import * as storage from "./storage/index.mjs";

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
  // Get user info
  const userInfo = storage.load("user");

  // QUERY STRINGS
  const queryString = document.location.search;

  const params = new URLSearchParams(queryString);

  const name = params.get("name");

  if (!name) {
    location.href = `./profile.html?name=${userInfo.name}`;
  } else {
    buildProfile(name);
  }
}
