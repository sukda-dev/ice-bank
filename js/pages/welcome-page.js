var pageId = "#welcome-page";
direction = "";

$(function () {
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
    $(".card__main"),
    $(".card-vactor"),
    $(".pagination"),
  ];

  gsap.fromTo(
    $(`${pageId} .card`),
    {
      top: "-160rem",
      alpha: 1,
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
  if (!activeModule) {
    $(".envlope-wrapper").fadeInByFlex();
    $(".envlope-wrapper").on("click", function () {
      $(this).offClick();
      initSound();
      normalSound();
      open();
      activeModule = true;

      timeouts.push(
        setTimeout(() => {
          $(this).fadeOut(function () {
            animation_handle();
            pageControl();
          });
        }, 1500)
      );
    });
  } else {
    $(".envlope-wrapper").hide();
    animation_handle();
    pageControl();
  }
}

function pageControl() {
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

function open() {
  $("#envelope").addClass("open").removeClass("close");
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
