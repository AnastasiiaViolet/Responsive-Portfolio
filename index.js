let list = document.querySelectorAll(".nav li");
let menuToggle = document.querySelector(".menuToggle");
let header = document.querySelector("header");

// Avatar image tablice
const images = ["ja_profesion.png", "ja.png", "ja_suit.png", "ja_czarne.png"];
// Avatar image
const imageAvatar = document.querySelector(".avatar");
let activeIndex = 0;

function changeAvatar() {
  // Change opacity to make it disappear
  imageAvatar.classList.add("hidden");

  // After the fade is finished (1s), change the source and restore the opacity
  setTimeout(() => {
    activeIndex = (activeIndex + 1) % images.length;
    imageAvatar.src = "./source/" + images[activeIndex];
    imageAvatar.classList.remove("hidden");
  }, 1000); // must match CSS (1s)
}
// Open burger menu
function active() {
  list.forEach((i) => i.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((i) => i.addEventListener("click", active));

menuToggle.onclick = function () {
  header.classList.toggle("active");
};
// Run the function every  30 sekund (30,000 ms)
setInterval(changeAvatar, 30000);
