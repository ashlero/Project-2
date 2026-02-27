// JS scripts placed here
const btn = document.getElementById("hamburger");
const links = document.getElementById("links");

btn.addEventListener("click", () => {
    links.classList.toggle("open");
    btn.setAttribute("aria-expanded", links.classList.contains("open"));
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("order-form");
  const successMessage = document.getElementById("form-success");
  const orderContent = document.getElementById("order-content");
  const orderContainer = document.querySelector(".order-container");

  // Prevent crashes if this script runs on pages without the form
  if (!form || !successMessage || !orderContent || !orderContainer) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // hide title, intro, and form
    orderContent.style.display = "none";

    // center container (puts thank-you in the middle of the card)
    orderContainer.classList.add("success-state");

    // fade in thank-you message
    setTimeout(() => {
      successMessage.classList.add("show");
    }, 150);
  });
});