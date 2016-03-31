//Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// MFD:
// important! for alignment, you should make things
// relative to the canvas' current width/height.
//

function draw() {
  console.log('in draw');
  resize();
  var body = document.getElementsByTagName("body")
  console.log(body);
  body.onresize = resize;
}

function resize(){
  console.log("in resize");
  var canvas = document.getElementById("tileCanvas")
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}