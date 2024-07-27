function goto(page, nav) {
  loadPage(
    "templates/" + page + ".html",
    "js/pages/" + page + ".js",
    page + ".json",
    nav
  );
}

/*  loadPage life cycle
 *  1. clear the time interval / clear arrow animation
 *  2. empty the content
 *  3. load new content according to page
 *  4. apply the header/footer
 *  5. apply the theme
 */
function loadPage(pagePath, script, json, nav) {
  clearAllTimeout();
  clearAllInterval();

  $("#content .page").addClass("current");
  if (nav) {
    $.get(pagePath, function (data) {
      //TODO

      if (!$("html").hasClass("load")) {
        $("html").addClass("load");
        if (nav == "next") {
          $("html").offClick();
          $(".page").after(data);
          pageAnimationNext();
        } else {
          $("html").offClick();
          $(".page").before(data);
          pageAnimationBack();
          $(".page").eq(0).css("margin-top", -$(window).innerHeight());
        }

        $("#main-container").attr("class", "");
        $("#main-container").attr("class", pagePath.slice(10, -5));
        initLoadPage(pagePath);
      }

      setTimeout(function () {
        $("html").removeClass("load");
      }, 1000);
    });
  } else {
    $("#content")
      .fadeOut(500, function () {
        $(this)
          .empty()
          .load(pagePath, function () {
            $("#main-container").attr("class", "");
            $("#main-container").attr("class", pagePath.slice(10, -5));
            initLoadPage(pagePath);
            $("#content .page").css("opacity", 1);
            $("#content .page .container").css("opacity", 1);
          });
      })
      .fadeIn();
  }

  function initLoadPage(pagePath) {
    var jsonPath;

    // var chap3Game = [
    //   "chap3-content2-page",
    //   "chap3-game1-page",
    //   "chap3-game2-page",
    //   "chap3-game3-page",
    // ];

    // var chapIntro = [
    //   "chap1-intro-page",
    //   "chap2-intro-page",
    //   "chap3-intro-page",
    //   "chap4-intro-page",
    // ];

    // var chapVideo = ["chap1-video-page", "chap2-video-page"];

    // if (chap3Game.includes(pagePath.slice(10, -5))) {
    //   jsonPath = "chap3-game1-page.json";
    // } else if (chapIntro.includes(pagePath.slice(10, -5))) {
    //   jsonPath = "chap1-intro-page.json";
    // } else if (chapVideo.includes(pagePath.slice(10, -5))) {
    //   jsonPath = "chap1-video-page.json";
    // } else {
    jsonPath = json;
    // }

    loadLocalizableResources(
      "data/" + getCookie("lang") + "/" + jsonPath,
      function () {
        // LOAD JS
        $.getScript(script, function () {
          $("#main-container").fadeInByOpacity();
          $("#loading").fadeOut();
          $("#content").fadeIn(700);
        });

        inArrayNavMod();

        // SPECIFIC PAGE NAME
        var getName = $(".page:not(.current)").data("menu");
        $(".nav__page").hide();
        var getPart = $(".page:not(.current)").data("part");
        console.log("getPart " + getPart);

        $(".menu_list li p").removeClass("active");
        $(".menu_list li p[data-active=" + getPart + "]").addClass("active");

        if (getName == 2) {
          var getSubPart = $(".page:not(.current)").data("subpart");
          $(".nav__page.page-sub-name--" + getSubPart).show();
          switch (getPart) {
            case 1:
              $(".nav__page.page-name--4").show();
              break;
            case 2:
              $(".nav__page.page-name--5").show();
              break;
            case 3:
              $(".nav__page.page-name--6").show();
              break;
          }
        } else {
          $(".nav__page.page-name--" + getName).show();
        }
      }
    );
  }
}

function inArrayNavMod() {
  var pageName = $(".page:not(.current)").attr("id");
  var hideHeader = [
    "select-lang",
    "chap2-part1-video1-page",
    "chap2-part2-video1-page",
    "chap2-part3-video1-page",
  ];
  var showHelpIcon = [];

  // HIDE HEADER
  if (hideHeader.includes(pageName)) {
    header.hide();
  } else {
    header.fadeIn();
  }

  if (showHelpIcon.includes(pageName)) {
    $(`#header .help-icon`).fadeIn();
  } else {
    $(`#header .help-icon`).hide();
  }
}

function pageAnimationBack() {
  $("html").offClick();
  $("#content .page").off("wheel");

  var pageName = $(".page:not(.current)").attr("id");
  var hideAnim = [];
  if (hideAnim.includes(pageName)) {
    gsap.to($("#content .page:not('.current')"), {
      alpha: 1,
      duration: 1,
      ease: Power4.easeInout,
      delay: 0.1,
      onComplete: function () {},
    });
  } else {
    gsap.to($("#content .page.current"), {
      alpha: 0.2,
      duration: 1.5,
      ease: Power4.easeInout,
      onComplete: function () {},
    });

    gsap.to($("#content .page:not('.current')"), {
      alpha: 1,
      duration: 1.5,
      ease: Power4.easeInout,
      delay: 0.1,
      onComplete: function () {},
    });

    gsap.fromTo(
      $("#content .page:not('.current') .container"),
      {
        y: "-20%",
        alpha: 0,
      },
      {
        y: 0,
        alpha: 1,
        duration: 1,
        ease: Power4.easeInout,
        onComplete: function () {
          // $(self).css('transform', 'none');
        },
      }
    );
  }

  gsap.to($("#content"), {
    top: $(window).innerHeight(),
    duration: 1,
    ease: Power4.easeInout,
    onComplete: function () {
      $(".page").eq(0).css("margin-top", 0);
      $(".page.current").remove();
      $("#content").clearAnim();
      $("html").onClick();
      $("html").css("cursor", "default");
      $("#content .page").on("wheel");
    },
  });
}

function pageAnimationNext() {
  $("html").offClick();
  $("#content .page").off("wheel");

  gsap.to($("#content .page:not('.current')"), {
    y: 0,
    alpha: 1,
    duration: 0.1,
    delay: 0.1,
    ease: Power4.easeInout,
    onComplete: function () {
      // $(self).css('transform', 'none');
    },
  });

  gsap.fromTo(
    $("#content .page:not('.current') .container"),
    {
      y: "20%",
    },
    {
      y: 0,
      alpha: 1,
      duration: 1,
      ease: Power0.easeNone,
    }
  );

  gsap.to($("#content"), {
    top: -$(window).innerHeight(),
    duration: 1,
    // 1.7
    ease: Power4.easeInout,
    delay: 0.1,
    onComplete: function () {
      $(".page.current").remove();
      $("#content").clearAnim();
      $("html").onClick();
      $("html").css("cursor", "default");
      $("#content .page").on("wheel");
    },
  });
}
