export const userDropdownHTML = (info) => {
  return `
    <li>
        <label class="w-full h-12 flex justify-center items-center hover:bg-transparent cursor-auto font-semibold">$${info.credits}</label>
    </li>
    <li>
    <a href="./profile.html" class="btn btn-ghost btn-circle w-full">Profile</a>
    </li>
    <li>
    <label id="logout-button" class="btn btn-ghost btn-circle w-full">Logout</label>
    </li>
    `;
};
