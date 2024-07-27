//Create Cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}
//END Create Cookie

//get lageuage parameter frome URL
function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}
//END get lageuage parameter frome URL

//Hide Navigation
function hideNavigation(navigationPrev, navigationNext) {
  if (typeof navigationPrev != "undefined") {
    navigationPrev.fadeOut();
  }

  if (typeof navigationNext != "undefined") {
    navigationNext.fadeOut();
  }
}

//Show Navigation
function showNavigation(navigationPrev, navigationNext) {
  if (typeof navigationPrev != "undefined") {
    navigationPrev.fadeIn();
  }

  if (typeof navigationNext != "undefined") {
    navigationNext.fadeIn();
  }
}

function clearAllTimeout() {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }

  timeouts = [];
}

function clearAllInterval() {
  for (var i = 0; i < intervals.length; i++) {
    clearInterval(intervals[i]);
  }
  intervals = [];
}

$.fn.offClick = function () {
  $(this).css("pointerEvents", "none");
};

$.fn.onClick = function () {
  $(this).css({
    pointerEvents: "auto",
    // cursor: "pointer",
  });
};

//-----------------------------------------------
//      Preload Imgage
//-----------------------------------------------
$.preloadImages = function () {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
};

function mobileDevice() {
  if ($(window).width() < $(window).height()) return true;
}

function unlockChapter(no) {
  for (var i = 1; i <= no; i++) {
    chapStatus[i - 1].isUnlock = true;
  }
}

function compleateChapter(no) {
  for (var i = 1; i <= no; i++) {
    chapStatus[i - 1].isComplete = true;
  }
}

function isEmpty(el) {
  return !$.trim(el.html());
}

// - How to use -
// setTimeout(function () {
//   removeBr({
//     elem: $("#chap1-game .diamond__desc"), // if have more than one use "," ex:$("#chap1-game .diamond__desc,#chap1-game .ins"),
//     device_version: "mobile", //default mobile
//   });

//   removeBr({
//     elem: $("#chap1-game .diamond__content"),
//     device_version: "desktop",
//   });
// }, 50);

function removeBr(ob_data) {
  if (typeof ob_data.device_version == "undefined")
    ob_data.device_version = "mobile";
  if (ob_data.device_version == "mobile" ? isMobile : !isMobile) {
    checkDataType(ob_data.elem);
  } else {
    if (ob_data.elem1) {
      checkDataType(ob_data.elem1);
    }
  }

  function checkDataType(txtData) {
    if (Array.isArray(txtData)) {
      txtData.each(function (index, element) {
        $(this).each(function (index1, element1) {
          $(this).html(
            $(this)
              .html()
              .replace(/<br\s*[\/]?>/gi, " ")
          );
        });
      });
    } else {
      txtData.each(function (index, element) {
        $(this).html(
          $(this)
            .html()
            .replace(/<br\s*[\/]?>/gi, " ")
        );
      });
    }
  }
}

function changeBr(ob_data) {
  if (typeof ob_data.device_version == "undefined")
    ob_data.device_version = "mobile";
  if (ob_data.device_version == "mobile" ? isMobile : !isMobile) {
    checkDataType(ob_data.elem);
  } else {
    if (ob_data.elem1) {
      checkDataType(ob_data.elem1);
    }
  }

  function checkDataType(txtData) {
    if (Array.isArray(txtData)) {
      txtData.each(function (index, element) {
        $(this).each(function (index1, element1) {
          $(this).html(
            $(this)
              .html()
              .replace(/<br\s*[\/]?>/gi, " - ")
          );
        });
      });
    } else {
      txtData.each(function (index, element) {
        $(this).html(
          $(this)
            .html()
            .replace(/<br\s*[\/]?>/gi, " - ")
        );
      });
    }
  }
}

function isVertical() {
  if ($(window).height() > $(window).width()) {
    return true;
  } else {
    return false;
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function eachFadeInByOpacity(elemArray, callback) {
  let timeouts = [];

  for (let i = 0; i < elemArray.length; i++) {
    const element = elemArray[i];

    timeouts.push(
      setTimeout(() => {
        element.fadeInByOpacity();

        // Check if this is the last element
        if (i === elemArray.length - 1) {
          // Call the callback function
          callback();
        }
      }, 500 * i)
    );
  }
}
