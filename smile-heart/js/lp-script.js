// scroll animation
function handleScrollAnimation() {
  const windowHeight = window.innerHeight;
  const scroll = window.scrollY;
  document.querySelectorAll(".js-anime").forEach((el) => {
    const targetPosition = el.getBoundingClientRect().top + scroll;
    if (scroll > targetPosition - windowHeight) {
      el.classList.add("is-animated");
    }
  });
}
window.addEventListener("load", handleScrollAnimation);
window.addEventListener("scroll", handleScrollAnimation);


// header hamburger
const headerToggle = document.getElementById("js-headerToggle");
const headerDrawer = document.getElementById("js-headerDrawer");

if (headerToggle && headerDrawer) {
  const toggleMenu = () => {
    const isOpen = headerToggle.classList.toggle("is-active");
    headerDrawer.classList.toggle("is-active", isOpen);
  };

  headerToggle.addEventListener("click", toggleMenu);

  headerDrawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      headerToggle.classList.remove("is-active");
      headerDrawer.classList.remove("is-active");
    });
  });
}

// accordion
document.querySelectorAll(".js-accordionToggle").forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    const accordion = this.closest(".js-accordion");
    if (accordion) {
      accordion.classList.toggle("is-open");
    }
  });
});

// modal
document.querySelectorAll(".js-modalOpen").forEach((el) => {
  el.addEventListener("click", function () {
    var modalTarget = this.dataset.modalTarget;
    var modalContent = document.getElementById(modalTarget);
    modalContent?.classList.add("is-open");
    // document.body.style.overflowY = "hidden";
    return false;
  });
});
document.querySelectorAll(".js-modalClose").forEach((el) => {
  el.addEventListener("click", function () {
    document.querySelectorAll(".js-modal").forEach((modalContent) => {
      modalContent.classList.remove("is-open");
    });
    setTimeout(() => {
      document.querySelectorAll(".js-modalWrap").forEach((modalWrap) => {
        modalWrap.scrollTop = 0;
      });
    }, 400);
    // document.body.style.overflowY = "auto";
    return false;
  });
});