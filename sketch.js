let carX = 50;
let carY = 200;
let carSpeed = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  fill(0, 128, 255);
  beginShape();
  vertex(carX + 20, carY);
  vertex(carX + 20, carY - 50);
  vertex(carX + 30, carY - 60);
  vertex(carX + 70, carY - 60);
  vertex(carX + 80, carY - 50);
  vertex(carX + 80, carY);
  endShape(CLOSE);
  
  fill(51);
  rect(carX + 30, carY - 50, 40, 20);
  rect(carX + 40, carY - 55, 20, 5);
  
  fill(0);
  ellipse(carX + 30, carY, 20, 20);
  ellipse(carX + 70, carY, 20, 20);
  
  fill(255, 255, 0);
  ellipse(carX + 10, carY - 5, 10, 10);
  ellipse(carX + 90, carY - 5, 10, 10);
  
  carX += carSpeed;
  
  if (carX > width + 50) {
    carX = -50;
  }
}
