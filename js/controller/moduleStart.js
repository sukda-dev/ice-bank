var moduleStart = {
  init: function () {
    moduleStart.preloadImg();
    // moduleStart.setLang();
    moduleStart.setFirstPage();
    moduleStart.callMenu();
    moduleStart.calculateScreen();
    moduleStart.disableLog();
  },

  // PRELOAD GENERAL IMAGE FOLDER AND FIRST PAGE
  preloadImg: function () {
    preloadImages("general");
    preloadImages("select-lang");
  },

  // SET LANGUAGE
  setLang: function () {
    if (!GetURLParameter("_lang")) {
      window.location = "?_lang=en-gb";
      setCookie("lang", "en-gb", 365);
      lang = "en-gb";
    } else {
      setCookie("lang", GetURLParameter("_lang"), 365);
      lang = GetURLParameter("_lang");
    }
  },

  // DO THE RESPONSIVE FOR PROJECT WITH .PSD AND .XD
  calculateScreen: function () {
    responsive.init();
  },

  // CALL THE FIRST PAGE
  setFirstPage: function () {
    loadLocalizableResources(
      "data/" + getCookie("lang") + "/base.json",
      function () {
        if (GetURLParameter("_goto")) {
          goto(GetURLParameter("_goto"));
        } else {
          goto("welcome-page");
        }
      }
    );

    gsap.fromTo(
      $(".card-backgroung__sky"),
      {
        x: 0,
      },
      {
        x: "-50%",
        ease: "none",
        repeat: -1,
        duration: 10,
        delay: 0,
      }
    );
  },

  // INIT THE MENU FUNCTION
  callMenu: function () {
    menuControl();
  },

  // DISABLE ALL LOG WHEN IT'S NOT IN A LOCALHOST
  disableLog: function () {
    if (!["localhost", "127.0.0.1"].includes(location.hostname)) {
      window["console"]["log"] = function () {};
    }
  },
};
