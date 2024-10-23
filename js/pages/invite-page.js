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
  var link;

  $(`${pageId} #generateQr`).on("click", function () {
    $(`${pageId} .invite__qrcode`).hide();
    $(`${pageId} .invite__qrcode`).empty();
    invate1 = $(`${pageId} #input1`).val();
    invate2 = $(`${pageId} #input2`).val();

    link = `${window.location.href.split("?")[0]}?_invite1=${encodeURIComponent(
      invate1
    )}&_invite2=${encodeURIComponent(invate2)}`;

    const qrcode = new QRCode(document.getElementById("qrcode"), {
      text: link,
      width: 1024,
      height: 1024,
      colorDark: "#000",
      colorLight: "#fff",
      correctLevel: QRCode.CorrectLevel.H,
    });

    $(`${pageId} #link`).empty();
    $(`${pageId} #link`).val(link);

    $(`${pageId} .invite__qrcode`).fadeIn();

    $(`${pageId} #downloadQr`).on("click", function () {
      downloadImage();
    });
    $(`${pageId} #copyLink`).on("click", function () {
      copyLink(link);
    });
  });
}

function downloadImage() {
  var img = $(".invite__qrcode img");
  var src = img.attr("src");

  if (src) {
    var a = document.createElement("a");
    a.href = src;
    a.download = "image.png"; // or any other default name
    a.click();
  } else {
    console.log("Image source not found");
  }
}

function copyLink(link) {
  var value = link;

  console.log(value);

  if (value) {
    navigator.clipboard
      .writeText(value)
      .then(function () {
        console.log("Input value copied to clipboard");
      })
      .catch(function (error) {
        console.error("Failed to copy input value to clipboard:", error);
      });
  } else {
    console.log("Input value not found");
  }
}

preloadImages("");
