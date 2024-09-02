document.addEventListener("DOMContentLoaded", function () {
  const sidebarButtons = document.querySelectorAll(".sidebar__button");
  const contentSections = document.querySelectorAll(".content__section");

  sidebarButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const target = button.getAttribute("data-target");
      sidebarButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
      contentSections.forEach((section) => {

        if (section.id === target) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
        e.stopPropagation();
      });
    });
  });
});
