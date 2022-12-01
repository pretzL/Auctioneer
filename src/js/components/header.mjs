import { headerProfileImg, userDropdown, userInfo } from "../util/variables.mjs";
import { userDropdownHTML } from "../templates/userDropdown.mjs";
import { logout } from "../auth/logout.mjs";

export function buildHeader() {
  // Set profile image
  headerProfileImg.src = userInfo.avatar;
  headerProfileImg.alt = `${userInfo.name}'s avatar`;

  // Build user dropdown
  userDropdown.innerHTML = userDropdownHTML(userInfo);

  // Logout button
  const logOutButton = document.querySelector("#logout-button");
  logOutButton.addEventListener("click", logout);
}
