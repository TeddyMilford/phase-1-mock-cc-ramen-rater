// write your code here

let baseURL = "http://localhost:3000/ramens";

const ramenDetails = document.getElementById("ramen-detail");
const imageContainer = document.getElementById("ramen-menu");

const ramenDetailKey = document.getElementById("ramen-details");
const ramenImageKey = document.getElementById("detail-image");
const ramenNameKey = document.getElementById("name");
const restaNameKey = document.getElementById("restaurant");
const ratingDisplayKey = document.getElementById("rating-display");
const commentDisplayKey = document.getElementById("comment-display");

const newRamenForm = document.getElementById("new-ramen");
const newName = document.getElementById("new-name");
const newRestaurant = document.getElementById("new-restaurant");
const newImage = document.getElementById("new-image");
const newRating = document.getElementById("new-rating");
const newComment = document.getElementById("new-comment");

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  getRamen();
  waitForRamen();
});

function waitForRamen() {
  newRamenForm.addEventListener("submit", (e) => {
    let data = {
      name: newName.value,
      restaurant: newRestaurant.value,
      image: newImage.value,
      rating: newRating.value,
      comment: newComment.value,
    };

    fetch(baseURL, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
}

function getRamen() {
  fetch(baseURL)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((ramen) => loadRamen(ramen));
    });
}

function loadRamen(ramen) {
  console.log(ramen);
  const image = ramen.image;
  const name = ramen.name;
  const resta = ramen.restaurant;
  const comment = ramen.comment;
  const rating = ramen.rating;

  let ramenImage = document.createElement("img");

  ramenImage.src = image;
  imageContainer.append(ramenImage);

  highlightRamen(ramenImage, image, name, resta, comment, rating);
}

function highlightRamen(ramenImage, image, name, resta, comment, rating) {
  ramenImage.addEventListener("click", function () {
    console.log("clicked");
    console.log(image);
    ramenImageKey.src = `${image}`;
    ramenNameKey.innerText = name;
    restaNameKey.innerText = resta;
    ratingDisplayKey.innerText = rating;
    commentDisplayKey.innerText = comment;
  });
}
