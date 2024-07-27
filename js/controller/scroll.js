function scrollOnce(pageId) {
  let clientY;
  if (mobileDevice()) {
    $(pageId).on("touchstart", function (e) {
      clientY = e.touches[0].clientY;
    });

    $(pageId).on("touchend", function (e) {
      let deltaY;
      deltaY = e.changedTouches[0].clientY - clientY;
      clientY = 0;
      // alert(deltaY);
      if (deltaY >= 110) {
        goto($store[pageId].prevPage, "prev");
        if (pageId == "#chap2-content1-page") {
          $(`${pageId} .title strong`).addClass("next-page");
        }
      } else if (deltaY < -100) {
        goto($store[pageId].nextPage, "next");
        if (pageId == "#chap2-content1-page") {
          $(`${pageId} .title strong`).addClass("next-page");
        }
      }

      // reset score in chap3-game-page
      if (pageId == "#chap3-result-page") {
        $store["#chap3-game-page"].score = 0;
      }
      // $(pageId).off("touchmove");
    });
  } else {
    $(pageId).on("wheel", function (e) {
      if (e.originalEvent.deltaY !== 0) {
        if (e.originalEvent.deltaY < 0) {
          goto($store[pageId].prevPage, "prev");
          if (pageId == "#chap2-content1-page") {
            $(`${pageId} .bottle__title`).addClass("next-page");
          }
        } else {
          goto($store[pageId].nextPage, "next");
          if (pageId == "#chap2-content1-page") {
            $(`${pageId} .bottle__title`).addClass("next-page");
          }
        }
      }
    });
  }
}
