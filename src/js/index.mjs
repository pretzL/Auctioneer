// SETUP ROUTER STYLE THINGY

import { login } from "./auth/login.mjs";
import { register } from "./auth/register.mjs";
import { loginForm, registerForm } from "./util/variables.mjs";

// Register form
registerForm.addEventListener("submit", register);

// Login form
loginForm.addEventListener("submit", login);
