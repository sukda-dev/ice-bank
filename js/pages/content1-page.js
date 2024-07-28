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
  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

function gameHandle() {
  let elemArray = [
    $(".invite__title"),
    $(".invite__subtitle"),
    $(".invite__image"),
    $(".countdown__title"),
    $(".countdown__subtitle"),
    $(".countdown__desc"),
    $(".countdown-times"),
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

function updateCountdown() {
  const targetDate = new Date("November 11, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  $(".time__days .timer").text(days < 10 ? "0" + days : days);
  $(".time__hours .timer").text(hours < 10 ? "0" + hours : hours);
  $(".time__minutes .timer").text(minutes < 10 ? "0" + minutes : minutes);
  $(".time__seconds .timer").text(seconds < 10 ? "0" + seconds : seconds);

  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    $(".time__days .timer").text("00");
    $(".time__hours .timer").text("00");
    $(".time__minutes .timer").text("00");
    $(".time__seconds .timer").text("00");
  }
}

preloadImages("");
