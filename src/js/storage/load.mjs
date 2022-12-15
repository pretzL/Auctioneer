import * as storage from "./index.mjs";

export const load = (key) => {
  let item = JSON.parse(localStorage.getItem(key));
  if (!item) {
    item = storage.save(key, []);
  }
  return item;
};
