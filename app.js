window.addEventListener("scroll", () => {
  var navBar = document.querySelector("nav");

  navBar.classList.toggle("fix", window.scrollY > 0);
});
