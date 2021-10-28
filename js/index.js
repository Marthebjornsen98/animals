import { BASE_URL } from "./configs/index.js";
import alert from "./components/alert.js";
import createHTML from "./libs/createHTML.js";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "./libs/localStorageHelpers.js";

let cardContainer = document.querySelector(".cards");
let animals = [];

(async function () {
  try {
    const response = await axios.get(`${BASE_URL}/animals`);
    animals = response.data;

    createHTML(cardContainer, animals, "Animals");

    let likes = document.querySelectorAll(".fa-heart");
    likes.forEach((like) => {
      like.onclick = function () {
        like.classList.toggle("fas");

        let animal = {
          id: like.dataset.id,
          name: like.dataset.name,
          type: like.dataset.type,
          age: like.dataset.age,
          color: like.dataset.color,
        };

        let favourites = getFromLocalStorage("Favourites");

        let isInStorage = favourites.find((singleFavourite) => {
          return singleFavourite.id === like.dataset.id;
        });

        if (isInStorage === undefined) {
          favourites.push(animal);
          saveToLocalStorage("Favourites", favourites);
        } else {
          let removedFavouritesArray = favourites.filter((singleFavourite) => {
            return singleFavourite.id !== like.dataset.id;
          });

          saveToLocalStorage("Favourites", removedFavouritesArray);
        }
      };
    });
  } catch (error) {
    alert(
      document.querySelector(".alert"),
      "alert-danger",
      "Error: " + error.message
    );
  }
})();

let searchInput = document.querySelector("#search");
searchInput.onkeyup = function () {
  cardContainer.innerHTML = "";
  let filteredArticles = animals.filter((animal) => {
    return animal.title.toLowerCase().includes(this.value.toLowerCase());
  });

  createHTML(cardContainer, filteredArticles, "articles");
  console.log(filteredArticles);
};
