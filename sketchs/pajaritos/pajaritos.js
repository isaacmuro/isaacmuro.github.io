
var myCapture, // camera
    myVida;    // VIDA

var backgroundCapturedFlag = false;

// ISAAC
// To know if the zone is active
var isActive = false;
var recording = false;
// width and eight of the video capture
var widthCal, heightCal;
// To capture the video.
var videoWriter;

function dimensionCal(){
  widthCal = windowWidth - 60;
  heightCal = widthCal*3/4;
  if (heightCal > windowHeight){
    heightCal = windowHeight -60;
    widthCal = heightCal*4/3;
  }
}

function initCaptureDevice() {
  try {
    myCapture = createCapture(VIDEO);
    myCapture.size(widthCal, heightCal);
    //myCapture.size(320, 240);
    myCapture.elt.setAttribute('playsinline', '');
    myCapture.hide();
    console.log(
      '[initCaptureDevice] capture ready. Resolution: ' +
      myCapture.width + ' ' + myCapture.height
    );
  } catch(_err) {
    console.log('[initCaptureDevice] capture error: ' + _err);
  }
}

function setup() {
  dimensionCal();
  var canvas = createCanvas(widthCal, heightCal);
  canvas.parent('sketch-holder');
  console.log('width:' + widthCal + ','+'height'+heightCal);
  initCaptureDevice(); // and access to the camera


  myVida = new Vida(this); // create the object
  myVida.progressiveBackgroundFlag = false;
  myVida.imageFilterThreshold = 0.2;
  myVida.mirror = myVida.MIRROR_HORIZONTAL;
  myVida.handleActiveZonesFlag = true;
  myVida.setActiveZonesNormFillThreshold(0.05);
  var padding = 0.07; var n = 5;
  var zoneWidth = 0.1; var zoneHeight = 0.5;
  var hOffset = (1.0 - (n * zoneWidth + (n - 1) * padding)) / 2.0;
  var vOffset = 0.25;

  myVida.addActiveZone(
    0,
    0, 0, 0.99, 0.99,
    onActiveZoneChange
  );

  frameRate(30); // set framerate
}
/*
function windowResized() {
  dimensionCal();
   resizeCanvas(widthCal, heightCal);
}
*/

//
// Save the current frame as a background image
//

function chooseBackground(){
  if(myCapture !== null && myCapture !== undefined) { // safety first
    myVida.setBackgroundImage(myCapture);
    console.log('background set');
    backgroundCapturedFlag = true;
  }
}

//
// Start recording the frames and showing a red square to show that it is recording
//

function record (){
  videoWriter.addFrame(document.getElementById('defaultCanvas0'));
  fill(255,0,0);
  rect(30, 20, 55, 55, 20);
}

//
// Stop recording and saves the video as a webm. Download the video in the browser.
//

function stopRecording(){
  videoWriter.complete().then(function(webMBlob) {
    download(webMBlob, "pajaritos"+moment().format('YYYYMMDkkmmss')+".webm", "video/webm");
  });
}

//
// Delete the instance of video
//

function deleteVideo(){
  videoWriter = null;
}

//
// Create an instance of video
//

function newVideo(){
  videoWriter = new WebMWriter({
      quality: 0.95,    // WebM image quality from 0.0 (worst) to 1.0 (best)
      fileWriter: null, // FileWriter in order to stream to a file instead of buffering to memory (optional)
      fd: null,         // Node.js file handle to write to instead of buffering to memory (optional)

      // You must supply one of:
      frameRate: 15     // Number of frames per second
  });
}

var state = 1;
function draw() {
  //console.log('isActive:'+isActive + 'state:'+state+'recording:'+recording+'frame:'+frameCount);
  if(myCapture !== null && myCapture !== undefined) { // safety first
    background(0, 0, 255);
    myVida.update(myCapture);
    image(myVida.currentImage, 0, 0);
    noStroke(); fill(255, 255, 255);
    text('camera', 20, 20);

    if (backgroundCapturedFlag && recording){ // safety first
      if (isActive && state == 2){
        record ();
      }
      if (!isActive && state == 2){
        state = 1;
        stopRecording();
        newVideo();
      }
      if (isActive && state == 1){
        state = 2;
        record();
      }
    }
  }
  else {
    background(255, 0, 0);
  }
}

function onActiveZoneChange(_vidaActiveZone) {
  console.log(
    'zone: ' + _vidaActiveZone.id +
    ' status: ' + _vidaActiveZone.isMovementDetectedFlag
  );
  isActive=_vidaActiveZone.isMovementDetectedFlag;
}
