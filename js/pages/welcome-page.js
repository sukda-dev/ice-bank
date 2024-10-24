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
      duration: 2.5,
      ease: Power1.linear,
      onComplete: function () {
        eachFadeInByOpacity(elemArray, function () {
          $(".arrow").arrowPulse();
        });
      },
    }
  );
}

function game_handle() {
  var url = new URL(window.location.href);
  var params = new URLSearchParams(url.search);

  var inviteName1 = params.get("_invite1");
  var inviteName2 = params.get("_invite2");

  var textInvite1 =
    typeof inviteName1 != "undefined" && inviteName1 != null
      ? `${inviteName1}`
      : ``;
  var textInvite2 =
    typeof inviteName2 != "undefined" && inviteName2 != null
      ? `${inviteName2}`
      : ``;

  // Set name
  $(`${pageId} #invite1`).text(textInvite1);
  $(`${pageId} #invite2`).text(textInvite2);

  // Language
  if (detectLanguage(textInvite1) == "th") {
    $(`${pageId} #invite1, ${pageId} #invite2`).attr("lang", "th");
  }
  

  const tl = gsap
    .timeline({ repeat: -1, yoyo: true })
    .to(".envlope-wrapper__inner", {
      duration: 0.75,
      x: "+=5",
      rotation: "+=5",
      ease: "power1.inOut",
    })
    .to(".envlope-wrapper__inner", {
      duration: 0.75,
      x: "-=10",
      rotation: "-=10",
      ease: "power1.inOut",
    })
    .to(".envlope-wrapper__inner", {
      duration: 0.75,
      x: "+=5",
      rotation: "+=5",
      ease: "power1.inOut",
    });

  if (!activeModule) {
    $(".envlope-wrapper").fadeInByFlex();
    $(".envlope-wrapper").on("click", function () {
      $(this).offClick();
      $(this).find(".envelope-front, .envelope-back").toggleClass("rotation");
      tl.pause();
      gsap.to(".envlope-wrapper__inner", {
        duration: 0.5,
        x: 0,
        rotation: 0,
        ease: "power1.inOut",
      });

      timeouts.push(
        setTimeout(() => {
          initSound();
          normalSound();
          open();

          activeModule = true;
        }, 2000),
        setTimeout(() => {
          $(this).fadeOut(function () {
            animation_handle();
            pageControl();
          });
        }, 3000)
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
    animationPrev();
  });

  // btn arrow down
  $(`${pageId} .pagination .arrow__down, .arrow`).on("click", function () {
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
function animationPrev() {}

// animation next
function animationNext() {
  $(".arrow").clearAnim();
  goto("content1-page", "next");
}

function detectLanguage(text) {
  var lang = "unknown";

  // English (en-gb)
  if (/[a-zA-Z]/.test(text)) {
    lang = "en-gb";
  }
  // Thai (th)
  else if (/[ก-ฮ]/.test(text)) {
    lang = "th";
  }

  return lang;
}

preloadImages("content1-page");
