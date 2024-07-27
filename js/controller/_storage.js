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

var activeGame = "";
/* Fix default data */
function initialData() {
  return {
    "#select-lang": {
      nextPage: "welcome-page",
    },
    "#welcome-page": {
      prevPage: "select-lang",
      nextPage: "chap1-intro-page",
    },

    // chap1
    "#chap1-intro-page": {
      prevPage: "welcome-page",
      nextPage: "chap1-content1-page",
    },
    "#chap1-content1-page": {
      prevPage: "chap1-intro-page",
      nextPage: "chap1-content2-page",
    },
    "#chap1-content2-page": {
      prevPage: "chap1-content1-page",
      nextPage: "chap1-content3-page",
    },
    "#chap1-content3-page": {
      prevPage: "chap1-content2-page",
      nextPage: "chap1-content4-page",
    },
    "#chap1-content4-page": {
      prevPage: "chap1-content3-page",
      nextPage: "chap2-intro-page",
    },

    // chap2
    "#chap2-intro-page": {
      prevPage: "chap1-content4-page",
      nextPage: "chap2-video1-page",
    },
    "#chap2-video1-page": {
      prevPage: "chap2-intro-page",
      nextPage: "main-page",
    },
    "#main-page": {
      active: 1,
      part1PrevPage: "chap2-video1-page",
      part1NextPage: "chap2-part3-game1-page",

      part2PrevPage: "chap2-part3-video2-page",
      part2NextPage: "chap2-part2-game1-page",

      part3PrevPage: "chap2-part2-result-page",
      part3NextPage: "chap2-part1-game1-page",
    },

    // chap2 part3
    "#chap2-part3-game1-page": {
      prevPage: "main-page",
      nextPage: "chap2-part3-video1-page",
    },
    "#chap2-part3-video1-page": {
      prevPage: "chap2-part3-game1-page",
      nextPage: "chap2-part3-content1-page",
      fistTime: true,
    },
    "#chap2-part3-content1-page": {
      prevPage: "chap2-part3-video1-page",
      nextPage: "chap2-part3-content2-page",
    },
    "#chap2-part3-content2-page": {
      prevPage: "chap2-part3-content1-page",
      nextPage: "chap2-part3-game2-page",
    },
    "#chap2-part3-game2-page": {
      prevPage: "chap2-part3-content2-page",
      nextPage: "chap2-part3-game3-page",
    },
    "#chap2-part3-game3-page": {
      prevPage: "chap2-part3-game2-page",
      nextPage: "chap2-part3-video2-page",
    },
    "#chap2-part3-video2-page": {
      prevPage: "chap2-part3-game3-page",
      nextPage: "chap2-part3-result-page",
    },
    "#chap2-part3-result-page": {
      prevPage: "chap2-part3-video2-page",
      nextPage: "main-page",
    },

    // chap2 part2
    "#chap2-part2-game1-page": {
      prevPage: "main-page",
      nextPage: "chap2-part2-video1-page",
    },
    "#chap2-part2-video1-page": {
      prevPage: "chap2-part2-game1-page",
      nextPage: "chap2-part2-content1-page",
      fistTime: true,
    },
    "#chap2-part2-content1-page": {
      prevPage: "chap2-part2-video1-page",
      nextPage: "chap2-part2-content2-page",
    },
    "#chap2-part2-content2-page": {
      prevPage: "chap2-part2-content1-page",
      nextPage: "chap2-part2-game2-page",
    },
    "#chap2-part2-game2-page": {
      prevPage: "chap2-part2-content2-page",
      nextPage: "chap2-part2-game3-page",
    },
    "#chap2-part2-game3-page": {
      prevPage: "chap2-part2-game2-page",
      nextPage: "chap2-part2-video2-page",
    },
    "#chap2-part2-video2-page": {
      prevPage: "chap2-part2-game3-page",
      nextPage: "chap2-part2-result-page",
    },
    "#chap2-part2-result-page": {
      prevPage: "chap2-part2-video2-page",
      nextPage: "main-page",
    },

    // chap2 part1
    "#chap2-part1-game1-page": {
      prevPage: "main-page",
      nextPage: "chap2-part1-video1-page",
    },
    "#chap2-part1-video1-page": {
      prevPage: "chap2-part1-game1-page",
      nextPage: "chap2-part1-content1-page",
      fistTime: true,
    },
    "#chap2-part1-content1-page": {
      prevPage: "chap2-part1-video1-page",
      nextPage: "chap2-part1-content2-page",
    },
    "#chap2-part1-content2-page": {
      prevPage: "chap2-part1-content1-page",
      nextPage: "chap2-part1-game2-page",
    },
    "#chap2-part1-game2-page": {
      prevPage: "chap2-part1-content2-page",
      nextPage: "chap2-part1-game3-page",
    },
    "#chap2-part1-game3-page": {
      prevPage: "chap2-part1-game2-page",
      nextPage: "chap2-part1-video2-page",
    },
    "#chap2-part1-video2-page": {
      prevPage: "chap2-part1-game3-page",
      nextPage: "chap2-part1-result-page",
    },
    "#chap2-part1-result-page": {
      prevPage: "chap2-part1-video2-page",
      nextPage: "chap3-intro-page",
    },

    // Chap3
    "#chap3-intro-page": {
      prevPage: "chap2-part1-result-page",
      nextPage: "chap3-game-page",
    },
    "#chap3-game-page": {
      prevPage: "chap3-intro-page",
      nextPage: "chap3-result-page",
      score: 0,
    },
    "#chap3-result-page": {
      prevPage: "chap3-game-page",
      nextPage: "chap1-intro-page",
    },
  };
}

let $store = {
  ...initialData(),
};

var running;

// CHAP1-CONTENT1
var clientYChap1Content1;
var clientStepChap1Content1;

// CHAP1-CONTENT2
var clientYChap1Content2;
var clientStepChap1Content2;

// CHAP1-CONTENT3
var clientYChap1Content3;
var clientStepChap1Content3;

// CHAP1-CONTENT4
var clientYChap1Content4;
var clientStepChap1Content4;

// MAIN-PAGE
var step;

// CHAP1-INTRO-PAGE
var wheelCount;

// CHAP 2 PART 1 GAME 2
var chap2Part1Game2Swiper1;
var chap2Part1Game2Swiper2;

// CHAP 2 PART 1 GAME 3
var chap2Part1Game3Item;
var clientYChap2Part1Game3;

// CHAP 2 PART 2 GAME 2
var chap2Part2Game2Swiper1;
var chap2Part2Game2Swiper2;

// CHAP 2 PART 2 GAME 3
var chap2Part2Game3Item;
var chap2Part2Game3Counder;

// CHAP 2 PART 3 GAME 2
var chap2Part3Game2Swiper1;
var chap2Part3Game2Swiper2;

// CHAP 2 PART 3 GAME 3
var chap2Part3Game3Item;
var chap2Part3Game3Counder;

// CHAP 3 GAME PAGE
var click;

// CHAP 3 RESULT PAGE
var score;
