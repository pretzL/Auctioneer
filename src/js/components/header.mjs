import { headerProfileImg, userDropdown } from "../util/variables.mjs";
import * as storage from "../storage/index.mjs";
import { userDropdownHTML } from "../templates/userDropdown.mjs";

export function buildHeader() {
  // Load storage
  const userInfo = storage.load("user");

  // Set profile image
  headerProfileImg.src = userInfo.avatar;
  headerProfileImg.alt = `${userInfo.name}'s avatar`;

  // Build user dropdown
  userDropdown.innerHTML = userDropdownHTML(userInfo);
}
