function preloadImages(expression) {
  switch (expression) {
    // general
    case "general":
      $.preloadImages(
        "images/general/arrow-down.png",
        "images/general/arrow-up.png",
        "images/general/backdrop-back.png",
        "images/general/backdrop.png",
        "images/general/bg.png",
        "images/general/close.png",
        "images/general/favicon.ico",
        "images/general/loading.gif",
        "images/general/mountain.png",
        "images/general/next.png",
        "images/general/prev.png",
        "images/general/qr.png",
        "images/general/swiper-arrow-next.png",
        "images/general/swiper-arrow-prev.png"
      );
      break;

    // content1-page
    case "content1-page":
      $.preloadImages("images/pages/content1-page/image.jpg");
      break;

    // content2-page
    case "content2-page":
      $.preloadImages(
        "images/pages/content2-page/icon1.png",
        "images/pages/content2-page/icon2.png",
        "images/pages/content2-page/icon3.png",
        "images/pages/content2-page/pin.png"
      );
      break;

    // content3-page
    case "content3-page":
      $.preloadImages(
        "images/pages/content3-page/butterfly.png",
        "images/pages/content3-page/image1.jpg",
        "images/pages/content3-page/image10.jpg",
        "images/pages/content3-page/image11.jpg",
        "images/pages/content3-page/image12.jpg",
        "images/pages/content3-page/image13.jpg",
        "images/pages/content3-page/image14.jpg",
        "images/pages/content3-page/image15.jpg",
        "images/pages/content3-page/image16.jpg",
        "images/pages/content3-page/image2.jpg",
        "images/pages/content3-page/image3.jpg",
        "images/pages/content3-page/image4.jpg",
        "images/pages/content3-page/image5.jpg",
        "images/pages/content3-page/image6.jpg",
        "images/pages/content3-page/image7.jpg",
        "images/pages/content3-page/image8.jpg",
        "images/pages/content3-page/image9.jpg"
      );
      break;

    // welcome-page
    case "welcome-page":
      $.preloadImages(
        "images/pages/welcome-page/heart.png",
        "images/pages/welcome-page/main.png",
        "images/pages/welcome-page/qr.png",
        "images/pages/welcome-page/timeline1.png",
        "images/pages/welcome-page/timeline2.png",
        "images/pages/welcome-page/timeline3.png",
        "images/pages/welcome-page/vactor1.png",
        "images/pages/welcome-page/vactor2.png",
        "images/pages/welcome-page/vactor3.png",
        "images/pages/welcome-page/vactor4.png",
        "images/pages/welcome-page/vactor5.png",
        "images/pages/welcome-page/vactor6.png",
        "images/pages/welcome-page/vactor7.png",
        "images/pages/welcome-page/vactor8.png",
        "images/pages/welcome-page/vactor9.png"
      );
      break;
  }
}
