// SOUNDS
var soundId1;

function initSound() {
  soundId1 = new Howl({
    src: ["sound/background-music.mp3"],
    html5: true,
    loop: true,
    volume: 0.5,
  });
}

function normalSound() {
  if (soundId1 != undefined) {
    if (!soundId1.playing(soundId1)) {
      soundId1 = soundId1.play();
    }
  }
}
