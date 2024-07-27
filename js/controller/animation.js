$.fn.clearAnim = function (elem) {
  $(this).removeClass("animate");
  gsap.killTweensOf($(this));
  if (typeof elem == "undefined") {
    gsap.set($(this), {
      clearProps: "all",
    });
  } else {
    gsap.set($(this), {
      clearProps: elem,
    });
  }
};

$.fn.pulseTwices = function (delay, duration, callback) {
  if (typeof delay == "undefined") delay = 1;
  if (typeof duration == "undefined") duration = 0.3;
  gsap.to($(this), {
    alpha: 0.3,
    yoyo: true,
    repeat: 3,
    ease: Linear,
    duration: duration,
    delay: delay,
    onComplete: callback,
  });
};

$.fn.pulse = function (obj) {
  if (typeof obj == "undefined") obj = {};
  if (typeof obj.delay == "undefined") obj.delay = 0.4;
  if (typeof obj.alpha == "undefined") obj.alpha = 0.5;
  gsap.to($(this), {
    alpha: obj.alpha,
    yoyo: true,
    repeat:
      typeof obj.repeat === "undefined"
        ? -1
        : obj.repeat % 2 == 0
        ? (obj.repeat += 1)
        : (obj.repeat += 2),
    ease: Power1.easeOut,
    delay: obj.delay,
  });
};

$.fn.fadeInByOpacity = function (delay, anim_time) {
  if (typeof delay == "undefined") delay = 0.1;
  if (typeof anim_time == "undefined") anim_time = 0.5;
  gsap.to($(this), {
    opacity: 1,
    ease: Power0.easeNone,
    duration: anim_time,
    delay: delay,
  });
};

$.fn.fadeOutByOpacity = function (delay, anim_time) {
  if (typeof delay == "undefined") delay = 0.1;
  if (typeof anim_time == "undefined") anim_time = 0.5;
  gsap.to($(this), {
    opacity: 0,
    ease: Power0.easeNone,
    duration: anim_time,
    delay: delay,
  });
};

$.fn.fadeInByFlex = function (times) {
  if (typeof times == "undefined") times = 400;
  times = times / 1000;
  gsap.fromTo(
    $(this),
    {
      display: "none",
      alpha: 0,
    },
    {
      display: "flex",
      alpha: 1,
      direction: times,
    }
  );
};

$.fn.fadeOutByFlex = function (times) {
  if (typeof times == "undefined") times = 400;
  times = times / 1000;
  gsap.to($(this), {
    duration: times,
    display: "none",
  });
};

$.fn.ins = function (delay) {
  if (typeof delay === "undefined") delay = 0;
  var self = this;
  gsap.fromTo(
    $(this),
    {
      left: "-5rem",
      alpha: 0,
    },
    {
      left: 0,
      alpha: 1,
      duration: 0.4,
      delay: delay,
      ease: Power1.linear,
    }
  );

  gsap.to($(this), {
    alpha: 0.3,
    yoyo: true,
    repeat: 3,
    duration: 0.25,
    ease: Power0.easeOut,
    delay: delay + 0.5,
  });
};

$.fn.downPulse = function downPulse() {
  gsap.to($(this), {
    y: "0.3rem",
    repeat: -1,
    yoyo: true,
    duration: 0.4,
    delay: 2,
  });
};

$.fn.arrowPulse = function (delay) {
  if (delay == "undefined") delay = 0;
  gsap.to($(this), {
    pointerEvents: "auto",
    duration: 0.4,
    delay: delay,
  });
  gsap.to($(this), {
    x: "0.3rem",
    repeat: -1,
    yoyo: true,
    duration: 0.4,
    delay: delay,
  });
};

/* Shake animation */
$.fn.shake = function (anim, callback) {
  if (typeof anim == "undefined" || anim == null) anim = "4";
  var self = this;
  gsap.fromTo(
    $(self),
    {
      x: "-" + anim,
    },
    {
      x: anim,
      duration: 0.08,
      yoyo: true,
      repeat: 7,
      ease: Power1.linear,
      onComplete: function () {
        $(self).css("transform", "none");
        callback;
      },
    }
  );
};

$.fn.shakeAbsolute = function (anim, callback) {
  if (typeof anim == "undefined" || anim == null) anim = "4";
  var self = this;
  gsap.fromTo(
    $(self),
    {
      x: "-" + anim,
    },
    {
      x: anim,
      duration: 0.08,
      yoyo: true,
      repeat: 7,
      ease: Power1.linear,
      onComplete: callback,
    }
  );
};

$.fn.rotate = function () {
  var self = this;
  gsap.to($(self), {
    rotation: "360",
    repeat: -1,
    duration: 2,
    ease: Power0.linear,
  });
};

$.fn.letterByLetter = function (delay, speed) {
  if (typeof delay === "undefined") speed = 0.1;
  if (typeof delay === "undefined") delay = 0;
  var self = this;
  let typeSplit = new SplitType(self, {
    type: "words,chars",

    // tagName: "span",
  });

  gsap.from(typeSplit.chars, {
    alpha: 0,
    duration: 0.5,
    ease: "power1.out",
    stagger: speed,
    delay: delay,
  });
};
