var pageId = "#invite-page";

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  let elemArray = [
    $(".text-desc").eq(0),
    $(".text-desc").eq(1),
    $(".text-name"),
    $(".card__main"),
    $(".card-vactor"),
    $(".card__invite"),
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
  let invate1, invate2;
  
  $(`${pageId} .invite__button`).on("click", function () {
    $(`${pageId} .invite__qrcode`).hide();
    $(`${pageId} .invite__qrcode`).empty();
    invate1 = $(`${pageId} #input1`).val();
    invate2 = $(`${pageId} #input2`).val();

    const qrcode = new QRCode(document.getElementById("qrcode"), {
      text: `${window.location.href.split('?')[0]}?_invite1=${encodeURIComponent(invate1)}&_invite2=${encodeURIComponent(invate2)}`,
      width: 1024,
      height: 1024,
      colorDark: "#000",
      colorLight: "#fff",
      correctLevel: QRCode.CorrectLevel.H,
    });
    $(`${pageId} .invite__qrcode`).fadeIn();
  });
}

preloadImages("");
