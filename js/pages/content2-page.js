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
  gsap.fromTo(
    $(".card"),
    {
      top: "-160rem",
    },
    {
      top: 0,
      duration: 2,
      ease: Power1.linear,
    }
  );

  let elemArray = [
    $(".map__pin"),
    $(".map__title"),
    $(".map__subtitle"),
    $(".map__google-map"),
    $(".theme__subtitle"),
    $(".theme__title"),
    $(".theme-colors"),
  ];

  setTimeout(() => {
    eachFadeInByOpacity(elemArray, function () {});
  }, 2000);
}

function gameHandle() {}

preloadImages("");
