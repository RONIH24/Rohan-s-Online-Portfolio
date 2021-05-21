var text = 'Hello, I am a student at Dublin High pursuing my goal of becoming a programmmer, I hope you enjoy my website!',
    soFar = "";

var visible = document.querySelector(".visible"),
    invisible = document.querySelector(".invisible");

invisible.innerHTML = text;
var t = setInterval(function(){
  soFar += text.substr(0, 1),
  text = text.substr(1);

  visible.innerHTML = soFar;
  invisible.innerHTML = text;

  if (text.length === 0) clearInterval(t);
}, 150)