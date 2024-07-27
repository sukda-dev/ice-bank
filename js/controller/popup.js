var popup = {
  init: function (elem) {
    this.guide(elem);
  },

  close: function (elem) {
    var self = $(".popup-overlay.popup-overlay--" + elem + " .popup");
    $(".popup-overlay").offClick();
    clearAllTimeout();
    gsap.to(self, {
      y: "-100%",
      duration: 0.7,
      onComplete: function () {
        self.clearAnim();
        $(".popup-overlay .popup__close").clearAnim();
        $(".popup-overlay").onClick();
      },
    });
    $(".popup-overlay").fadeOut();
  },

  open: function (elem) {
    $(".popup-overlay--" + elem).fadeIn();
    var self = $(".popup-overlay.popup-overlay--" + elem + " .popup");
    gsap.fromTo(
      self,
      { y: "-100%" },
      {
        y: 0,
        duration: 0.7,
        onComplete: function () {
          self.clearAnim();
        },
      }
    );

    if (elem == "chap3-game") {
      setTimeout(function () {
        removeBr({
          elem: $(".popup-overlay--chap3-game .popup__content p"),
          device_version: "mobile",
        });
      }, 50);
    }

    timeouts.push(
      setTimeout(() => {
        $(".popup-overlay .popup__close").rotate();
      }, 5000)
    );
  },
};
