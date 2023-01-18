const navbar = document.querySelector(".primary-navigation");
const menubtn = document.querySelector(".menu-btn");

menubtn.addEventListener("click", () => {
  const visible = navbar.getAttribute("data-visible");
  if (visible === "true") {
    navbar.setAttribute("data-visible", false);
    menubtn.setAttribute("aria-expanded", false);
  } else {
    navbar.setAttribute("data-visible", true);
    menubtn.setAttribute("aria-expanded", true);
  }
});
