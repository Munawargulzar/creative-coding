var img, x,y ;//declaring the variables
function preload(){
  img = loadImage("london.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  background(0);
  x = mouseX;
  y = mouseY;
  image( img, 0 , 0);// to show the full image
  var c = get(x,y); // getting the position ofthe mouse
  fill(c); //the color depends on the position of the mouse
  ellipse(x, y, 100, 100);
}
