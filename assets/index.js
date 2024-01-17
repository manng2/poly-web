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
