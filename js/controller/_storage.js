//VARIABLE FOR MODULE
var header = $("#header");

// SPECIFIC DEVICES
var isIOS =
  /iPad|iPhone|iPod/.test(navigator.platform) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
var isMobile =
  /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
    navigator.userAgent
  );
var isTablet = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(
  navigator.userAgent
);
var isIE =
  window.navigator.userAgent.indexOf("MSIE ") > 0 ||
  !!navigator.userAgent.match(/Trident.*rv\:11\./);

// TIMEOUTS
var timeouts = [],
  lockpage = [];
var intervals = [];

var activeModule = false;
