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

function openLoading() {
  document.getElementById("loading-indicator").classList.remove("hidden");
  document.getElementById("loading-indicator").classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeLoading() {
  document.getElementById("loading-indicator").classList.add("hidden");
  document.getElementById("loading-indicator").classList.remove("flex");
  document.body.style.overflow = "auto";
}

function openBurnCardDialog() {
  document.getElementById("burn-card-dialog").classList.remove("hidden");
  document.getElementById("burn-card-dialog").classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeBurnCardDialog() {
  document.getElementById("burn-card-dialog").classList.add("hidden");
  document.getElementById("burn-card-dialog").classList.remove("flex");
  document.body.style.overflow = "auto";
}

function init() {
  listenOpenMobileNav();
  listenCloseMobileNav();
}

init();

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }
    next.children(":first-child").clone().appendTo($(this));
  }
});
