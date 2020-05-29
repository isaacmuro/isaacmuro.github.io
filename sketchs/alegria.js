/*
* Título: Alegria
* Author: Isaac Muro Guiu
* Trabajo basado en el grandérrimo trabajo de Carlos Cevallos Manzano!
* http://programalaplaza.medialab-prado.es/sketch/view/0bbf4185d8c559dc94bc8d435be5eff3
*/

let latidos = new Array();
let velocidad;
let frame;
let drawSort = new Array();
let numCors;
let factor = 0.01;

function setup() {
  let canvas = createCanvas(192, 157);
  canvas.parent('sketch');
  numCors = 10;
  drawSort = new Array(numCors);
  latidos = new Array(numCors);

  for (let i = 0; i < latidos.length; i++){
    latidos[i] = new Cor();
    drawSort[i] = i;
  }
  velocidad = random(1, 3);
  frame = frameCount;
}

function draw () {
  background(0);
  noStroke();
  // Lanzador al principio!
  if (frameCount == frame  + 10) latidos[0].activa();

  //Lanzador del siguiente latido
  for (let i = 1; i < latidos.length; i++){
    if (latidos[i - 1].pulso >  28 && latidos[i - 1].esActivo())  latidos[i].activa();
  }

  //Ordena el dibuixar
  if (!latidos[drawSort[0]].esActivo()) alFinalArray();

  //Dibuixa
  for (let i = 0; i < latidos.length; i++){
    latidos[i].setVelocidad(velocidad);
    latidos[drawSort[i]].dibuixa();
  }

  //Lanzador del primer latido. Depende del último latido
  if (latidos[latidos.length - 1].pulso > 28) latidos[0].activa();
  velocidad += factor;
  if (velocidad > 3) factor = - 0.01;
  if (velocidad < 0.3) factor = 0.01;
}

function alFinalArray(){
  let aux = drawSort[0];
  for (let i = 1; i < drawSort.length; i++){
    drawSort[i-1] = drawSort[i];
  }
  drawSort[drawSort.length - 1] = aux;
}

class Cor {
  constructor() {
    this.angles = [0.6540827, 0.8017901, 1.2014626, 1.2722974, 0.44684246, 0.6885592];
    this.pulso = 0;
    this.actiu = false;
    this.vel = 0;
    this.colR = 255;
    this.colG = 255;
    this.colB = 255;
  }

  activa() {
    if (this.actiu != true) {
      this.actiu = true;
      this.pulso = 0;
      this.colR = random(255);
      this.colG = random(255);
      this.colB = random(255);

    }
  }

  desactiva() {
    this.actiu = false;
    this.pulso = 0;
  }

  esActivo() {
    return this.actiu;
  }

  dibuixa() {
    if (this.actiu == true) {
      this.pulso += this.vel;
      this.fachada(this.pulso, color(this.colR, this.colG, this.colB, 255-2*this.pulso));
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
