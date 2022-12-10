import * as storage from "../storage/index.mjs";

export function handleFav(target, data) {
  if (target.innerText.startsWith("ADD")) {
    target.innerText = "Remove from favorites";
  } else {
    target.innerText = "Add to favorites";
  }

  const favorites = storage.load("favorites");

  const exists = favorites.find(function (fav) {
    return fav.id === data.id;
  });

  if (!exists) {
    favorites.push(data);
    storage.save("favorites", favorites);
  } else {
    const newFavorites = favorites.filter((fav) => fav.id !== data.id);
    storage.save("favorites", newFavorites);
  }
}
