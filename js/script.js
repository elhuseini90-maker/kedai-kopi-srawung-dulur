// toggle class active hamburger menu

const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// toggle class active search form

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Toggle search form active class, focus on search box and prevent default behavior.
 * @param {Event} e - Event object.
 * @listens {click} - Search button click event.
 */
/*******  16f2be60-e587-4385-9893-9b71a1798296  *******/
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
