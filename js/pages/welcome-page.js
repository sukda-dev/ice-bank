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

  setTimeout(() => {
    eachFadeInByOpacity(elemArray, function () {});
  }, 2000);
}

function game_handle() {}

function scrollSlidePage(pageId) {
  let clientY;

  // For Mobile
  $(pageId).on("touchstart", function (e) {
    clientY = e.touches[0].clientY;
  });

  $(pageId).on("touchend", function (e) {
    let deltaY;
    deltaY = e.changedTouches[0].clientY - clientY;
    clientY = 0;

    if (deltaY >= 110) {
      console.log("prev");

      if (step == 1) {
        goto($store[pageId].prevPage, "prev");
      }

      if (step > 1) {
        step--;
      }

      changeStep();
    } else if (deltaY < -100) {
      console.log("next");
      if (step < 3) {
        step++;
      }

      if (step == 3) {
        goto($store[pageId].nextPage, "next");
      }

      changeStep();
    }
  });

  // For Desktop
  $(pageId).on("wheel", function (e) {
    if (e.originalEvent.deltaY !== 0) {
      if (e.originalEvent.deltaY < 0) {
        console.log("prev");

        if (step == 1) {
          goto($store[pageId].prevPage, "prev");
        }

        if (step > 1) {
          step--;
        }
        changeStep();
      } else {
        console.log("next");

        if (step < 3) {
          step++;
        }
        changeStep();

        console.log(step);
        // if (step == 3) {
        //   goto($store[pageId].nextPage, "next");
        // }
      }
    }
  });
}

function changeStep() {
  $(`${pageId} .pagination .arrow__down`).clearAnim();

  if (step == 1) {
    $(`${pageId} .pagination .arrow__up`).addClass("lock");

    // content 1
    gsap.to($(`${pageId} .content--${step}`), {
      duration: 0.6,
      y: 0,
      alpha: 1,
      delay: 0.4,
    });

    // content 2
    gsap.to($(`${pageId} .content--${step + 1}`), {
      duration: 0.6,
      y: "10rem",
      alpha: 0,
    });
  }

  if (step == 2) {
    {
      $(`${pageId} .pagination .arrow__up`).removeClass("lock");

      // content 1
      gsap.to($(`${pageId} .content--${step - 1}`), {
        duration: 0.6,
        y: "-6rem",
        alpha: 0,
      });

      // content 2
      gsap.to($(`${pageId} .content--${step}`), {
        duration: 0.6,
        y: 0,
        alpha: 1,
        delay: 0.4,
      });
    }
  }
}

preloadImages("");
