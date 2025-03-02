import { homeComponent } from "./home.js";
import { televisionsComponent } from "./televisions.js";
import { aboutComponent } from "./about.js";

document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Set up event listeners for navigation links
  document.getElementById("home-link").addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo("home");
  });
  document.getElementById("televisions-link").addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo("televisions");
  });
  document.getElementById("about-link").addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo("about");
  });
  // Clicking the logo returns to the Home page
  document.getElementById("logo").addEventListener("click", () => {
    navigateTo("home");
  });

  // Load the default page (Home)
  navigateTo("home");
});

function navigateTo(page) {
  const content = document.getElementById("content");

  // Remove active class from all nav links
  document.querySelectorAll("nav ul li a").forEach((link) =>
    link.classList.remove("active")
  );

  // Add active class to the selected link
  const activeLink = document.getElementById(`${page}-link`);
  if (activeLink) {
    activeLink.classList.add("active");
  }

  // Load the corresponding component based on the page
  switch (page) {
    case "home":
      content.innerHTML = homeComponent();
      break;
    case "televisions":
      content.innerHTML = televisionsComponent();
      break;
    case "about":
      content.innerHTML = aboutComponent();
      break;
    default:
      content.innerHTML = "<p>Page not found</p>";
  }
}
