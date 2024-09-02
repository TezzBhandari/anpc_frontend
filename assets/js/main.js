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

// enables mobile dropdown menu functionality
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

// enables hero tabs functionality
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-target-tab]");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  function hideAllTabs() {
    for (const tab of tabs) {
      tab.classList.remove("hero__active-tab");
    }
  }

  function hideAllTabContents() {
    for (const tabContent of tabContents) {
      tabContent.classList.remove("hero__active-tab-content");
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.getElementById(tab.dataset.targetTab);
      hideAllTabs();
      hideAllTabContents();
      tab.classList.add("hero__active-tab");
      target.classList.add("hero__active-tab-content");
    });
  });
});

// hero craousel

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.getElementsByClassName("slide");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const innerCarousel = document.getElementById("inner-carousel");
  const carouselNavigation = document.querySelector(".carousel-navigation");

  // if (prev === null || next === null) {
  //   console.error("add navigation button");
  //   return;
  // }

  let currentPosition = 0;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  lastClone.style.color = "blue";
  // lastClone.style.transition = "none";
  innerCarousel.insertBefore(firstClone, carouselNavigation);
  innerCarousel.insertBefore(lastClone, slides[0]);

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translate(${i * 100}%)`;
  }

  const adjustSlidePosition = () => {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translateX(${100 * (i - currentPosition)}%)`;
    }
  };

  const updateCarouselState = () => {
    adjustSlidePosition();
  };

  function moveSlide(direction, transition = true) {
    if (typeof direction !== "string") {
      console.error("invalid direction type");
      return;
    }

    if (transition) {
      for (const slide of slides) {
        slide.style.transition = "transform 500ms ease-in-out";
      }
    } else {
      for (const slide of slides) {
        slide.style.transition = "none";
      }
    }

    if (direction === "next") {
      currentPosition = (currentPosition + 1) % slides.length;
    } else if (direction === "prev") {
      currentPosition = (currentPosition - 1 + slides.length) % slides.length;
    }
    // alert(currentPosition);
    updateCarouselState();
  }

  // next.addEventListener("click", () => {
  //   clearInterval(timer);
  //   timer = setInterval(() => {
  //     moveSlide("next");
  //     // If the last slide is reached, reset to the first one after the transition
  //     if (currentPosition === slides.length - 1) {
  //       next.disabled = true;
  //       next.ariaDisabled = true;
  //       setTimeout(() => {
  //         next.disabled = false;
  //         next.ariaDisabled = false;
  //         currentPosition = 0;
  //         moveSlide("next", false); // Disable transition to make the jump seamless
  //       }, 500); // Wait for the transition to finish
  //     }
  //   }, 2000);

  //   moveSlide("next");
  //   // If the last slide is reached, reset to the first one after the transition
  //   if (currentPosition === slides.length - 1) {
  //     next.disabled = true;
  //     next.ariaDisabled = true;
  //     setTimeout(() => {
  //       next.disabled = false;
  //       next.ariaDisabled = false;
  //       currentPosition = 0;
  //       moveSlide("next", false); // Disable transition to make the jump seamless
  //     }, 500); // Wait for the transition to finish
  //   }
  // });

  // prev.addEventListener("click", () => {
  //   moveSlide("prev");
  // });

  moveSlide("next", false);
  var timer = setInterval(() => {
    moveSlide("next");
    // If the last slide is reached, reset to the first one after the transition
    if (currentPosition === slides.length - 1) {
      // next.disabled = true;
      // next.ariaDisabled = true;
      setTimeout(() => {
        // next.disabled = false;
        // next.ariaDisabled = false;
        currentPosition = 0;
        moveSlide("next", false); // Disable transition to make the jump seamless
      }, 500); // Wait for the transition to finish
    }
  }, 2000);
});

// enables events tabs functionality
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-target-events-tab]");
  const tabContents = document.querySelectorAll("[data-events-tab-content]");

  function hideAllTabs() {
    for (const tab of tabs) {
      tab.classList.remove("events__active-tab");
    }
  }

  function hideAllTabContents() {
    for (const tabContent of tabContents) {
      tabContent.classList.remove("events__active-tab-content");
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.getElementById(tab.dataset.targetEventsTab);
      hideAllTabs();
      hideAllTabContents();
      tab.classList.add("events__active-tab");
      target.classList.add("events__active-tab-content");
    });
  });
});
