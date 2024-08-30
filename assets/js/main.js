// switches hamburger icon
document.addEventListener("DOMContentLoaded", () => {
  const cross = document.getElementById("cross");
  const hamburger = document.getElementById("hamburger");

  let showMobNav = false;

  hamburger.addEventListener("click", () => {
    hamburger.style.display = "none";
    cross.style.display = "block";
  });

  cross.addEventListener("click", () => {
    hamburger.style.display = "block";
    cross.style.display = "none";
  });
});
