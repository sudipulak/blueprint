$(document).ready(function () {
  $(".creative-slider").owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    autoplay: true,
    autoplaySpeed: 3050,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    slideTransition: "linear",
  });

  $(".review-slider").owlCarousel({
    items: 1,
    slideTransition: "linear",
    nav: true,
    navText: ["<", ">"],
    dots: true,
    autoHeight: true,
  });
});

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml7 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

var textWrapper = document.querySelector(".ml8 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: ".ml7 .letter",
    translateY: ["1.1em", 0],
    duration: 900,
    easing: "easeInOutQuad",
    opacity: 1,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml8 .letter",
    translateY: ["1.1em", 0],
    opacity: 1,
    duration: 900,
    easing: "easeInOutQuad",
    delay: (el, i) => 50 * i,
  });

if (window.innerWidth < 600) {
  $("div").data("aos-offset", "300");
  $(".container").data("aos-offset", "100");
}
