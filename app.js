window.addEventListener("scroll", () => {
  var navBar = document.querySelector("nav");
  var header = document.querySelector("header");
  header.classList.toggle("change", window.scrollY > 0);
  navBar.classList.toggle("fix", window.scrollY > 0);
});
