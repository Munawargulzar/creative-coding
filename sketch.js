
var numFrames = 6 ; //total images/total frames
var frame = 0 // always 0
var images = new Array(numFrames);
//Array - stores multiple data/images

function preload(){
      images[0] = loadImage("rabit 1.png");
      images[1] = loadImage("rabit 2.png");
      images[2] = loadImage("rabit 3.png");
      images[3] = loadImage("rabit 4.png");
      images[4] = loadImage("rabit 5.png");
      images[5] = loadImage("rabit 6.png");
      
 }
function setup() {
  createCanvas(600, 400);
  frameRate(20); //speed of the flying bird
  background(0);
}

function draw() {
  background(225);
  frame++; //increment - add 1 value
  if (frame == numFrames) frame = 0; //if 0 will be equal to 6, then it will go back again to 0
  image(images[frame], mouseX - 75, mouseY - 100); // mouse interaction
}
