const matchSet = {
  "note c": "cAudio",
  "note d": "dAudio",
  "note e": "eAudio",
  "note f": "fAudio",
  "note g": "gAudio",
  "note a": "aAudio",
  "note b": "bAudio",
}

const keyboardSet = {
   67: "cAudio",
   68: "dAudio",
   69: "eAudio",
   70: "fAudio",
   71: "gAudio",
   65: "aAudio",
   66: "bAudio",
}


$(document).ready( function() {   //waits for HTMLdoc to be loaded by browser then runs function
  $('.note').click(function(e) {
      const noteClass = e.target.className; //"note a"
      const audioId = matchSet[noteClass] // "aAudio"
      const audio = document.getElementById(audioId); // audioElement with matching ID
      audio.play();
  });

  $('body').keydown((e) => {
    const keyCode = e.keyCode; //71
    const audioId = keyboardSet[keyCode]; //"gAudio"
    const audio = document.getElementById(audioId); // audioElement with matching ID
    debugger
    audio.play();
  });
});
