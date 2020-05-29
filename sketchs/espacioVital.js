/*
* 
* @author: Isaac Muro
*
*/ 


let max_distance;
let divW = 400;
let blocksize = 6;
let col = 20;
let perc = 90;
let xoff = 0.0;
let yoff = 0.0;
let height = 400;  

function setup() {
   //divW = $('#sketch').width();
   let canvas = createCanvas(divW, height);
   // Move the canvas so it's inside our <div id="sketch-holder">.
   canvas.parent('sketch');

   noStroke();
   max_distance = dist(0, 0, divW, height);

   background(50);
}



function draw() {
  background(100);
  xoff = xoff + 0.01;
  yoff = yoff + 0.01;
  let nx = noise(xoff) * divW;
  let ny = noise(yoff) * height;

console.log("nx:"+nx+"ny:"+ny);

      for(let y=0; y<= height; y+=blocksize) {
        for(let x=0; x< divW; x+=blocksize) {
        
          let minDist = 500;
          let blob = 0;
       
          let size = dist(nx, ny, y, x);
            if (minDist > size) {
              minDist = size;
              blob = 2;
            }
        
          minDist = minDist/max_distance * perc;
          fill(10+col*blob, 20+blob*col, 40+blob*col);
          ellipse(y,x,minDist,minDist);
        
        }
      }
  
}

