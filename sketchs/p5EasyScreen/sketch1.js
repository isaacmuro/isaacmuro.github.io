let author = "Isaac Muro";

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.style('display', 'block');
   myCanvas.parent('prova');
}

function draw() {
  background(220);
  ellipse(50,50,80,80);
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
