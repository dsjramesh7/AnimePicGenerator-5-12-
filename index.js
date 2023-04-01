const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const imgEl = document.querySelector(".image");
const nameEl = document.querySelector(".character");

btnEl.addEventListener("click", async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    nameEl.innerText = "Updating...";
    const response = await fetch("https://api.catboys.com/img");
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    animeContainerEl.style.display = "block";
    imgEl.src = data.url;
    nameEl.innerText = data.artist;
  } catch (error) {
    console.log(error);
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    nameEl.innerText = "An error happened, please try again";
  }
});
