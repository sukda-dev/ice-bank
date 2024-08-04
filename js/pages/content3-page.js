var pageId = "#content3-page";
direction = "";

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  let elemArray = [
    $(".theme__subtitle"),
    $(".theme__title"),
    $(".theme-color").eq(0),
    $(".theme-color").eq(1),
    $(".theme-color").eq(2),
    $(".theme-color").eq(3),
    $(".theme-color").eq(4),
    $(".gallery__subtitle"),
    $(".gallery__title"),
    $(".swiper"),
    $(".rsvp"),
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
  goto("content2-page", "prev");
}

// animation next
function animationNext() {}
