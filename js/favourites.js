import { getFromLocalStorage } from "./libs/localStorageHelpers.js";
import createHTML from "./libs/createHTML.js";

(function () {
  let favourites = getFromLocalStorage("favourites");
  let cardContainer = document.querySelector(".cards");

  if (!favourites || favourites.length === 0) {
    createHTML(cardContainer, [], "favourites");
  } else {
    createHTML(cardContainer, favourites, "favourites");
  }
})();
