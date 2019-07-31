var t;
var theta;
var maxFrameCount = 200; // frameCount, change for faster or slower animation
var divW = 710;
function setup() {
  divW = $('#sketchWave').width();
  var canvas = createCanvas(divW, 400);
   // Move the canvas so it's inside our <div id="sketch-holder">.
    canvas.parent('sketchWave');
  noStroke();
}

function draw() {
  background("#242949");
  textAlign(CENTER);
  textSize(98);
  fill(255);
  text('Gitlab Now!', width/2, height/2);
  translate(width/2, height/2); // translate 0,0 to center

  t = frameCount/parseFloat(maxFrameCount);
  theta = TWO_PI*t;

  for ( var x= -175; x <= 175; x += 25) {
    for ( var y= -100; y <= 155; y += 50) {
      var offSet = 50*x+y+y;   // play with offSet to change map below

      var x2 = map(cos(-theta+offSet), 0, 1, 0, 25); // map x position
      var y2 = map(cos(-theta+offSet), 0, 1, 25, 0); // map y position
      var sz2 = map(sin(-theta+offSet), 0, 1, 15, 45); // map size off the ellipse
      fill(250-(x/2), 150+(x/6), 250-(y/2)); // color with gradient created

      ellipse(x+x2, y-y2, sz2, sz2);
    }
  }
}
function windowResized() {
  divW = $('#sketchWave').width();
  resizeCanvas(divW, 400);
}
