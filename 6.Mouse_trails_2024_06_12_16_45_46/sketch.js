function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  fill(220, 20);
  rect(0, 0, width, height);
  
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 50, 50);
}
