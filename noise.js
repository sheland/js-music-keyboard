const matchSet = {
  "note c": "cAudio",
  "note d": "dAudio",
  "note e": "eAudio",
  "note f": "fAudio",
  "note g": "gAudio",
  "note a": "aAudio",
  "note b": "bAudio",
},

const keyboardSet = {
  "cAudio": 67,
  "dAudio": 68,
  "eAudio": 69,
  "fAudio": 70,
  "gAudio": 71,
  "aAudio": 65,
  "bAudio": 66,
}
$(document).ready( function(instrument) {   //waits for HTMLdoc to be loaded by browser then runs function
  instrumentClass = document.getElementsByClassName(instrument.className);

  for (let i = 0; i < matchSet.length; i++) {
    if (Object.values[instrumentClass] === instrumentClass) {
      let music = Object.values[instrumentClass],
    } else {
        return false
    }
  }

  return music; //music id

  let keyboardNumber = keyboardSet.Objects.values[music];

  if (document.getElementsByClassName("instrumentClass").click()) || event.keyCode === keyboardNumber
  // if (event.target.matches("instrumentClass"))
    audio = document.getElementById("music")
    audio.play()
  }  
});
