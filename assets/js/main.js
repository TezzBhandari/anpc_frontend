// toggles mobile nav
document.addEventListener("DOMContentLoaded", () => {
  const cross = document.getElementById("cross");
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  hamburger.addEventListener("click", () => {
    hamburger.style.display = "none";
    cross.style.display = "block";
    mobileNav.style.transform = "translateX(0)";
  });

  cross.addEventListener("click", () => {
    hamburger.style.display = "block";
    cross.style.display = "none";
    mobileNav.style.transform = "translateX(-100%)";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.getElementsByClassName(
    "header__mob-nav-link-item--dropdown"
  );

  for (const link of links) {
    link.addEventListener("click", () => {
      link.parentElement.classList.toggle("header__mob-dropdown-hide");
    });
  }
});
