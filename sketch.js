let alienX = 200;
let alienY = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  fill(150, 200, 255); 
  ellipse(alienX, alienY, 100, 150); 
  
  fill(100, 150, 200); 
  rect(alienX - 40, alienY - 50, 30, 100, 20); 
  rect(alienX + 10, alienY - 50, 30, 100, 20);
  
  fill(100, 150, 200); 
  rect(alienX - 30, alienY + 40, 20, 80, 20); 
  rect(alienX + 10, alienY + 40, 20, 80, 20);
  
  
  fill(150, 200, 255); 
  ellipse(alienX, alienY - 90, 80, 80); 
  
  fill(0); 
  ellipse(alienX - 20, alienY - 100, 20, 20); 
  ellipse(alienX + 20, alienY - 100, 20, 20); 
  
  fill(255); 
  ellipse(alienX - 20, alienY - 100, 10, 10); 
  ellipse(alienX + 20, alienY - 100, 10, 10); 
  
  noFill(); 
  stroke(255); 
  arc(alienX, alienY - 80, 40, 20, 0, PI);
}
