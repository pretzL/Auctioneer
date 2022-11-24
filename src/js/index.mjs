// SETUP ROUTER STYLE THINGY

import { register } from "./auth/register.mjs";
import { registerForm } from "./util/variables.mjs";

// Register form
registerForm.addEventListener("submit", register);
