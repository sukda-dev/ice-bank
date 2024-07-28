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
    $(".schedule__subtitle"),
    $(".schedule__title"),
    $(".group-detail"),
    $(".map__pin"),
    $(".map__title"),
    $(".map__subtitle"),
    $(".map__google-map"),
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

function gameHandle() {}

preloadImages("");
