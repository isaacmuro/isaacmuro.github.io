var max_distance;
  var divW = 710;
function setup() {
divW = $('#sketch-404').width();
var canvas = createCanvas(divW, 400);
 // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-404');

  noStroke();
  max_distance = dist(0, 0, width, height);
}

function draw() {
  background(0);
textAlign(CENTER);
textSize(248);
fill(255);
text('404', width/2, height/2);

  for(var i = 0; i <= width; i += 20) {
    for(var j = 0; j <= height; j += 20) {
      var size = dist(mouseX, mouseY, i, j);
      size = size/max_distance * 66;
      ellipse(i, j, size, size);
    }
  }
}
function windowResized() {
  divW = $('#sketch-404').width();
  resizeCanvas(divW, 400);
}
