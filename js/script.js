$(document).ready(function () {
  $(".creative-slider").owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    // autoplay: true,
    autoplaySpeed: 2500,
    autoplayHoverPause: true,
    slideTransition: "linear",
  });

  $(".review-slider").owlCarousel({
    items: 1,
    slideTransition: "linear",
    nav: true,
    navText: ["<", ">"],
    dots: true,
  });
});
