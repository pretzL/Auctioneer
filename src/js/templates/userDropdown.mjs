export const userDropdownHTML = (info) => {
  return `
    <li>
        <label class="btn btn-ghost btn-circle w-full">${info.credits}</label>
    </li>
    <li>
    <a href="./profile.html?name=${info.name}" class="btn btn-ghost btn-circle w-full">Profile</a>
    </li>
    <li>
    <label id="logout-button" class="btn btn-ghost btn-circle w-full">Logout</label>
    </li>
    `;
};
