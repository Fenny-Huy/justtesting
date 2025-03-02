import homeComponent from "./home.js";
import televisionsComponent from "./televisions.js";
import aboutComponent from "./about.js";

document.addEventListener("DOMContentLoaded", () => {
  //set the year in the footer
  document.getElementById("year").textContent = new Date().getFullYear();

  //get the id of the link id in the nav to navigate to the page
  const links = [
    ["home-link", "home"],
    ["televisions-link", "televisions"],
    ["about-link", "about"],
    ["logo", "home"],
  ];

  links.forEach(([linkId, page]) => {
    const link = document.getElementById(linkId);
    if (link) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo(page);
      });
    }
  });



  //default page is home
  navigateTo("home");
});

function navigateTo(page) {
  const content = document.getElementById("content");

  //remove the active from the class of the <a> in <li> in <ul> in <nav>
  document.querySelectorAll("nav ul li a").forEach((link) =>
    link.classList.remove("active-nav-link")
  );

  //add active class to nav link of the current page
  const activeLink = document.getElementById(`${page}-link`);
  if (activeLink) {
    activeLink.classList.add("active-nav-link");
  }


  //insert the content of active page
  const pageComponents = {
    home: homeComponent,
    televisions: televisionsComponent,
    about: aboutComponent
  };
  
  const selectedComponent = pageComponents[page] || (() => "<p>Page not found</p>");
  content.innerHTML = selectedComponent();
}
