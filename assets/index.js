function listenOpenMobileNav() {
  document
    .getElementById("open-mobile-nav")
    .addEventListener("click", function () {
      document.getElementById("mobile-nav").classList.add("block");
      document.getElementById("mobile-nav").classList.remove("hidden");
    });
}

function listenCloseMobileNav() {
  document
    .getElementById("close-mobile-nav")
    .addEventListener("click", function () {
      document.getElementById("mobile-nav").classList.add("hidden");
      document.getElementById("mobile-nav").classList.remove("block");
    });
}

function init() {
  listenOpenMobileNav();
  listenCloseMobileNav();
}

init();
