var pageId = "#welcome-page";
direction = "";

$(function () {
  animation_handle();
  game_handle();
});

function animation_handle() {
  let elemArray = [
    $(".text-desc").eq(0),
    $(".text-desc").eq(1),
    $(".text-name"),
    $(".text-desc").eq(2),
    $(".text-desc").eq(3),
    $(".group-date"),
    $(".card-vactor"),
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

function game_handle() {
  $("body").click(function () {
    initSound();
    normalSound();
  });

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
}

// animation next
function animationNext() {
  console.log("next");
  goto("content1-page", "next");
}

preloadImages("");
