// ==================================================
// MENU CONTROL
// ==================================================
//MENU
var navMenu = $("#menu");
var menuClose = $("#menu-close");
var menuList = $(".menu_list li");
var _menuList = $(".menu_list li .title");
var subMenuList = $(".menu_list li p.text");
var navExit = $("#exit");
// var menuUnlock = [true, false, false];
var chapStatus = [
  { isUnlock: false, isComplete: false },
  { isUnlock: false, isComplete: false },
  { isUnlock: false, isComplete: false },
];
function menuControl() {
  navMenu.on("click", function () {
    openMenu();
    unlockMenu();
  });

  menuClose.on("click", function () {
    closeMenu();
    header.onClick();
  });

  _menuList.on("click", function () {
    var pageName = $(this).attr("data-goto");
    console.log(this);
    // console.log('click');
    console.log(pageName);
    closeMenu();
    goto(pageName);
  });

  subMenuList.on("click", function () {
    let pageName = $(this).attr("data-goto");
    let active = parseInt($(this).attr("data-active"));

    console.log(pageName, active);
    // var activePage;
    closeMenu();
    // header.onClick();
    $store["#main-page"].active = active;
    subMenuList.removeClass("active");
    $(".menu_list li p[data-active=" + active + "]").addClass("active");
    goto(pageName);
  });

  navExit.on("click", function () {
    goto("select-lang");
    navExit.offClick();
    setTimeout(function () {
      navExit.onClick();
    }, 600);
  });
}

function openMenu() {
  $(".menu-overlay").fadeIn();
  header.hide();
  gsap.fromTo(
    ".menu-overlay .menu",
    { x: -50 },
    {
      x: 0,
      duration: 0.7,
      onComplete: function () {
        $(".menu-overlay .menu").clearAnim();
      },
    }
  );

  timeouts.push(
    setTimeout(() => {
      $(".menu-overlay").find(".close").rotate();
    }, 5000)
  );
}

function closeMenu() {
  header.show();
  clearAllTimeout();
  gsap.to(".menu-overlay .menu", {
    x: -50,
    duration: 0.7,
    onComplete: function () {
      $(".menu-overlay .menu,.menu-overlay .close").clearAnim();
      $(".menu-overlay").onClick();
    },
  });
  $(".menu-overlay").fadeOut();
}

function unlockMenu() {
  var dataMenu = $(".page").data("menu");
  dataMenu = dataMenu;
  console.log(dataMenu);

  // unlock menu
  menuList.each(function (index) {
    if (index <= dataMenu) {
      $(this).removeClass("locked");
      // menuUnlock[index] = true;
    }
  });
  // active current menu
  $(".menu-overlay .menu.active").removeClass("active");
  $(".menu-overlay .menu[data-menu=" + dataMenu + "]").addClass("active");
}
