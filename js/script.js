MicroModal.init();
/** Gallery Popup */
document.querySelectorAll(".gallery-grid a").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const el = e.target;
    const src = el.src;
    const alt = el.alt;
    MicroModal.show("modal-image");
    const modal = document.getElementById("modal-image");
    modal.querySelector("img").src = src;
    modal.querySelector("img").alt = alt;
    modal.querySelector("h2").innerHTML = alt;
  });
});

/** Scroll to top button */
window.addEventListener("scroll", function () {
  var scrollToTopButton = document.getElementById("scroll-to-top");
  const pageHeader = document.querySelector(".page-header");
  if (window.scrollY > 100) {
    scrollToTopButton.classList.contains("hidden-fixed") && scrollToTopButton.classList.remove("hidden-fixed");
  } else {
    !scrollToTopButton.classList.contains("hidden-fixed") && scrollToTopButton.classList.add("hidden-fixed");
  }
});

document.getElementById("scroll-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
