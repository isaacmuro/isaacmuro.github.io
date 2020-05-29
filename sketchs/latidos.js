/*
* Latidos: Al haber más gente en la plaza, los latidos de la fachada aumentan.
* Author: Isaac Muro
*
*/

let latido1, latido2;
let velConst;
let velocidad;
let frame = 0;
let x = new Array();
let y = new Array();
let xoff = 0.0;

function setup() {
  let canvas = createCanvas(192, 157);
  canvas.parent('sketch');
  latido1 = new Cor();
  latido2 = new Cor();
  velConst = 2;
  frame = frameCount;
}

function draw () {
  xoff = xoff + 0.01;
  let nx = noise(xoff);
  velocidad = map(nx, 0, 1, 0, 4, true);

  background(0);
    noStroke();
    // Lanzador al principio!
    if (frameCount == frame  + 10) latido1.activa();

    //Lanzador del segundo latido
    if (latido1.pulso >  30)  latido2.activa();

    latido1.setVelocidad(velocidad);
    latido2.setVelocidad(velocidad);
    latido1.dibuixa();
    latido2.dibuixa();

    //Lanzador del primer latido. Depende del segundo latido
    if (!latido2.esActivo()) latido1.activa();
}

class Cor {
  constructor() {
    this.angles = [0.6540827, 0.8017901, 1.2014626, 1.2722974, 0.44684246, 0.6885592];
    this.pulso = 0;
    this.actiu = false;
    this.vel = 0;
  }

  activa() {
    if (this.actiu != true) {
      this.actiu = true;
      this.pulso = 0;
    }
  }

  desactiva() {
    this.actiu = false;
  }

  esActivo() {
    return this.actiu;
  }

  dibuixa() {
    this.pulso += this.vel;
    if (this.actiu == true) {
      this.fachada(this.pulso, color(255, 0, 0, 255-2*this.pulso));
      this.fachada(this.pulso -15, color(0));
      if (this.pulso > 120)  this.desactiva();
    }
  }

  setVelocidad(velocidad) {
    this.vel = velocidad;
  }

  fachada(radi,col) {
    if (radi > 0) {
      let x = (tan(this.angles[4])*radi) / cos(this.angles[0]);
      let y = x * tan(this.angles[1]);
      let z = (tan(this.angles[1])*y) / tan(this.angles[2]);

      noStroke();
      fill(col);
      beginShape();
      vertex(96+x, 78-(cos(this.angles[0])*x));
      vertex(96+y, 78-(tan(this.angles[1])*y));
      vertex(96+y, 78-(tan(this.angles[1])*y));
      vertex(96+z, 78-(tan(this.angles[2])*z));
      vertex(96+z, 78-(tan(this.angles[2])*z));
      vertex(96+z, 78-(tan(this.angles[3])*z));
      vertex(96+z, 78-(tan(this.angles[3])*z));
      vertex(96-z, 78-(tan(this.angles[3])*z));
      vertex(96-z, 78-(tan(this.angles[3])*z));
      vertex(96-z, 78-(tan(this.angles[2])*z));
      vertex(96-z, 78-(tan(this.angles[2])*z));
      vertex(96-y, 78-(tan(this.angles[1])*y));
      vertex(96-y, 78-(tan(this.angles[1])*y));
      vertex(96-x, 78-(cos(this.angles[0])*x));
      vertex(96-x, 78-(cos(this.angles[0])*x));
      vertex(96-radi, 78-(tan(this.angles[4])*radi));
      vertex(96-radi, 78-(tan(this.angles[4])*radi));
      vertex(96-radi, 78+(tan(this.angles[5])*radi));
      vertex(96-radi, 78+(tan(this.angles[5])*radi));
      vertex(96+radi, 78+(tan(this.angles[5])*radi));
      vertex(96+radi, 78+(tan(this.angles[5])*radi));
      vertex(96+radi, 78-(tan(this.angles[4])*radi));
      vertex(96+radi, 78-(tan(this.angles[4])*radi));
      vertex(96+x, 78-(cos(this.angles[0])*x));
      endShape();
    }
  }
}
