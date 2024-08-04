var pageId = "#content2-page";
direction = "";

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  let elemArray = [
    $(".schedule__subtitle"),
    $(".schedule__title"),
    $(".detail").eq(0),
    $(".detail").eq(1),
    $(".detail").eq(2),
    $(".map__pin"),
    $(".map__title"),
    $(".map__subtitle"),
    $(".map__google-map"),
    $(".arrow"),
  ];

  gsap.fromTo(
    $(`${pageId} .card`),
    {
      top: "-160rem",
      alpha: 1,
    },
    {
      top: 0,
      duration: 3,
      ease: Power1.linear,
      onComplete: function () {
        eachFadeInByOpacity(elemArray, function () {
          $(".arrow").arrowPulse();
        });
      },
    }
  );
}

function gameHandle() {
  scrollSlidePage();

  // btn arrow up
  $(`${pageId} .pagination .arrow__up`).on("click", function () {
    animationPrev();
  });

  // btn arrow down
  $(`${pageId} .pagination .arrow__down, .arrow`).on("click", function () {
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
          animationPrev();
        }
      } else {
        //scroll wheel next
        if (direction !== "next") {
          direction = "next";
          animationNext();
        }
      }
    }
  });
}

// animation prev
function animationPrev() {
  goto("content1-page", "prev");
}

// animation next
function animationNext() {
  $(".arrow").clearAnim();
  goto("content3-page", "next");
}

preloadImages("content3-page");
