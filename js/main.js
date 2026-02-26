// JS scripts placed here
const btn = document.getElementById("hamburger");
const links = document.getElementById("links");

btn.addEventListener("click", () => {
    links.classList.toggle("open");
    btn.setAttribute("aria-expanded", links.classList.contains("open"));
 });