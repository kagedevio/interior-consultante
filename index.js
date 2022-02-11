const hamburger = document.getElementById("hamburger");
const navList = document.querySelector(".nav-items");
const open = document.getElementById("open");
const close = document.getElementById("close");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  navList.classList.toggle("open-nav");
  open.classList.toggle("open-nav");
  close.classList.toggle("open-nav");
});
