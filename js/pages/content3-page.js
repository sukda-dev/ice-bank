function onNextButtonClicked() {
  goto("");
}

function onPreviousButtonClicked() {
  goto("");
}

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  let elemArray = [
    $(".theme__subtitle"),
    $(".theme__title"),
    $(".theme-colors"),
    $(".gallery__subtitle"),
    $(".gallery__title"),
    $(".swiper"),
  ];
  gsap.fromTo(
    $(".card"),
    {
      top: "-160rem",
    },
    {
      top: 0,
      duration: 2,
      ease: Power1.linear,
      onComplete: function () {
        eachFadeInByOpacity(elemArray, function () {});
      },
    }
  );
}

function gameHandle() {
  const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

preloadImages("");
