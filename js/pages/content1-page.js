var pageId = "#content1-page";
direction = "";

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

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
    $(`${pageId} .card`),
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
  scrollSlidePage();

  // btn arrow up
  $(`${pageId} .pagination .arrow__up`).on("click", function () {
    console.log("arrow up");

    animationPrev();
  });

  // btn arrow down
  $(`${pageId} .pagination .arrow__down`).on("click", function () {
    console.log("arrow down");
    $(this).clearAnim();

    animationNext();
  });
}

// scroll slide page
function scrollSlidePage() {
  let clientY;

  // Touchstart
  $(`${pageId}`).on("touchstart", function (e) {
    clientY = e.touches[0].clientY;
  });

  // Touchend
  $(`${pageId}`).on("touchend", function (e) {
    let deltaY;
    deltaY = e.changedTouches[0].clientY - clientY;
    clientY = 0;
    if (deltaY >= 110) {
      animationPrev();
    } else if (deltaY < -100) {
      animationNext();
    }
  });

  // Scroll on Desktop
  $(`${pageId}`).on("wheel", function (e) {
    if (e.originalEvent.deltaY !== 0) {
      if (e.originalEvent.deltaY < 0) {
        //scroll wheel prev
        if (direction !== "prev") {
          direction = "prev";
          console.log("Desktop ==>", direction);

          animationPrev();
        }
      } else {
        //scroll wheel next
        if (direction !== "next") {
          direction = "next";
          console.log("Desktop ==>", direction);

          animationNext();
        }
      }
    }
  });
}

// animation prev
function animationPrev() {
  console.log("prev");
  goto("welcome-page", "prev");
}

// animation next
function animationNext() {
  console.log("next");
  goto("content2-page", "next");
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
