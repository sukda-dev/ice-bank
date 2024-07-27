function componentControl(e){for(var a=$("html").find("component"),t=0;t<a.length;t++){var n=$(a[t]),o=n.attr("src");n.hasClass("appear")||(n.addClass("appear"),n.load(o))}e()}var jsonDoc;$.fn.clearAnim=function(e){$(this).removeClass("animate"),gsap.killTweensOf($(this)),void 0===e?gsap.set($(this),{clearProps:"all"}):gsap.set($(this),{clearProps:e})},$.fn.pulseTwices=function(e,a,t){void 0===e&&(e=1),void 0===a&&(a=.3),gsap.to($(this),{alpha:.3,yoyo:!0,repeat:3,ease:Linear,duration:a,delay:e,onComplete:t})},$.fn.pulse=function(e){void 0===e&&(e={}),void 0===e.delay&&(e.delay=.4),void 0===e.alpha&&(e.alpha=.5),gsap.to($(this),{alpha:e.alpha,yoyo:!0,repeat:void 0===e.repeat?-1:e.repeat%2==0?e.repeat+=1:e.repeat+=2,ease:Power1.easeOut,delay:e.delay})},$.fn.fadeInByOpacity=function(e,a){void 0===e&&(e=.1),void 0===a&&(a=.5),gsap.to($(this),{opacity:1,ease:Power0.easeNone,duration:a,delay:e})},$.fn.fadeOutByOpacity=function(e,a){void 0===e&&(e=.1),void 0===a&&(a=.5),gsap.to($(this),{opacity:0,ease:Power0.easeNone,duration:a,delay:e})},$.fn.fadeInByFlex=function(e){void 0===e&&(e=400),e/=1e3,gsap.fromTo($(this),{display:"none",alpha:0},{display:"flex",alpha:1,direction:e})},$.fn.fadeOutByFlex=function(e){void 0===e&&(e=400),e/=1e3,gsap.to($(this),{duration:e,display:"none"})},$.fn.ins=function(e){void 0===e&&(e=0);gsap.fromTo($(this),{left:"-5rem",alpha:0},{left:0,alpha:1,duration:.4,delay:e,ease:Power1.linear}),gsap.to($(this),{alpha:.3,yoyo:!0,repeat:3,duration:.25,ease:Power0.easeOut,delay:e+.5})},$.fn.downPulse=function(){gsap.to($(this),{y:"0.3rem",repeat:-1,yoyo:!0,duration:.4,delay:2})},$.fn.arrowPulse=function(e){"undefined"==e&&(e=0),gsap.to($(this),{pointerEvents:"auto",duration:.4,delay:e}),gsap.to($(this),{x:"0.3rem",repeat:-1,yoyo:!0,duration:.4,delay:e})},$.fn.shake=function(e,a){void 0!==e&&null!=e||(e="4");var t=this;gsap.fromTo($(t),{x:"-"+e},{x:e,duration:.08,yoyo:!0,repeat:7,ease:Power1.linear,onComplete:function(){$(t).css("transform","none")}})},$.fn.shakeAbsolute=function(e,a){void 0!==e&&null!=e||(e="4");gsap.fromTo($(this),{x:"-"+e},{x:e,duration:.08,yoyo:!0,repeat:7,ease:Power1.linear,onComplete:a})},$.fn.rotate=function(){gsap.to($(this),{rotation:"360",repeat:-1,duration:2,ease:Power0.linear})},$.fn.letterByLetter=function(e,a){void 0===e&&(a=.1),void 0===e&&(e=0);var t=new SplitType(this,{type:"words,chars"});gsap.from(t.chars,{alpha:0,duration:.5,ease:"power1.out",stagger:a,delay:e})};var urlData="../../json/",path=window.location.pathname;function loadLocalizableResources(e,a){urlData=e,$.getJSON(urlData).done((function(e){var t;t=e,$("body").trigger("jsonReady"),function(e){$.each(e,(function(e,a){window[a.key]=replaceServiceCharacters(a.data.value)})),"function"==typeof a&&a()}(t),doLocalize()})).fail((function(e,t,n){a()}))}function replaceServiceCharacters(e){return e=replaceAll(e,"[nbsp]","&nbsp;"),e=replaceAll(e,"[","<"),e=replaceAll(e,"]",">"),e=replaceAll(e,"\\n","<br>")}function replaceAll(e,a,t){for(var n=e.indexOf(a);-1!=n;)n=(e=e.replace(a,t)).indexOf(a);return e}function querySt(e){var a=window.location.href;KeysValues=a.split(/[\?&]+/);for(var t=0;t<KeysValues.length;t++){var n=KeysValues[t].split("=");if(n[0]==e)return n[1]}}function doLocalize(){$(("undefined"==typeof containerSelector?"":containerSelector+" ")+"[lcz]").each((function(){$(this).html(window[$(this).attr("lcz")])}))}$((function(){moduleStart.init()}));var navMenu=$("#menu"),menuClose=$("#menu-close"),menuList=$(".menu_list li"),_menuList=$(".menu_list li .title"),subMenuList=$(".menu_list li p.text"),navExit=$("#exit"),chapStatus=[{isUnlock:!1,isComplete:!1},{isUnlock:!1,isComplete:!1},{isUnlock:!1,isComplete:!1}];function menuControl(){navMenu.on("click",(function(){openMenu(),unlockMenu()})),menuClose.on("click",(function(){closeMenu(),header.onClick()})),_menuList.on("click",(function(){var e=$(this).attr("data-goto");console.log(this),console.log(e),closeMenu(),goto(e)})),subMenuList.on("click",(function(){var e=$(this).attr("data-goto"),a=parseInt($(this).attr("data-active"));console.log(e,a),closeMenu(),$store["#main-page"].active=a,subMenuList.removeClass("active"),$(".menu_list li p[data-active="+a+"]").addClass("active"),goto(e)})),navExit.on("click",(function(){goto("select-lang"),navExit.offClick(),setTimeout((function(){navExit.onClick()}),600)}))}function openMenu(){$(".menu-overlay").fadeIn(),header.hide(),gsap.fromTo(".menu-overlay .menu",{x:-50},{x:0,duration:.7,onComplete:function(){$(".menu-overlay .menu").clearAnim()}}),timeouts.push(setTimeout((function(){$(".menu-overlay").find(".close").rotate()}),5e3))}function closeMenu(){header.show(),clearAllTimeout(),gsap.to(".menu-overlay .menu",{x:-50,duration:.7,onComplete:function(){$(".menu-overlay .menu,.menu-overlay .close").clearAnim(),$(".menu-overlay").onClick()}}),$(".menu-overlay").fadeOut()}function unlockMenu(){var e=$(".page").data("menu");console.log(e),menuList.each((function(a){a<=e&&$(this).removeClass("locked")})),$(".menu-overlay .menu.active").removeClass("active"),$(".menu-overlay .menu[data-menu="+e+"]").addClass("active")}var moduleStart={init:function(){moduleStart.preloadImg(),moduleStart.setLang(),moduleStart.setFirstPage(),moduleStart.callMenu(),moduleStart.calculateScreen(),moduleStart.disableLog()},preloadImg:function(){preloadImages("general"),preloadImages("select-lang")},setLang:function(){GetURLParameter("_lang")?(setCookie("lang",GetURLParameter("_lang"),365),lang=GetURLParameter("_lang")):(window.location="?_lang=en-gb",setCookie("lang","en-gb",365),lang="en-gb")},calculateScreen:function(){responsive.init()},setFirstPage:function(){loadLocalizableResources("data/"+getCookie("lang")+"/base.json",(function(){GetURLParameter("_goto")?goto(GetURLParameter("_goto")):goto("welcome-page")}))},callMenu:function(){menuControl()},disableLog:function(){["localhost","127.0.0.1"].includes(location.hostname)||(window.console.log=function(){})}};function goto(e,a){loadPage("templates/"+e+".html","js/pages/"+e+".js",e+".json",a)}function loadPage(e,a,t,n){function o(e){var n;n=t,loadLocalizableResources("data/"+getCookie("lang")+"/"+n,(function(){$.getScript(a,(function(){$("#main-container").fadeInByOpacity(),$("#loading").fadeOut(),$("#content").fadeIn(700)})),inArrayNavMod();var e=$(".page:not(.current)").data("menu");$(".nav__page").hide();var t=$(".page:not(.current)").data("part");if(console.log("getPart "+t),$(".menu_list li p").removeClass("active"),$(".menu_list li p[data-active="+t+"]").addClass("active"),2==e){var n=$(".page:not(.current)").data("subpart");switch($(".nav__page.page-sub-name--"+n).show(),t){case 1:$(".nav__page.page-name--4").show();break;case 2:$(".nav__page.page-name--5").show();break;case 3:$(".nav__page.page-name--6").show()}}else $(".nav__page.page-name--"+e).show()}))}clearAllTimeout(),clearAllInterval(),$("#content .page").addClass("current"),n?$.get(e,(function(a){$("html").hasClass("load")||($("html").addClass("load"),"next"==n?($("html").offClick(),$(".page").after(a),pageAnimationNext()):($("html").offClick(),$(".page").before(a),pageAnimationBack(),$(".page").eq(0).css("margin-top",-$(window).innerHeight())),$("#main-container").attr("class",""),$("#main-container").attr("class",e.slice(10,-5)),o(e)),setTimeout((function(){$("html").removeClass("load")}),1e3)})):$("#content").fadeOut(500,(function(){$(this).empty().load(e,(function(){$("#main-container").attr("class",""),$("#main-container").attr("class",e.slice(10,-5)),o(e),$("#content .page").css("opacity",1),$("#content .page .container").css("opacity",1)}))})).fadeIn()}function inArrayNavMod(){var e=$(".page:not(.current)").attr("id");["select-lang","chap2-part1-video1-page","chap2-part2-video1-page","chap2-part3-video1-page"].includes(e)?header.hide():header.fadeIn(),[].includes(e)?$("#header .help-icon").fadeIn():$("#header .help-icon").hide()}function pageAnimationBack(){$("html").offClick(),$("#content .page").off("wheel");var e=$(".page:not(.current)").attr("id");[].includes(e)?gsap.to($("#content .page:not('.current')"),{alpha:1,duration:1,ease:Power4.easeInout,delay:.1,onComplete:function(){}}):(gsap.to($("#content .page.current"),{alpha:.2,duration:1.5,ease:Power4.easeInout,onComplete:function(){}}),gsap.to($("#content .page:not('.current')"),{alpha:1,duration:1.5,ease:Power4.easeInout,delay:.1,onComplete:function(){}}),gsap.fromTo($("#content .page:not('.current') .container"),{y:"-20%",alpha:0},{y:0,alpha:1,duration:1,ease:Power4.easeInout,onComplete:function(){}})),gsap.to($("#content"),{top:$(window).innerHeight(),duration:1,ease:Power4.easeInout,onComplete:function(){$(".page").eq(0).css("margin-top",0),$(".page.current").remove(),$("#content").clearAnim(),$("html").onClick(),$("html").css("cursor","default"),$("#content .page").on("wheel")}})}function pageAnimationNext(){$("html").offClick(),$("#content .page").off("wheel"),gsap.to($("#content .page:not('.current')"),{y:0,alpha:1,duration:.1,delay:.1,ease:Power4.easeInout,onComplete:function(){}}),gsap.fromTo($("#content .page:not('.current') .container"),{y:"20%"},{y:0,alpha:1,duration:1,ease:Power0.easeNone}),gsap.to($("#content"),{top:-$(window).innerHeight(),duration:1,ease:Power4.easeInout,delay:.1,onComplete:function(){$(".page.current").remove(),$("#content").clearAnim(),$("html").onClick(),$("html").css("cursor","default"),$("#content .page").on("wheel")}})}var popup={init:function(e){this.guide(e)},close:function(e){var a=$(".popup-overlay.popup-overlay--"+e+" .popup");$(".popup-overlay").offClick(),clearAllTimeout(),gsap.to(a,{y:"-100%",duration:.7,onComplete:function(){a.clearAnim(),$(".popup-overlay .popup__close").clearAnim(),$(".popup-overlay").onClick()}}),$(".popup-overlay").fadeOut()},open:function(e){$(".popup-overlay--"+e).fadeIn();var a=$(".popup-overlay.popup-overlay--"+e+" .popup");gsap.fromTo(a,{y:"-100%"},{y:0,duration:.7,onComplete:function(){a.clearAnim()}}),"chap3-game"==e&&setTimeout((function(){removeBr({elem:$(".popup-overlay--chap3-game .popup__content p"),device_version:"mobile"})}),50),timeouts.push(setTimeout((function(){$(".popup-overlay .popup__close").rotate()}),5e3))}};function preloadImages(e){switch(e){case"general":$.preloadImages("images/general/arrow-down-m.png","images/general/arrow-select.png","images/general/arrow-up-m-lock.png","images/general/arrow-up-m.png","images/general/backdrop-back.png","images/general/backdrop.png","images/general/bg.png","images/general/close-m.png","images/general/close-pdf.png","images/general/close.svg","images/general/menu-bg-m.jpg","images/general/menu-icon-m.png","images/general/menu-m.png","images/general/mountain.png","images/general/shutdown-m.png","images/general/swiper-arrow-next.png","images/general/swiper-arrow-prev.png","images/general/swiper-button-next-m.png","images/general/swiper-button-prev-m.png");break;case"welcome-page":$.preloadImages("images/pages/welcome-page/heart.png","images/pages/welcome-page/main.png","images/pages/welcome-page/qr.png","images/pages/welcome-page/timeline1.png","images/pages/welcome-page/timeline2.png","images/pages/welcome-page/timeline3.png","images/pages/welcome-page/vactor1.png","images/pages/welcome-page/vactor2.png","images/pages/welcome-page/vactor3.png","images/pages/welcome-page/vactor4.png","images/pages/welcome-page/vactor5.png","images/pages/welcome-page/vactor6.png","images/pages/welcome-page/vactor7.png","images/pages/welcome-page/vactor8.png","images/pages/welcome-page/vactor9.png")}}var soundId1,responsive={init:function(){responsive.setScreen(),responsive.updateHtmlFontSize(),$(window).resize((function(){responsive.setScreen(),responsive.updateHtmlFontSize()}))},setScreen:function(){var e=window.innerWidth,a=window.innerHeight,t=$("#main-container");responsive.setHeight(t),t.css("width","100%"),isMobile&&!isTablet?t.css("width",e):isTablet||e<=a&&e/3*4>=a?t.css("width",1080*a/1920):e<=a?t.css("width",e):t.css("width",1080*a/1920)},setHeight:function(e){var a=window.innerHeight;"string"==typeof mobileSafari&&(a+=60),e.css("height",a)},calculateScreenSize:function(){var e=window.innerWidth,a=window.innerHeight;return isMobile&&!isTablet?(scale=62.5*e/320,$("html").css("font-size",scale+"%"),scale):((e>=a||e<=a&&e/3*4>=a)&&(e=1080*a/1920),scale=62.5*e/320,$("html").css("font-size",scale+"%"),scale)},updateHtmlFontSize:function(){var e=responsive.calculateScreenSize();document.documentElement.style.fontSize="".concat(e,"%")}};function scrollOnce(e){var a;mobileDevice()?($(e).on("touchstart",(function(e){a=e.touches[0].clientY})),$(e).on("touchend",(function(t){var n;n=t.changedTouches[0].clientY-a,a=0,n>=110?(goto($store[e].prevPage,"prev"),"#chap2-content1-page"==e&&$("".concat(e," .title strong")).addClass("next-page")):n<-100&&(goto($store[e].nextPage,"next"),"#chap2-content1-page"==e&&$("".concat(e," .title strong")).addClass("next-page")),"#chap3-result-page"==e&&($store["#chap3-game-page"].score=0)}))):$(e).on("wheel",(function(a){0!==a.originalEvent.deltaY&&(a.originalEvent.deltaY<0?(goto($store[e].prevPage,"prev"),"#chap2-content1-page"==e&&$("".concat(e," .bottle__title")).addClass("next-page")):(goto($store[e].nextPage,"next"),"#chap2-content1-page"==e&&$("".concat(e," .bottle__title")).addClass("next-page")))}))}function initSound(){soundId1=new Howl({src:["sound/background-music.mp3"],html5:!0,loop:!0,volume:.5})}function normalSound(){null!=soundId1&&(soundId1.playing(soundId1)||(soundId1=soundId1.play()))}function setCookie(e,a,t){var n=new Date;n.setTime(n.getTime()+24*t*60*60*1e3);var o="expires="+n.toUTCString();document.cookie=e+"="+a+"; "+o}function getCookie(e){for(var a=e+"=",t=document.cookie.split(";"),n=0;n<t.length;n++){for(var o=t[n];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(a))return o.substring(a.length,o.length)}return""}function GetURLParameter(e){for(var a=window.location.search.substring(1).split("&"),t=0;t<a.length;t++){var n=a[t].split("=");if(n[0]==e)return n[1]}}function hideNavigation(e,a){void 0!==e&&e.fadeOut(),void 0!==a&&a.fadeOut()}function showNavigation(e,a){void 0!==e&&e.fadeIn(),void 0!==a&&a.fadeIn()}function clearAllTimeout(){for(var e=0;e<timeouts.length;e++)clearTimeout(timeouts[e]);timeouts=[]}function clearAllInterval(){for(var e=0;e<intervals.length;e++)clearInterval(intervals[e]);intervals=[]}function mobileDevice(){if($(window).width()<$(window).height())return!0}function unlockChapter(e){for(var a=1;a<=e;a++)chapStatus[a-1].isUnlock=!0}function compleateChapter(e){for(var a=1;a<=e;a++)chapStatus[a-1].isComplete=!0}function isEmpty(e){return!$.trim(e.html())}function removeBr(e){function a(e){Array.isArray(e)?e.each((function(e,a){$(this).each((function(e,a){$(this).html($(this).html().replace(/<br\s*[\/]?>/gi," "))}))})):e.each((function(e,a){$(this).html($(this).html().replace(/<br\s*[\/]?>/gi," "))}))}void 0===e.device_version&&(e.device_version="mobile"),("mobile"==e.device_version?isMobile:!isMobile)?a(e.elem):e.elem1&&a(e.elem1)}function changeBr(e){function a(e){Array.isArray(e)?e.each((function(e,a){$(this).each((function(e,a){$(this).html($(this).html().replace(/<br\s*[\/]?>/gi," - "))}))})):e.each((function(e,a){$(this).html($(this).html().replace(/<br\s*[\/]?>/gi," - "))}))}void 0===e.device_version&&(e.device_version="mobile"),("mobile"==e.device_version?isMobile:!isMobile)?a(e.elem):e.elem1&&a(e.elem1)}function isVertical(){return $(window).height()>$(window).width()}function shuffle(e){for(var a,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),a=e[n-=1],e[n]=e[t],e[t]=a;return e}function eachFadeInByOpacity(e,a){for(var t=[],n=function(n){var o=e[n];t.push(setTimeout((function(){o.fadeInByOpacity(),n===e.length-1&&a()}),500*n))},o=0;o<e.length;o++)n(o)}function Video(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=this;t.video="string"==typeof e?$(e).get(0):e.get(0),$(t.video).off(),t.option={pauseOnClose:void 0===a.pauseOnClose||a.pauseOnClose,fullScreen:void 0===a.fullScreen||a.fullScreen,subtitle:void 0!==a.subtitle?a.subtitle:null,preload:void 0===a.preload||a.preload,muted:void 0===a.muted||a.muted,loop:void 0!==a.loop&&a.loop,autoplay:void 0!==a.autoplay&&a.autoplay,controls:void 0!==a.controls&&a.controls},$(e).attr({preload:t.option.preload}),t.event={onStart:a.onStart||function(){},onPlay:a.onPlay||function(){},onPlaying:a.onPlaying||function(){},onSeek:a.onSeek||function(){},onSeeking:a.onSeeking||function(){},onUpdate:a.onUpdate||function(){},onPause:a.onPause||function(){},onEnd:a.onEnd||function(){},onExitFullScreen:a.onExitFullScreen||function(){}},t.options=function(e,a){t.event[e]&&"function"==typeof a&&(t.event[e]=a)},t.option.subtitle&&(audioOrVideo.readyState>0?(track=document.createElement("track"),track.kind="subtitles",track.label=getCookie("lang"),track.srclang=getCookie("lang"),track.src=t.option.subtitle,track.default="default",track.addEventListener("load",(function(){this.mode="showing",t.video.textTracks[0].mode="showing"})),t.video.appendChild(track)):t.video.addEventListener("loadedmetadata",(function(){track=document.createElement("track"),track.kind="subtitles",track.label=getCookie("lang"),track.srclang=getCookie("lang"),track.src=t.option.subtitle,track.default="default",track.addEventListener("load",(function(){this.mode="showing",t.video.textTracks[0].mode="showing"})),this.appendChild(track)}))),t.openFullscreen=function(){t.video.requestFullscreen?t.video.requestFullscreen():t.video.mozRequestFullScreen?t.video.mozRequestFullScreen():t.video.webkitEnterFullscreen?t.video.webkitEnterFullscreen():t.video.msRequestFullscreen&&t.video.msRequestFullscreen()},t.exitFullscreen=function(){(document.fullscreenElement||document.mozFullScreenElement||t.video.webkitDisplayingFullscreen||document.msFullscreenElement)&&(document.exitFullscreen?document.exitFullscreen():t.video.webkitExitFullscreen?t.video.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen())},t.play=function(){if(/MSIE|Trident/.test(navigator.userAgent))t.video.play(),t.event.onStart(),t.option.fullScreen&&t.openFullscreen();else{var e=t.video.play();void 0!==e?e.then((function(e){t.event.onStart(),t.option.fullScreen&&t.openFullscreen()})).catch((function(e){console.info(e),$("#mute").show(),t.video.muted=!0,t.video.play(),t.event.onStart(),t.option.fullScreen&&t.openFullscreen()})):($("#mute").show(),t.video.muted=!0,t.event.onStart(),t.option.fullScreen&&t.openFullscreen())}},t.pause=function(){t.video.pause()},$(window).on("resize",(function(){var e=/MSIE|Trident/.test(navigator.userAgent),a=document.msFullscreenElement;e&&!a&&t.option.pauseOnClose&&(t.video.pause(),t.event.onExitFullScreen())})),$(t.video).on("mozfullscreenchange webkitfullscreenchange fullscreenchange",(function(){!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)&&t.option.pauseOnClose&&(t.video.pause(),t.event.onExitFullScreen())})),$(t.video).on("webkitendfullscreen",(function(){/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)&&t.option.pauseOnClose&&(t.video.pause(),t.event.onExitFullScreen())})),$(t.video).on("play",(function(){t.event.onPlay()})),$(t.video).on("playing",(function(){t.event.onPlaying()})),$(t.video).on("seeking",(function(){t.event.onSeeking()})),$(t.video).on("seeked",(function(){t.event.onSeek()})),$(t.video).on("timeupdate",(function(){t.event.onUpdate()})),$(t.video).on("ended",(function(){t.exitFullscreen(),t.event.onEnd()})),$(t.video).on("pause",(function(){t.event.onPause()}))}function addVideo(e,a,t,n,o,i,r,p,c){var l=$("<div>",{id:t,height:o}).appendTo(e),s=$('<video allow="autoplay" autobuffer="auto" preload '+r+" "+c+p+' height="'+o+'" width="'+n+'" id="videoplay'+i+'">',{}).css({display:"block",margin:"0 auto"}).appendTo(l);$("<source>",{src:a+".mp4",type:"video/mp4"}).appendTo(s),$("<source>",{src:a+".webm",type:"video/webm"}).appendTo(s),$("<source>",{src:a+".ogv",type:"video/ogv"}).appendTo(s),$("<div>",{}).appendTo(l).addClass("videoSubBar")}function openFullscreen(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}function exitFullscreen(e){var a=document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen||document.msExitFullscreen,t=/iPad|iPhone|iPod/i.test(navigator.userAgent);a?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t&&e.webkitExitFullscreen()}function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function ownKeys(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?ownKeys(Object(t),!0).forEach((function(a){_defineProperty(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function _defineProperty(e,a,t){return(a=_toPropertyKey(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function _toPropertyKey(e){var a=_toPrimitive(e,"string");return"symbol"==_typeof(a)?a:a+""}function _toPrimitive(e,a){if("object"!=_typeof(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,a||"default");if("object"!=_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}$.fn.offClick=function(){$(this).css("pointerEvents","none")},$.fn.onClick=function(){$(this).css({pointerEvents:"auto"})},$.preloadImages=function(){for(var e=0;e<arguments.length;e++)$("<img />").attr("src",arguments[e])};var header=$("#header"),isIOS=/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,isMobile=/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent),isTablet=/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent),isIE=window.navigator.userAgent.indexOf("MSIE ")>0||!!navigator.userAgent.match(/Trident.*rv\:11\./),timeouts=[],lockpage=[],intervals=[],activeGame="";function initialData(){return{"#select-lang":{nextPage:"welcome-page"},"#welcome-page":{prevPage:"select-lang",nextPage:"chap1-intro-page"},"#chap1-intro-page":{prevPage:"welcome-page",nextPage:"chap1-content1-page"},"#chap1-content1-page":{prevPage:"chap1-intro-page",nextPage:"chap1-content2-page"},"#chap1-content2-page":{prevPage:"chap1-content1-page",nextPage:"chap1-content3-page"},"#chap1-content3-page":{prevPage:"chap1-content2-page",nextPage:"chap1-content4-page"},"#chap1-content4-page":{prevPage:"chap1-content3-page",nextPage:"chap2-intro-page"},"#chap2-intro-page":{prevPage:"chap1-content4-page",nextPage:"chap2-video1-page"},"#chap2-video1-page":{prevPage:"chap2-intro-page",nextPage:"main-page"},"#main-page":{active:1,part1PrevPage:"chap2-video1-page",part1NextPage:"chap2-part3-game1-page",part2PrevPage:"chap2-part3-video2-page",part2NextPage:"chap2-part2-game1-page",part3PrevPage:"chap2-part2-result-page",part3NextPage:"chap2-part1-game1-page"},"#chap2-part3-game1-page":{prevPage:"main-page",nextPage:"chap2-part3-video1-page"},"#chap2-part3-video1-page":{prevPage:"chap2-part3-game1-page",nextPage:"chap2-part3-content1-page",fistTime:!0},"#chap2-part3-content1-page":{prevPage:"chap2-part3-video1-page",nextPage:"chap2-part3-content2-page"},"#chap2-part3-content2-page":{prevPage:"chap2-part3-content1-page",nextPage:"chap2-part3-game2-page"},"#chap2-part3-game2-page":{prevPage:"chap2-part3-content2-page",nextPage:"chap2-part3-game3-page"},"#chap2-part3-game3-page":{prevPage:"chap2-part3-game2-page",nextPage:"chap2-part3-video2-page"},"#chap2-part3-video2-page":{prevPage:"chap2-part3-game3-page",nextPage:"chap2-part3-result-page"},"#chap2-part3-result-page":{prevPage:"chap2-part3-video2-page",nextPage:"main-page"},"#chap2-part2-game1-page":{prevPage:"main-page",nextPage:"chap2-part2-video1-page"},"#chap2-part2-video1-page":{prevPage:"chap2-part2-game1-page",nextPage:"chap2-part2-content1-page",fistTime:!0},"#chap2-part2-content1-page":{prevPage:"chap2-part2-video1-page",nextPage:"chap2-part2-content2-page"},"#chap2-part2-content2-page":{prevPage:"chap2-part2-content1-page",nextPage:"chap2-part2-game2-page"},"#chap2-part2-game2-page":{prevPage:"chap2-part2-content2-page",nextPage:"chap2-part2-game3-page"},"#chap2-part2-game3-page":{prevPage:"chap2-part2-game2-page",nextPage:"chap2-part2-video2-page"},"#chap2-part2-video2-page":{prevPage:"chap2-part2-game3-page",nextPage:"chap2-part2-result-page"},"#chap2-part2-result-page":{prevPage:"chap2-part2-video2-page",nextPage:"main-page"},"#chap2-part1-game1-page":{prevPage:"main-page",nextPage:"chap2-part1-video1-page"},"#chap2-part1-video1-page":{prevPage:"chap2-part1-game1-page",nextPage:"chap2-part1-content1-page",fistTime:!0},"#chap2-part1-content1-page":{prevPage:"chap2-part1-video1-page",nextPage:"chap2-part1-content2-page"},"#chap2-part1-content2-page":{prevPage:"chap2-part1-content1-page",nextPage:"chap2-part1-game2-page"},"#chap2-part1-game2-page":{prevPage:"chap2-part1-content2-page",nextPage:"chap2-part1-game3-page"},"#chap2-part1-game3-page":{prevPage:"chap2-part1-game2-page",nextPage:"chap2-part1-video2-page"},"#chap2-part1-video2-page":{prevPage:"chap2-part1-game3-page",nextPage:"chap2-part1-result-page"},"#chap2-part1-result-page":{prevPage:"chap2-part1-video2-page",nextPage:"chap3-intro-page"},"#chap3-intro-page":{prevPage:"chap2-part1-result-page",nextPage:"chap3-game-page"},"#chap3-game-page":{prevPage:"chap3-intro-page",nextPage:"chap3-result-page",score:0},"#chap3-result-page":{prevPage:"chap3-game-page",nextPage:"chap1-intro-page"}}}var running,clientYChap1Content1,clientStepChap1Content1,clientYChap1Content2,clientStepChap1Content2,clientYChap1Content3,clientStepChap1Content3,clientYChap1Content4,clientStepChap1Content4,step,wheelCount,chap2Part1Game2Swiper1,chap2Part1Game2Swiper2,chap2Part1Game3Item,clientYChap2Part1Game3,chap2Part2Game2Swiper1,chap2Part2Game2Swiper2,chap2Part2Game3Item,chap2Part2Game3Counder,chap2Part3Game2Swiper1,chap2Part3Game2Swiper2,chap2Part3Game3Item,chap2Part3Game3Counder,click,score,$store=_objectSpread({},initialData());